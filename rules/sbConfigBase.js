const sbConfigBase = [
  {
    name: 'stefanobartoletti/base',
    rules: {
      'antfu/top-level-function': 'off',
      'curly': ['error', 'all'],
      'node/prefer-global/process': 'off',
      'style/function-call-spacing': ['error', 'never'],
    },
  },
  {
    name: 'stefanobartoletti/pnpm-workspace',
    files: ['pnpm-workspace.yaml'],
    rules: {
      // Only keep `shellEmulator` from @antfu/eslint-config's enforced settings
      'pnpm/yaml-enforce-settings': ['error', { settings: { shellEmulator: true } }],
    },
  },
]

export default sbConfigBase
