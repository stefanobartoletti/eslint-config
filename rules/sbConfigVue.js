const sbConfigVue = [
  {
    name: 'stefanobartoletti/vue',
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/html-self-closing': ['warn', {
        html: {
          void: 'always',
          normal: 'never',
        },
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: { max: 10 },
        multiline: { max: 1 },
      }],
      'vue/multi-word-component-names': 'warn',
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
]

export default sbConfigVue
