// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
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
        { name: 'yandex-verification', content: '5cf4cb6a490ba370' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        }
      ],
    },
  },
  tailwindcss: {
    viewer: true,
    exposeConfig: true,
  },
  nitro: {
    prerender: {
      routes: ['/', '/sitemap.xml', '/robots.txt']
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

  // remove on server 
  ogImage: {
    enabled: false,
  },
  robots: { 
    robotsTxt: false
  },
})
