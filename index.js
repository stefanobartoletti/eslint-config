import antfu from '@antfu/eslint-config'
import antfuOptions from './rules/antfuOptions.js'
import sbConfigBase from './rules/sbConfigBase.js'
import sbConfigVue from './rules/sbConfigVue.js'
import sbConfigNuxt from './rules/sbConfigNuxt.js'
import sbConfigTailwind from './rules/sbConfigTailwind.js'

const stefanobartoletti = (options, ...configs) => {
  return antfu(
    // @antfu/eslint-config options, must be the first argument
    {
      ...antfuOptions,
      ...options,
    },
    // Addtionals flat configs start from here
    sbConfigBase,
    ...configs,
  )
}

const vue = sbConfigVue
const nuxt = sbConfigNuxt
const tailwind = sbConfigTailwind

export {
  stefanobartoletti,
  vue,
  nuxt,
  tailwind,
}
