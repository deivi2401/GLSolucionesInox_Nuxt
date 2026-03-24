<template>
  <main class="min-h-screen pt-20">
    <!-- Hero Section / Title -->
    <section class="px-8 pt-12 pb-16 max-w-7xl mx-auto">
      <div class="border-l-4 border-primary pl-8">
        <p class="font-label uppercase tracking-[0.2em] text-sm text-primary mb-4 font-bold">Consulta Técnica</p>
        <h1 class="text-6xl md:text-8xl font-bold tracking-tighter text-primary leading-none font-headline">
          CONECTA CON LA <br/> PRECISIÓN.
        </h1>
      </div>
    </section>

    <!-- Main Content Bento Grid -->
    <section class="px-8 pb-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
      
      <!-- Inquiry Form (Get a Quote) -->
      <div class="lg:col-span-7 bg-surface-container-lowest p-12 shadow-[0px_24px_48px_rgba(15,62,117,0.06)] relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
          <svg class="fill-primary" viewBox="0 0 100 100">
            <rect height="2" width="100" x="0" y="0"></rect>
            <rect height="2" width="100" x="0" y="20"></rect>
            <rect height="2" width="100" x="0" y="40"></rect>
            <rect height="2" width="100" x="0" y="60"></rect>
            <rect height="2" width="100" x="0" y="80"></rect>
          </svg>
        </div>
        <h2 class="text-3xl font-bold tracking-tight text-primary mb-12 font-headline">COTIZA TU PROYECTO</h2>
        
        <form class="space-y-10" @submit.prevent="submitForm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="relative group">
              <input v-model="form.name" :disabled="isSubmitting" class="peer w-full bg-surface-container-high border-0 border-b-2 border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-colors font-body text-on-surface disabled:opacity-50" id="name" name="name" placeholder=" " type="text" required />
              <label class="absolute left-0 top-4 text-outline duration-300 transform -translate-y-8 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:text-primary font-label uppercase tracking-widest text-xs" for="name">Nombre Completo</label>
            </div>
            <div class="relative group">
              <input v-model="form.email" :disabled="isSubmitting" class="peer w-full bg-surface-container-high border-0 border-b-2 border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-colors font-body text-on-surface disabled:opacity-50" id="email" name="email" placeholder=" " type="email" required />
              <label class="absolute left-0 top-4 text-outline duration-300 transform -translate-y-8 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:text-primary font-label uppercase tracking-widest text-xs" for="email">Correo Electrónico</label>
            </div>
          </div>
          <div class="relative group">
            <select v-model="form.service" :disabled="isSubmitting" class="peer w-full bg-surface-container-high border-0 border-b-2 border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-colors font-body text-on-surface appearance-none disabled:opacity-50" id="service" name="service" required>
              <option disabled value="">Selecciona una opción</option>
              <option value="Fabricación en Acero Inoxidable">Fabricación en Acero Inoxidable</option>
              <option value="Corte Láser y Guillotina">Corte Láser y Guillotina</option>
              <option value="Ensamblaje y Soldadura TIG">Ensamblaje y Soldadura TIG</option>
              <option value="Prototipo Personalizado">Prototipo Personalizado</option>
              <option value="Otro">Otro</option>
            </select>
            <label class="absolute left-0 top-4 text-outline duration-300 transform -translate-y-8 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:text-primary font-label uppercase tracking-widest text-xs" for="service">Tipo de Servicio</label>
          </div>
          <div class="relative group">
            <textarea v-model="form.message" :disabled="isSubmitting" class="peer w-full bg-surface-container-high border-0 border-b-2 border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-colors font-body text-on-surface disabled:opacity-50" id="message" name="message" placeholder=" " rows="4" required></textarea>
            <label class="absolute left-0 top-4 text-outline duration-300 transform -translate-y-8 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:text-primary font-label uppercase tracking-widest text-xs" for="message">Detalles y Especificaciones del Proyecto</label>
          </div>
          
          <div class="space-y-4">
            <!-- Cloudflare Turnstile Widget -->
            <NuxtTurnstile v-model="turnstileToken" />
            
            <button :disabled="isSubmitting || !turnstileToken" class="w-full bg-primary text-on-primary py-6 font-headline font-bold tracking-[0.2em] text-lg hover:bg-primary-container transition-all flex justify-center items-center gap-4 disabled:opacity-70 mt-4" type="submit">
              <Icon v-if="isSubmitting" name="svg-spinners:180-ring" class="text-xl" />
              <span>{{ isSubmitting ? 'ENVIANDO...' : 'SOLICITAR COTIZACIÓN' }}</span>
              <span v-if="!isSubmitting" class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>
        </form>
        <div v-if="submitMessage" :class="['mt-6 p-4 border rounded font-body text-sm text-center', isSuccess ? 'bg-green-50 border-green-200 text-green-800' : 'bg-error-container border-error text-on-error-container']">
          {{ submitMessage }}
        </div>
      </div>

      <!-- Contact Sidebar -->
      <div class="lg:col-span-5 space-y-12">
        <!-- Visit Our Facility Card -->
        <div class="bg-surface-container p-8 border-l-8 border-primary relative overflow-hidden">
          <h3 class="text-2xl font-bold tracking-tight text-primary mb-6 font-headline">NUESTRAS INSTALACIONES</h3>
          <div class="mb-8 space-y-4">
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-primary mt-1" data-icon="location_on">location_on</span>
              <div>
                <p class="font-bold text-on-surface font-body">Grupo López Soluciones Inox</p>
                <p class="text-secondary font-body leading-relaxed">
                  Donato Guerra 2110<br />
                  Col. Juárez, C.P. 88209<br />
                  Nuevo Laredo, TAMPS, México
                </p>
              </div>
            </div>
          </div>
          <!-- Google Map -->
          <div class="w-full aspect-video bg-surface-container-highest relative overflow-hidden min-h-[300px]">
            <iframe
              src="https://maps.google.com/maps?q=Donato%20Guerra%202110%2C%20Col%20Juarez%2C%2088209%20Nuevo%20Laredo%2C%20TAMPS%2C%20Mexico+(Grupo%20L%C3%B3pez%20Soluciones%20Inox)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
              class="absolute inset-0 w-full h-full"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <!-- Direct Contact Details -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <div class="bg-primary p-8 text-on-primary">
            <p class="font-label uppercase tracking-[0.2em] text-[10px] text-on-primary/60 mb-4">Correo Directo</p>
            <div class="flex items-center gap-4">
              <span class="material-symbols-outlined" data-icon="mail">mail</span>
              <a class="text-xl font-bold tracking-tight font-headline hover:text-on-primary-container transition-colors" href="mailto:glsolucionesinox@gmail.com">glsolucionesinox@gmail.com</a>
            </div>
          </div>
          <div class="bg-surface-container-highest p-8 border border-outline-variant/30">
            <p class="font-label uppercase tracking-[0.2em] text-[10px] text-outline mb-4">Línea Directa</p>
            <div class="flex items-center gap-4">
              <span class="material-symbols-outlined text-primary" data-icon="call">call</span>
              <a class="text-xl font-bold tracking-tight font-headline text-primary hover:text-primary-container transition-colors" href="tel:+528672517096">+52 (867) 251-7096</a>
            </div>
          </div>
        </div>

        <!-- Operating Hours -->
        <div class="p-8 border border-outline-variant/30">
          <h4 class="font-label uppercase tracking-widest text-xs text-outline mb-6 font-bold">Horario de Operaciones</h4>
          <div class="space-y-3 font-body text-sm">
            <div class="flex justify-between border-b border-outline-variant/10 pb-2">
              <span class="text-secondary">Lunes — Viernes</span>
              <span class="font-bold">08:00 — 18:00</span>
            </div>
            <div class="flex justify-between border-b border-outline-variant/10 pb-2">
              <span class="text-secondary">Sábado</span>
              <span class="font-bold">08:00 — 14:00</span>
            </div>
            <div class="flex justify-between text-outline">
              <span>Domingo</span>
              <span class="uppercase italic text-xs">Cerrado</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Specs Ticker/Banner -->
    <section class="bg-primary py-10 overflow-hidden">
      <div class="flex whitespace-nowrap gap-12 text-on-primary/20 font-headline font-black text-6xl italic select-none">
        <span>ESPECIALISTAS EN ACERO INOXIDABLE</span>
        <span>•</span>
        <span>ALTA CAPACIDAD DE FABRICACIÓN</span>
        <span>•</span>
        <span>COMPROMISO CON LA CALIDAD</span>
        <span>•</span>
        <span>SOLUCIONES A MEDIDA</span>
        <span>•</span>
        <span>ESPECIALISTAS EN ACERO INOXIDABLE</span>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useHead } from '#imports'

