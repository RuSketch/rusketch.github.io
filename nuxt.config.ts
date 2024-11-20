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
    url: "http://localhost:3000",
    name: "RuSketch",
    description: "Российский маркетплейс 3D моделей",
    defaultLocale: "ru",
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
      name: 'RuSketch',
      logo: '/logo.png',
      sameAs: [
        'https://github.com/RuSketch',
        'https://vk.com/RuSketch',
      ],
      description: "Российский маркетплейс 3D моделей"
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
