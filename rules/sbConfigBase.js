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
      // Same as @antfu/eslint-config, plus `trustPolicyIgnoreAfter` (30 days) so old versions
      // published without provenance (e.g. backports) don't trigger false trust downgrades
      'pnpm/yaml-enforce-settings': ['error', {
        settings: {
          minimumReleaseAgeExcludePrune: true,
          shellEmulator: true,
          trustPolicy: 'no-downgrade',
          trustPolicyIgnoreAfter: 43200,
        },
      }],
    },
  },
]

export default sbConfigBase
