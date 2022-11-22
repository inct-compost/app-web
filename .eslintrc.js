module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    semi: [ 'error', 'never', { beforeStatementContinuationChars: 'never' } ],
    'semi-spacing': [ 'error', { after: true, before: false } ],
    'semi-style': [ 'error', 'first' ],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-console': [ 'warn', { allow: [ 'warn', 'error' ] } ],
    'eol-last': [ 'error', 'always' ],
    quotes: [ 2, 'single' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ]
  }
}
