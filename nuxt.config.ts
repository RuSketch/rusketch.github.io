// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxt/image'
  ],
  ssr: false,
  site: {
    url: "https://rusketch.github.io/",
    name: "RUSketch — маркетплейс 3D-моделей для России и СНГ",
    description: "RUSketch — первый российский маркетплейс 3D-моделей. Низкая комиссия, безопасность сделок, удобная оплата. Для геймдева, анимации и архитектурной визуализации.",
    defaultLocale: "ru",
  },
  app: {
    head: {
      meta: [
        {
          name: 'keywords',
          content:
            'RUSketch, 3D-модели, маркетплейс, геймдев, анимация, архитектурная визуализация, фрилансеры, VFX, дизайн, Sketchfab аналог',
        },
        { name: 'author', content: 'Команда RUSketch' },
        { name: 'yandex-verification', content: '5cf4cb6a490ba370' },
        { name: 'google-site-verification', content: 'emA8z-72S-PlsQBJWE7AEYlZ9BKsp1iP-SI1qxrD-XA' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ],
      script: [{ innerHTML: '!function(e,t,c,r,n,a,s){e.ym=e.ym||function(){(e.ym.a=e.ym.a||[]).push(arguments)},e.ym.l=1*new Date;for(var i=0;i<document.scripts.length;i++)if(document.scripts[i].src===r)return;a=t.createElement(c),s=t.getElementsByTagName(c)[0],a.async=1,a.src=r,s.parentNode.insertBefore(a,s)}(window,document,"script","https://mc.webvisor.org/metrika/tag_ww.js"),ym(98995601,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0,trackHash:!0})' }]
    },
  },
  tailwindcss: {
    viewer: true,
    exposeConfig: true,
  },
  nitro: {
    prerender: {
      routes: ['/', '/sitemap.xml']
    },
    compressPublicAssets: true,
  },
  sitemap: {
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.9,
      changefreq: 'weekly'
    }
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'RUSketch',
      logo: '/logo.png',
      sameAs: [
        'https://github.com/RUSketch',
      ],
      description: "Продавайте и покупайте качественные 3D-модели на RUSketch. Удобно, безопасно и с низкими комиссиями."
    }
  },
  

  ogImage: {
    enabled: false,
  },
  robots: { 
    robotsTxt: false
  },
})
