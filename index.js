import antfu from '@antfu/eslint-config'
import antfuOptions from './rules/antfuOptions.js'
import sbConfigBase from './rules/sbConfigBase.js'
import sbConfigNuxt from './rules/sbConfigNuxt.js'

const stefanobartoletti = (...args) => {
  return antfu(
    antfuOptions, // This must be the first argument
    sbConfigBase,
    ...args,
  )
}

const nuxt = sbConfigNuxt

export {
  stefanobartoletti,
  nuxt,
}
