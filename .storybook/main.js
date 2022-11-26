const AutoImport = require('unplugin-auto-import/vite')
const Components = require('unplugin-vue-components/vite')
const path = require('path')

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-dark-mode'
  ],
  framework: "@storybook/vue3",
  core: {
    "builder": "@storybook/builder-vite"
  },
  features: {
    "storyStoreV7": true
  },
  viteFinal: async (config) => {
    config.plugins = [
      ...config.plugins,
      AutoImport({
        imports: [
          'vue',
          '@vueuse/core',
          'pinia'
        ],
        dts: '.storybook/auto-imports.d.ts',
      }),
      AutoImport({
        dirs: [
          'composables',
          'composables/**/*.{ts,js,mjs,mts}',
        ],
        vueTemplate: true,
        dts: '.storybook/composables.d.ts',
      }),
      AutoImport({
        dirs: [
          'utils',
          'utils/**/*.{ts,js,mjs,mts}'
        ],
        vueTemplate: true,
        dts: '.storybook/utils.d.ts',
      }),
      Components({
        dirs: [
          'components/layouts/*/',
          'components/utils/*/'
        ],
        deep: true,
        directoryAsNamespace: true,
        extensions: ['vue'],
        dts: '.storybook/components.d.ts',
      }),
    ]

    return {
      ...config,
      /* resolve: {
        alias: [
          {
            find: "~",
            replacement: path.resolve(__dirname, "../"),
          }
        ],
      }, */
    }
  }
}