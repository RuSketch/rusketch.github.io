<template>
  <main
    class="relative w-full bg-[#141621] flex items-center justify-center font-semibold text-xl text-white"
  >
    <NuxtImg preload :quality="80" class="w-full select-none pointer-events-none" src="/background.png" alt="background" />
    <NuxtLink class="absolute top-0 left-0" to="https://forms.yandex.ru/cloud/673f1cac505690d5be6baeb0/" target="_blank">
      <NuxtImg loading="lazy" :quality="80" class="w-screen select-none pointer-events-none show" src="/content.png" alt="content" />
    </NuxtLink>
  </main>
</template> 

<script lang="ts" setup>
// remove on server
// defineOgImageComponent('LandingOg')
</script>

<style>
@keyframes show {
  0% {opacity: 0; transform: translateY(-5px);}
  100% {opacity: 1; transform: translateY(0px);}
}

.show {
  opacity: 0;
  animation: show ease-in-out 300ms;
  animation-delay: 100ms;
  animation-fill-mode: forwards;
}
</style>