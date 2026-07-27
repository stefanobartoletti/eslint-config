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
  },
]

export default sbConfigTailwind
