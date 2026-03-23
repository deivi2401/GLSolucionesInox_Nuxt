<template>
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section ref="heroRef" class="relative h-[716px] flex items-center overflow-hidden bg-primary pt-20">
      <div class="absolute inset-0 opacity-40 grayscale mix-blend-overlay">
        <img alt="Corte industrial de acero de precisión" class="w-full h-full object-cover" data-alt="Vista detallada de corte láser industrial en placa gruesa de acero inoxidable" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYbWWZUKJ_6bBrE7QNUWks7hvLhZmzcZJ5WL0V9A_RJ9CC8HHUFxoVCoKzfFsBZxcUg21vAbTRSUNuYR5NxKODsyiyCQ2jAOGlbt1eSTLtRSgDRPkEMu4aV3BD3O3oxR1GYaG8qGjC3742ij5q3-NaMGjFscmkMEif2GO6c4yj5OrgxOFL8Qh17Tsy5Rk1fVylmIzkw6Zq4lWPjFbGMVRHPAsheijNQVn5bq8VC1Bl2OBRD0fXHRIwxHYU3fG2wCI2HrXvyKbiOe8"/>
      </div>
      <div class="container mx-auto px-8 relative z-10">
        <div class="max-w-4xl">
          <span class="inline-block bg-primary-container text-on-primary px-4 py-1 mb-6 font-headline text-xs tracking-[0.2em] uppercase">Forjando Excelencia</span>
          <h1 class="text-white text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8 font-headline">
            DISEÑADO <br/> A LA PERFECCIÓN.
          </h1>
          <p class="text-on-primary-container text-xl md:text-2xl max-w-2xl font-body font-light leading-relaxed">
            Un legado de precisión técnica e integridad estructural en la fabricación de acero inoxidable de alta calidad.
          </p>
        </div>
      </div>
    </section>

    <!-- Our History Section -->
    <section ref="historyRef" class="py-24 bg-surface">
      <div class="container mx-auto px-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div class="md:col-span-5 sticky top-32">
            <h2 class="text-primary text-5xl font-bold tracking-tighter mb-8 font-headline">NUESTRA HISTORIA</h2>
            <p class="text-on-surface-variant text-lg font-body leading-relaxed mb-6">
              Grupo López Soluciones Inox ha evolucionado constantemente para convertirse en un taller de fabricación de primer nivel. Nuestro crecimiento se refleja en la atención al detalle y la complejidad de los proyectos que emprendemos.
            </p>
            <div class="space-y-4 border-l-2 border-primary-container pl-6 py-2">
              <div>
                <span class="block text-primary font-bold font-headline">Fundación</span>
                <span class="text-on-surface-variant text-sm font-label uppercase tracking-widest">Inicios en nuestro primer taller.</span>
              </div>
              <div>
                <span class="block text-primary font-bold font-headline">Evolución</span>
                <span class="text-on-surface-variant text-sm font-label uppercase tracking-widest">Expansión a maquinaria especializada.</span>
              </div>
              <div>
                <span class="block text-primary font-bold font-headline">Actualidad</span>
                <span class="text-on-surface-variant text-sm font-label uppercase tracking-widest">Líderes locales en fabricación en acero inoxidable.</span>
              </div>
            </div>
          </div>
          <div class="md:col-span-7">
            <div class="grid grid-cols-1 gap-8">
              <div class="bg-surface-container-high p-1">
                <img alt="Taller de Legado" class="w-full h-[400px] object-cover grayscale" data-alt="Taller industrial de acero inoxidable" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNTVDS78Fld4L5bIzls9jncMNOt3xu2hnFBi42rGNZcpvXUNCprAobqDu1lfJF2t67fH_2Hyt8e5RgAzH_Fs41BMZOIyULGdEPscXY6OXlkuZWy69ERNn07ffEkETN_iudytAUqjU14uV-R6hZiVA034oiwGzUHmpAiSzD69CQx5d0D5hX7QuhH6qNWwzQxf3UagdOn14lanpF76BcBBj8KVs6tPiMUY23aMU1p3EHrjCLcYlz3Ytwoj9O_RdGutJVGkS6WtxBZts"/>
              </div>
              <div class="grid grid-cols-2 gap-8">
                <div class="bg-surface-container-high p-1">
                  <img alt="Precisión CNC" class="w-full h-[300px] object-cover" data-alt="Corte preciso en metal en taller" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChBaCe5jH_QrIUQKBYeXqB-og6PcBejoUE3cxpmJFzgbA5HJ8-MIsA11t7mGxVjQcxU6FW0oQeYWyw3-QszQA7Imxs1gUa88rQa87Mx0ZadfVkj39VQ-__xG6GNspYnPktnEE2W3tJO3Lmz5zEQ7nxkA2vDZMtXBjCghV8NI4EPzeRPu5hJKMOyFKQQgD02auNFOxQsWaE5BhTW0WiTzno_JWIR-bNua_bU51CEJsn-T-m1e9Ze9i8-dq_h3EUzOh8zF999c7mK5k"/>
                </div>
                <div class="bg-primary flex flex-col justify-center p-8">
                  <span class="text-6xl text-white font-bold font-headline mb-2">100%</span>
                  <span class="text-on-primary-container font-label uppercase text-xs tracking-widest">Compromiso con la Calidad Insuperable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Facility Section -->
    <section ref="facilityRef" class="py-24 bg-surface-container-low">
      <div class="container mx-auto px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 class="text-primary text-5xl font-bold tracking-tighter font-headline mb-4 uppercase">CAPACIDAD TÉCNICA</h2>
            <p class="text-on-surface-variant font-body text-xl max-w-xl">
              Nuestras instalaciones integran equipos especializados para corte, soldadura TIG y ensamblaje de alta precisión.
            </p>
          </div>
          <div class="hidden md:block">
            <span class="material-symbols-outlined text-primary text-6xl opacity-20">precision_manufacturing</span>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="md:col-span-2 md:row-span-2 bg-white p-8 border border-outline-variant/20 hover:border-primary transition-all">
            <h3 class="text-2xl font-bold font-headline mb-4 uppercase tracking-tighter">Corte Preciso</h3>
            <p class="text-on-surface-variant font-body mb-8 text-sm">Corte preciso de chapa con guillotina de alta capacidad, garantizando bordes limpios y medidas exactas.</p>
            <img alt="Tecnología de Corte" class="w-full h-64 object-cover filter contrast-125" data-alt="Corte industrial de metal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFFXQ5m0_ERIw4iYaECxf7F9YQb4d9hJOExOxqtqP6FCq8Vgg9VeKxyIMCKQLCuJijOzvxsU9IbS0NHqES-dEPRnVaZ54AXb5KkpKr9UBEp_vkcfrMxKkxy2RjpKsAX2v4ZRRWXZRvBB1qJFyGOYCPfhrDeluuF7nA7I-p0ug2_IB07CISa-iBFla3WBkTXyF6JX_nQd6Vo84A2Wl_TDa6silDlHeW5uVhHM06m1sf7UhhbSHBuLJFXA7_CNW1phyEwlMwn8t2L-o"/>
          </div>
          <div class="bg-primary text-white p-8 flex flex-col justify-between">
            <span class="material-symbols-outlined text-4xl">hardware</span>
            <div>
              <h3 class="text-xl font-headline font-bold uppercase mb-2">Soldadura TIG</h3>
              <p class="text-xs font-body text-on-primary-container">Especialistas en soldadura TIG para uniones estéticas, limpias y altamente resistentes.</p>
            </div>
          </div>
          <div class="bg-white border border-outline-variant/20 p-8">
            <h3 class="text-xl font-headline font-bold uppercase text-primary mb-2">Doblado CNC</h3>
            <p class="text-xs font-body text-on-surface-variant">Plegado y doblado mediante maquinaria de 2 ejes para geometrías de precisión.</p>
          </div>
          <div class="md:col-span-2 bg-surface-container-highest p-1 flex items-center overflow-hidden">
            <img alt="Vista de Instalaciones" class="w-full h-48 object-cover" data-alt="Taller limpio e industrial con estaciones organizadas" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1cCvGfe63t7gGeOM_3xwiELVafvRJOUW_w753luofRq_MNJ8bZykEZEL1AsjT2Ba05p-geu-KVObmulJG5QBLCVNpJhhMBo2iLn9-brQ3UxC4jS-3B92zRHbsv6TrWjV-C9sSqaoTZubNEL6agrs5amor2QZ-g6E3EFdIUyfa4KsC3DkCUnZLPqQPOBFlvd56Vj9s-L7qJOED2q-h9t8i21pNUYr26mcmpHjNUOgrp6JoXHIsfhFmSJEYMKwCwqCBHm2RG6RBp10"/>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team Section -->
    <section ref="teamRef" class="py-24 bg-surface">
      <div class="container mx-auto px-8">
        <div class="max-w-3xl mb-16">
          <h2 class="text-primary text-5xl font-bold tracking-tighter font-headline mb-8 uppercase">EL ELEMENTO HUMANO</h2>
          <p class="text-on-surface-variant font-body text-lg leading-relaxed">
            Detrás de cada máquina hay un especialista capacitado. Nuestro equipo está formado por maestros soldadores y fabricantes que tratan cada proyecto como una obra de arte estructural, asegurando que el acabado final supere tus expectativas.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Team Member 1 -->
          <div class="group">
            <div class="relative mb-6 overflow-hidden bg-surface-container-high aspect-[3/4]">
              <img alt="Director de Proyecto" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Ingeniero en taller" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHncqLslH0p5VI2KPGPSuJG8Uih4OPrJsUfRjegY1u-DGt1KMW7vPYnv_qT6iuuZDrrAIhZVO2ulkVr5meWvsH3cnLmXBklTKqkonUPMmNUurVoztEBsL_4qTukKynVtFd-2o0v6WcGVJIeu1mxltpgnEAyicmig8x0VqYodzz80uVHf6cH8dLzZziTfOr0wNBO1H-sYx-sc3-fy8w5bNpoHwgsuwlxXAy1x00yVwpaJST2qeGB5djRK43f8e8i_8KKyTyTHwhQwk"/>
            </div>
            <h4 class="text-xl font-bold font-headline uppercase tracking-tight text-primary">Dirección de Proyectos</h4>
            <span class="text-xs uppercase tracking-widest text-on-surface-variant font-headline font-semibold">Atención y Asesoría</span>
          </div>
          <!-- Team Member 2 -->
          <div class="group">
            <div class="relative mb-6 overflow-hidden bg-surface-container-high aspect-[3/4]">
              <img alt="Jefe de Producción" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Técnico de taller" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt33DFJR5zdxDW-3IGIhzJz6ldDkmuWzDy1Aiu-5xKtPQSzk-tGRypn9fVN4Rf7BkFClX4xlTMnOdlyWuAe-SGgsobGJnLnQ-L7yiuUNgJFwNH3w8-lK_MoBWdhOw8tWIDzdtYtcW2wbx5atlPkKc3gQol8F64fWl7nPlZ-36uu84J7Y33lZ9DABfWREQupOBFi4EEslpsDWFv6oMqrGSDOeYQ3FYqyeTvnpctYvvAI4M6cakx_8mw3VKHZhJkob5rChiEWdLTi2c"/>
            </div>
            <h4 class="text-xl font-bold font-headline uppercase tracking-tight text-primary">Jefatura de Taller</h4>
            <span class="text-xs uppercase tracking-widest text-on-surface-variant font-headline font-semibold">Control de Calidad</span>
          </div>
          <!-- Team Member 3 -->
          <div class="group">
            <div class="relative mb-6 overflow-hidden bg-surface-container-high aspect-[3/4]">
              <img alt="Maestro Soldador" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Soldador profesional en taller" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPnta-v7ljWQVQveAkvk2VNdnw3A38K-Dlh5b0CAnucag8P8AAsdum1fCXkIb_1oEQ4q1FVkaJ_ZDZpwNsA9iG8I2pYsLVL257XEJC4bphvt3eBjfFC4eJ-H6Myzj7jlevZ17fXLadLGgP18fRtOX2_PWNTL1nq-kCy3Mcl46jCWSSlTdIfFuUIXYrL5jc7l6cqW7pw9hOI2id3RbqWEKWCNrCezrZdckLEIngYUy86ghHSrvAz7DPpD0qb_VhlicSVa4M_tjdXZE"/>
            </div>
            <h4 class="text-xl font-bold font-headline uppercase tracking-tight text-primary">Especialistas TIG</h4>
            <span class="text-xs uppercase tracking-widest text-on-surface-variant font-headline font-semibold">Fabricación Maestra</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-primary py-32 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div class="container mx-auto px-8 relative z-10 text-center">
        <h2 class="text-white text-5xl md:text-7xl font-bold tracking-tighter font-headline mb-8">CONSTRUYE EL FUTURO CON NOSOTROS</h2>
        <p class="text-on-primary-container font-body text-xl max-w-2xl mx-auto mb-12">
          Desde un prototipo hasta proyectos integrales, brindamos precisión a cada soldadura. Hablemos de tu próximo requerimiento.
        </p>
        <div class="flex flex-col md:flex-row justify-center gap-4">
          <NuxtLink to="/contacto" class="bg-white text-primary px-12 py-5 font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-container transition-colors inline-block">
            Cotiza tu Proyecto
          </NuxtLink>
          <NuxtLink to="/proyectos" class="border border-white/30 text-white px-12 py-5 font-headline font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors inline-block">
            Ver Portafolio
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroRef = ref(null)
const historyRef = ref(null)
const facilityRef = ref(null)
const teamRef = ref(null)

onMounted(() => {
  gsap.from(heroRef.value, {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  })

  const sections = [historyRef, facilityRef, teamRef]
  
  sections.forEach((section) => {
    if (section.value) {
      gsap.from(section.value, {
        scrollTrigger: {
          trigger: section.value,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
    }
  })
})
</script>
