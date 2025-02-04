/* eslint-disable import/no-mutable-exports */
/* eslint-disable antfu/no-top-level-await */

let sbConfigTailwind = {}

try {
  const tailwind = await import('eslint-plugin-tailwindcss')
  sbConfigTailwind = tailwind.default.configs['flat/recommended']
}
catch {
  console.warn('eslint-plugin-tailwindcss not found, skipping Tailwind rules')
}

export default sbConfigTailwind
