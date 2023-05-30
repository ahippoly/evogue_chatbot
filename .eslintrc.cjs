/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'prettier',
    '@vue/typescript/recommended'
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': 'error',
    'vue/multi-word-component-name': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-templatte-root': 'off'
  }
}
