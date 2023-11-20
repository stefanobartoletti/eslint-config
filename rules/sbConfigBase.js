const sbConfigBase = [

  // Vue Rules
  {
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

  // General Rules
  {
    rules: {
      'curly': ['error', 'all'],
      'style/function-call-spacing': ['error', 'never'],
      'node/prefer-global/process': 'off',
      'antfu/top-level-function': 'off',
    },
  },
]

export default sbConfigBase
