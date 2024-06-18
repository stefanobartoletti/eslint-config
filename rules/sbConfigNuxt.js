// https://eslint.nuxt.com/packages/config

import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import sbConfigVue from './sbConfigVue.js'

export default createConfigForNuxt({
  features: {
    // Prevent duplicating rules already iported from @antfu/eslint-config
    standalone: false,
  },
})
  .append(
    // Import Vue rules
    sbConfigVue,
    // Components should have multiple word names.
    {
      name: 'stefanobartoletti/nuxt/components',
      files: ['**/components/**/*.{js,ts,jsx,tsx,vue}'],
      rules: {
        'vue/multi-word-component-names': 'warn',
      },
    },
    // Nuxt has the auto-import feature, no error should be thrown for no-undef.
    // @nuxt/eslint-config disables this for typescript, setting it off also for plain js.
    {
      name: 'stefanobartoletti/nuxt/composables',
      files: ['**/*.{js,jsx,vue}'],
      rules: {
        'no-undef': 'off',
      },
    },
  )
