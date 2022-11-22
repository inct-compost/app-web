import { VitePWA } from 'vite-plugin-pwa'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  modules: [
    '@vueuse/nuxt'
  ],

  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        devOptions: {
          enabled: false
        },
        workbox: {
          globPatterns: [ '**/*.{js,css,html,ico,png,svg,woff2}' ]
        },
        includeAssets: [ 'icon_rounded.png', 'apple_touch_icon.png', 'masked_icon.svg' ],
        manifest: {
          lang: 'ja',
          name: 'IoT Compost Toilet',
          short_name: 'ComToile',
          description: '',
          start_url: '/',
          display: 'standalone',
          background_color: '#FCFCF9',
          theme_color: '#FCFCF9',
          icons: [
            {
              src: '/icons/icon_64.png',
              type: 'image/png',
              sizes: '64x64',
              purpose: 'any'
            },
            {
              src: '/icons/icon_120.png',
              type: 'image/png',
              sizes: '120x120',
              purpose: 'any'
            },
            {
              src: '/icons/icon_144.png',
              type: 'image/png',
              sizes: '144x144',
              purpose: 'any'
            },
            {
              src: '/icons/icon_152.png',
              type: 'image/png',
              sizes: '152x152',
              purpose: 'any'
            },
            {
              src: '/icons/icon_192.png',
              type: 'image/png',
              sizes: '192x192',
              purpose: 'any'
            },
            {
              src: '/icons/icon_384.png',
              type: 'image/png',
              sizes: '384x384',
              purpose: 'any'
            },
            {
              src: '/icons/icon_512.png',
              type: 'image/png',
              sizes: '512x512',
              purpose: 'any'
            }
          ]
        }
      })
    ]
  }
})
