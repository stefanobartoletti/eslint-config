// https://github.com/nuxt/eslint-config/blob/main/packages/eslint-config/index.js

const sbConfigNuxt = [

  // Components Rules
  {
    files: ['**/components/**/*.{js,ts,jsx,tsx,vue}'],
    rules: {
    // Components should have multiple word names.
    // Pages, layouts, app.* and error.* not included as they can have single word names
      'vue/multi-word-component-names': 'warn',
    },
  },

  // Composables Rules
  {
    files: ['**/composables/**/*.{js,ts,jsx,tsx,vue}'],
    rules: {
    // Composables can use auto-imports, eslint should not throw an error for undefined
      'no-undef': 'off',
    },
  },

  // Pages and Layouts Rules
  {
    files: ['**/{pages,layouts}/**/*.{js,ts,jsx,tsx,vue}'],
    rules: {
    // Pages and layouts are required to have a single root element if transitions are enabled.
      'vue/no-multiple-template-root': 'error',
    },
  },
]

export default sbConfigNuxt
