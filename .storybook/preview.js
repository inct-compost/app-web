import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: '#1B1B1B' },
    // Override the default light theme
    light: { ...themes.normal, appBg: '#F3F3F3' }
  },
  docs: {
    theme: themes.light
  }
}