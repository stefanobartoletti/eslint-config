const sbConfigVue = [

  {
    name: 'stefanobartoletti/vue',
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
  },
]

export default sbConfigVue
