import tailwindcss from 'eslint-plugin-tailwindcss'

const sbConfigTailwind = (settings = {}) => [
  {
    ...tailwindcss.configs.recommended,
    name: 'stefanobartoletti/tailwind',
    files: [
      ...tailwindcss.configs.recommended.files,
      '**/*.vue',
    ],
    settings: {
      tailwindcss: {
        ...settings,
      },
    },
    rules: {
      ...tailwindcss.configs.recommended.rules,
      'tailwindcss/no-custom-classname': 'off',
    },
  },
]

export default sbConfigTailwind
