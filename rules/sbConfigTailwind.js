import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

const sbConfigTailwind = [
  ...compat.config({
    extends: ['plugin:tailwindcss/recommended'],
  }),
]

export default sbConfigTailwind
