import tailwindcss from 'eslint-plugin-tailwindcss'

const sbConfigTailwind = (settings = {}) => [
  {
    ...tailwindcss.configs.recommended,
    name: 'stefanobartoletti/tailwind',
    settings: {
      tailwindcss: {
        ...settings,
      },
    },
  },
]

export default sbConfigTailwind
