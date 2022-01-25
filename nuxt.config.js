export default {
  publicRuntimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL || "http://localhost:3000/",
    supabaseKey: process.env.SUPABASE_KEY,
  },

  ssr: false,

  head: {
    title: "compost-dashboard-app",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/composition-api/module",
  ],

  modules: [
    "@nuxtjs/pwa",
  ],

  pwa: {
    manifest: {
      lang: "en",
    },
  },

  build: {},
}
