<template>
  <section ref="sectionRef" class="py-32 bg-surface">
    <div class="max-w-4xl mx-auto px-8">
      <div class="text-center mb-16">
        <h2 class="font-headline text-5xl font-bold text-primary mb-4">INICIA TU PROYECTO</h2>
        <p class="font-body text-on-surface-variant">Envía tus especificaciones técnicas o planos DXF/CAD para una
          cotización formal en menos de 24 horas.</p>
      </div>
      <div class="bg-white p-12 shadow-[0px_24px_48px_rgba(15,62,117,0.06)] relative">
        <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-2">
            <label class="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Nombre
              Completo</label>
            <input v-model="form.name" required :disabled="isSubmitting"
              class="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary px-4 py-4 font-body disabled:opacity-50"
              type="text" />
          </div>
          <div class="space-y-2">
            <label class="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Correo
              Electrónico</label>
            <input v-model="form.email" required :disabled="isSubmitting"
              class="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary px-4 py-4 font-body disabled:opacity-50"
              type="email" />
          </div>
          <div class="space-y-2 md:col-span-2">
            <label class="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Detalles del Proyecto
              y Requisitos de Material</label>
            <textarea v-model="form.details" required :disabled="isSubmitting"
              class="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary px-4 py-4 font-body disabled:opacity-50"
              rows="4"></textarea>
          </div>
          <div class="md:col-span-2 space-y-2">
            <label class="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Archivos Adjuntos
              (Opcional)</label>
            <div @click="triggerFileInput" @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false"
              @drop.prevent="handleDrop"
              :class="['border-2 border-dashed p-8 text-center transition-colors cursor-pointer', isDragging ? 'border-primary bg-primary/5' : 'border-outline-variant bg-surface-container-low hover:bg-surface-container-high']">
              <Icon name="material-symbols:cloud-upload-outline"
                :class="['text-4xl mb-2 block mx-auto transition-colors', isDragging ? 'text-primary' : 'text-on-surface-variant']" />
              <p class="font-body text-sm text-on-surface-variant mb-2">Arrastra y suelta tus archivos CAD/PDF aquí o
                haz clic para seleccionar</p>
              <input ref="fileInputRef" type="file" multiple class="hidden" @change="handleFileSelect"
                :disabled="isSubmitting" />
              <div v-if="form.files.length > 0" class="mt-4 flex flex-wrap gap-2 justify-center">
                <span v-for="(file, index) in form.files" :key="index"
                  class="inline-flex items-center gap-2 bg-surface-container-highest px-3 py-1 rounded-full text-xs font-body text-on-surface">
                  <Icon name="material-symbols:attach-file" class="text-on-surface-variant" />
                  {{ file.name }}
                  <button type="button" @click.stop="removeFile(index)" class="hover:text-error transition-colors"
                    :disabled="isSubmitting">
                    <Icon name="material-symbols:close" />
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="md:col-span-2">
            <button :disabled="isSubmitting"
              class="w-full bg-primary text-on-primary font-label uppercase tracking-widest text-sm py-6 font-bold hover:bg-primary-container transition-all disabled:opacity-70 flex justify-center items-center gap-2"
              type="submit">
              <Icon v-if="isSubmitting" name="svg-spinners:180-ring" class="text-xl" />
              <span>{{ isSubmitting ? 'Enviando...' : 'Enviar Proyecto para Cotización' }}</span>
            </button>
          </div>
        </form>

        <div v-if="submitMessage"
          :class="['mt-6 p-4 border rounded font-body text-sm text-center', isSuccess ? 'bg-green-50 border-green-200 text-green-800' : 'bg-error-container border-error text-on-error-container']">
          {{ submitMessage }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'
import gsap from 'gsap'

const sectionRef = ref(null)
const fileInputRef = ref(null)
const isDragging = ref(false)
const isSubmitting = ref(false)
const submitMessage = ref('')
const isSuccess = ref(false)

const form = reactive({
  name: '',
  email: '',
  details: '',
  files: []
})

const triggerFileInput = () => {
  if (!isSubmitting.value && fileInputRef.value) {
    fileInputRef.value.click()
  }
}

const handleFileSelect = (event) => {
  const selectedFiles = Array.from(event.target.files)
  addFiles(selectedFiles)
  if (fileInputRef.value) fileInputRef.value.value = ''
}

const handleDrop = (event) => {
  isDragging.value = false
  const droppedFiles = Array.from(event.dataTransfer.files)
  addFiles(droppedFiles)
}

const addFiles = (newFiles) => {
  form.files = [...form.files, ...newFiles]
}

const removeFile = (index) => {
  form.files.splice(index, 1)
}

const submitForm = () => {
  const subject = encodeURIComponent(`Nueva cotización de proyecto de: ${form.name}`)
  let bodyText = `Nombre: ${form.name}\nCorreo: ${form.email}\n\nDetalles del proyecto:\n${form.details}\n`

  if (form.files.length > 0) {
    bodyText += `\n[Nota: Por favor, adjunte los siguientes archivos manualmente antes de enviar este correo: ${form.files.map(f => f.name).join(', ')}]`
  }

  const body = encodeURIComponent(bodyText)
  const mailtoLink = `mailto:glsolucionesinox@gmail.com?subject=${subject}&body=${body}`

  window.location.href = mailtoLink

  isSuccess.value = true
  if (form.files.length > 0) {
    submitMessage.value = 'Se ha abierto tu cliente de correo. IMPORTANTE: Recuerda adjuntar manualmente tus archivos antes de enviar el correo, ya que por seguridad los navegadores no permiten adjuntarlos automáticamente.'
  } else {
    submitMessage.value = 'Se ha abierto tu cliente de correo para enviar la solicitud.'
  }
}

onMounted(async () => {
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)
  gsap.from(sectionRef.value, {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
    }
  })
})
</script>
