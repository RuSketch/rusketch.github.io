<template>
  <main
    class="relative w-full bg-[#141621] flex items-center justify-center font-semibold text-xl text-white"
  >
    <img class="w-full select-none pointer-events-none" src="/background.png" alt="background">
    <NuxtLink class="absolute top-0 left-0" to="https://forms.yandex.ru/cloud/673f1cac505690d5be6baeb0/" target="_blank">
      <img class="w-full select-none pointer-events-none show" src="/content.png" alt="content">
    </NuxtLink>
    <div id="yandex_rtb_R-A-13105348-1"></div>
    <script>
      window.yaContextCb.push(() => {
          Ya.Context.AdvManager.render({
              "blockId": "R-A-13105348-1",
              "renderTo": "yandex_rtb_R-A-13105348-1",
              "type": "feed"
          })
      })
    </script>
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