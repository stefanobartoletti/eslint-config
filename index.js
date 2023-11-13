import antfu from '@antfu/eslint-config'

const stefanobartoletti = antfu({
    stylistic: true,
    vue: true,
    typescript: true,
},{
    // Vue rules
    files: ['**/*.vue'],
    rules: {
      'vue/max-attributes-per-line': ['error', {
        singleline: { max: 10 },
        multiline: { max: 1 },
      }],
      'vue/singleline-html-element-content-newline': 0,
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
  {
    // General rules
    rules: {
      curly: ['error', 'all'],
    },
  },

)

export default stefanobartoletti