import antfu from '@antfu/eslint-config'
import antfuOptions from './rules/antfuOptions.js'
import sbConfigBase from './rules/sbConfigBase.js'
import sbConfigNuxt from './rules/sbConfigNuxt.js'
import sbConfigTailwind from './rules/sbConfigTailwind.js'

const stefanobartoletti = (...args) => {
  return antfu(
    antfuOptions, // This must be the first argument
    sbConfigBase,
    ...args,
  )
}

const nuxt = sbConfigNuxt
const tailwind = sbConfigTailwind

export {
  stefanobartoletti,
  nuxt,
  tailwind,
}