useHead({
  title: 'Contacto - Grupo López Soluciones Inox',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
    }
  ]
})

const form = reactive({
  name: '',
  email: '',
  service: '',
  message: ''
})

const submitMessage = ref('')
const isSubmitting = ref(false)
const isSuccess = ref(false)
const turnstileToken = ref('')

const submitForm = async () => {
  if (isSubmitting.value) return
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('email', form.email)
    
    // API uses 'details' field for message so concatenate service and message
    const detailsText = `Servicio Solicitado: ${form.service}\n\nDetalles y Especificaciones del Proyecto:\n${form.message}`
    formData.append('details', detailsText)
    formData.append('cf-turnstile-response', turnstileToken.value)

    const { error } = await useFetch('/api/contact', {
      method: 'POST',
      body: formData
    })

    if (error.value) {
      throw new Error(error.value.message || 'Error occurred during submission')
    }

    isSuccess.value = true
    submitMessage.value = '¡Tu solicitud ha sido enviada con éxito! Nos pondremos en contacto contigo pronto.'
    
    // Reset form
    form.name = ''
    form.email = ''
    form.service = ''
    form.message = ''
    
  } catch (error) {
    console.error('Submission error:', error)
    isSuccess.value = false
    submitMessage.value = 'Hubo un error al enviar tu solicitud. Intenta de nuevo más tarde o revisa tu configuración de correo.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
