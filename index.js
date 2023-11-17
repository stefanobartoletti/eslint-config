import antfu from '@antfu/eslint-config'

const stefanobartoletti = antfu({
  stylistic: true,
  vue: true,
  typescript: true,
})

stefanobartoletti.push({
  // Vue rules
  files: ['**/*.vue'],
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: { max: 10 },
      multiline: { max: 1 },
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': ['warn', {
      html: {
        void: 'always',
        normal: 'never',
      },
    }],
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
  },
})

stefanobartoletti.push({
  // General rules
  rules: {
    'curly': ['error', 'all'],
    'style/function-call-spacing': ['error', 'never'],
    'node/prefer-global/process': 'off',
    'antfu/top-level-function': 'off',
  },
})

export default stefanobartoletti
