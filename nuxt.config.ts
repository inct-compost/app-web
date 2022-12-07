import { VitePWA } from 'vite-plugin-pwa'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'IoT Compost Toilet',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icons/compost-logo-circle.ico' },
        { rel: 'apple-touch-icon', href: '/apple_touch_icon.png', sizes: '180x180' },
        { rel: 'mask-icon', color: '#FCFCF9', href: '/mask_icon.svg' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap'
        },
        {
          rel: 'manifest',
          'data-n-head': '1',
          'data-h-id': 'manifest',
          href: 'manifest.webmanifest'
        }
      ]
    }
  },

  components: {
    dirs: [
      'components/dashboard',
      'components/layouts',
      'components/utils'
    ]
  },

  imports: {
    dirs: [
      'composables',
      'composables/**/*.{ts,js,mjs,mts}',
      'composables/**',
      'utils',
      'utils/**/*.{ts,js,mjs,mts}',
      'utils/**'
    ]
  },

  modules: [
    '@vueuse/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore'
        ]
      }
    ]
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
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 30 // <== 30 days
                },
                cacheableResponse: {
                  statuses: [ 0, 200 ]
                }
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 30 // <== 30 days
                },
                cacheableResponse: {
                  statuses: [ 0, 200 ]
                }
              }
            }
          ]
        },
        includeAssets: [],
        manifest: {
          lang: 'ja',
          name: 'IoT Compost Toilet',
          short_name: 'ComToile',
          description: 'IoTを活用したコンポストトイレの管理用アプリケーションです。コンポストの状態をどこでも分かりやすく確認することができます！',
          start_url: '/',
          display: 'standalone',
          background_color: '#f6f8fa',
          theme_color: '#f6f8fa',
          icons: [
            {
              src: '/icons/icon-72x72.png',
              type: 'image/png',
              sizes: '72x72',
              purpose: 'any'
            },
            {
              src: '/icons/icon-128x128.png',
              type: 'image/png',
              sizes: '128x128',
              purpose: 'any'
            },
            {
              src: '/icons/icon-144x144.png',
              type: 'image/png',
              sizes: '144x144',
              purpose: 'any'
            },
            {
              src: '/icons/icon-152x152.png',
              type: 'image/png',
              sizes: '152x152',
              purpose: 'any'
            },
            {
              src: '/icons/icon-192x192.png',
              type: 'image/png',
              sizes: '192x192',
              purpose: 'any'
            },
            {
              src: '/icons/icon-384x384.png',
              type: 'image/png',
              sizes: '384x384',
              purpose: 'any'
            },
            {
              src: '/icons/icon-512x512.png',
              type: 'image/png',
              sizes: '512x512',
              purpose: 'any'
            }
          ],
          screenshots: [
            {
              src: '/screenshots/dashboard-screenshot.png',
              sizes: '512x962',
              type: 'image/gif'
            }
          ]
        }
      })
    ]
  }
})
