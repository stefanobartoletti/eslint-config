// https://eslint.nuxt.com/packages/config

import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    // Prevent duplicating rules already iported from @antfu/eslint-config
    standalone: false,
  },
})
  .append(
    // Components should have multiple word names.
    {
      name: 'stefanobartoletti/nuxt/components',
      files: ['**/components/**/*.{js,ts,jsx,tsx,vue}'],
      rules: {
        'vue/multi-word-component-names': 'warn',
      },
    },
  )
