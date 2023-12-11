<div align="center">

# @stefanobartoletti/eslint-config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![code style][antfu-src]][antfu-href]
<!-- [![code quality][code-quality-src]][code-quality-href] -->

My ESlint configuration, based on `@antfu/eslint-config` with personal customizations. Also includes optional rulesets for Nuxt and Tailwind.

[Release Notes](/CHANGELOG.md)

---

</div>

## 🌟 Features

This is my personal ESlint configuration, based on the excellent [`@antfu/eslint-config`](https://github.com/antfu/eslint-config). It only deviates for some minor tweaks and personal preferences, since I agree almost completely with Anthony's style choices.

My config also adds some additional and optional rulesets for Nuxt and Tailwind (the latter by using [`eslint-plugin-tailwindcss`](https://github.com/francoismassart/eslint-plugin-tailwindcss))

Some of the main features, inherited directly from `@antfu/eslint-config`:

- Vue and TypeScript support
- Linting for Json, Yaml, Markdown
- Uses the easily extensible [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- Includes [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic) to format code and enforce a preconfigured style (*Prettier not required and not officially supported*)
- ... and many more (check its docs for the full list)

My own customizations and preferences:

- (Vue) Set maximum allowed attributes per line on HTML elements (`10` for singleline, `1` for multiline)
- (Vue) Set block order to `<template>`, `<script>`, `<style>`
- (General) Force use of curly braces on control statements
- (General) Disable `antfu/top-level-function` to allow arrow syntax on top level functions
- (Nuxt - *Optional*) Set some specific Nuxt rules if not already covered by Antfu's config (sourced from `@nuxt/eslint-config`)
- (Tailwind - *Optional*) Enforce best practices and consistency for Tailwind, mainly class names ordering (by including `eslint-plugin-tailwindcss`)
- ... and some other minor tweaks

## 🛠️ Setup

### Installation

```bash
pnpm i -D eslint @stefanobartoletti/eslint-config
```

### Configuration

With [`"type": "module"`](https://nodejs.org/api/packages.html#type) in `package.json` (recommended):

#### Basic use

Using the default config without arguments uses the following `@antfu/eslint-config` options as defaults:

- autodetects Vue
- autodetects Typescript
- enables ESlint Stylistic

```js
// eslint.config.js
import { stefanobartoletti } from '@stefanobartoletti/eslint-config'

export default stefanobartoletti()
```

#### Setting options and using custom rules

It is possible to add custom rules with the following configuration.

- The first item must contain options to be passed to `@antfu/eslint-config` (read more on [its docs](https://github.com/antfu/eslint-config) for possible options). **It must always be present even if left empty.**
- From the second item going on, you can add as many custom ESlint flat config objects as you need.

```js
// eslint.config.js
import { stefanobartoletti } from '@stefanobartoletti/eslint-config'

export default stefanobartoletti(
  // @antfu/eslint-config options, must be the first argument
  {
    stylistic: false,
  },
  // Addtionals flat configs start from here
  {
    rules: {
      curly: 'off',
    },
  },
)
```

##### Using optional Nuxt or Tailwind configs

This package also provides optional configuration for Nuxt and Tailwind. They can be used together or by themsevles, and together with further custom rules.

```js
// eslint.config.js
import { nuxt, stefanobartoletti, tailwind } from '@stefanobartoletti/eslint-config'

export default stefanobartoletti(
  {}, // @antfu/eslint-config options, must always be present as first item even if empty
  nuxt,
  taiwind,
  {
    // ESlint Flat config rule object
  },
)
```

## 🤝 Contributing

> [!NOTE]
> If you want to contribute you can start by reading the [Contributing guidelines](https://github.com/stefanobartoletti/eslint-config/blob/master/.github/CONTRIBUTING.md).

> [!IMPORTANT]
> I am more than happy to accept suggestions for improvement and contributions, and to try to fix issues that may come on other people specific environments, to allow this package to be used on other people's projects too.
>
> Anyway, keep in mind that this is my personal configuration, whose main goal is to provide a shareable base to be used across my own projects, based on my preferences and supporting tools and frameworks that I personally use on a daily basis.
>
> I don't have the resources or the desire to support frameworks, tools or features that I don't personally use. ESlint Flat config is very easy to customize and if my setup does not cater to your needs, but you still want to build up antfu's excellent, you can use this repository as a base for your own costom take on it.

## 📝 License

[MIT](https://github.com/stefanobartoletti/eslint-config/blob/main/LICENSE)

© 2023-present [Stefano Bartoletti](https://www.stefanobartoletti.it)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@stefanobartoletti/eslint-config/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@stefanobartoletti/eslint-config

[npm-downloads-src]: https://img.shields.io/npm/dm/@stefanobartoletti/eslint-config.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@stefanobartoletti/eslint-config

[code-quality-src]: https://img.shields.io/codacy/grade/2089b728f6904916aff7a595c4197b09.svg?style=flat&colorA=18181B&colorB=28CF8D
[code-quality-href]: https://app.codacy.com/gh/stefanobartoletti/eslint-config

[bundle-size-src]: https://img.shields.io/bundlephobia/minzip/@stefanobartoletti/eslint-config.svg?style=flat&colorA=18181B&colorB=28CF8D
[bundle-size-href]: https://bundlephobia.com/result?p=@stefanobartoletti/eslint-config

[license-src]: https://img.shields.io/npm/l/@stefanobartoletti/eslint-config.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@stefanobartoletti/eslint-config

[antfu-src]: https://antfu.me/badge-code-style.svg
[antfu-href]: https://github.com/antfu/eslint-config
