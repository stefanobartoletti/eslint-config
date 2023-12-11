// https://github.com/nuxt/eslint-config/blob/main/packages/eslint-config/index.js

const sbConfigNuxt = [

  // Nuxt can use auto-imports, eslint should not throw errors for undefined variables.
  {
    name: 'stefanobartoletti:nuxt:auto-imports',
    files: ['**/*.{js,ts,jsx,tsx,vue}'],
    rules: {
      'no-undef': 'off',
    },
  },

  // Components should have multiple word names.
  // Pages, layouts, app.* and error.* not included as they can have single word names.
  {
    name: 'stefanobartoletti:nuxt:components',
    files: ['**/components/**/*.{js,ts,jsx,tsx,vue}'],
    rules: {
      'vue/multi-word-component-names': 'warn',
    },
  },

  // Pages and layouts are required to have a single root element if transitions are enabled.
  {
    name: 'stefanobartoletti:nuxt:pages-layouts',
    files: ['**/{pages,layouts}/**/*.{js,ts,jsx,tsx,vue}'],
    rules: {
      'vue/no-multiple-template-root': 'error',
    },
  },
]

export default sbConfigNuxt
