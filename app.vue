<template>
  <main
    class="w-screen h-screen bg-[#141621] flex items-center justify-center font-semibold text-xl text-white"
  >
    Здесь будет лендинг проекта RuSketch
  </main>

  <YaMetrika />
</template> 

<script lang="ts" setup>
// remove on server
// defineOgImageComponent('LandingOg')
useHead({
  lang: 'ru',
  meta: [
    {
      name: 'keywords',
      content:
        'RUSketch, 3D-модели, маркетплейс, геймдев, анимация, архитектурная визуализация, фрилансеры, VFX, дизайн, Sketchfab аналог',
    },
    { name: 'author', content: 'Команда RUSketch' },
    { name: 'yandex-verification', content: '5cf4cb6a490ba370' }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
});
</script>
