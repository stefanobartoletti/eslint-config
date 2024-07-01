<picture><img src=".github/eslint-config-cover.png" /></picture>

<div align="center">

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![code style][antfu-src]][antfu-href]
<!-- [![code quality][code-quality-src]][code-quality-href] -->

My ESlint configuration, based on `@antfu/eslint-config` with personal customizations. Nicely integrates with Nuxt and provides optional rules for Tailwind.

[Release Notes](/CHANGELOG.md)

---

</div>

## 🌟 Features

This is my personal ESlint configuration, based on the excellent [`@antfu/eslint-config`](https://github.com/antfu/eslint-config). It only deviates for some minor tweaks and personal preferences, since I agree almost completely with Anthony's style choices.

This config integrates nicely with the [`Nuxt ESLint`](https://eslint.nuxt.com) module, and also adds optional rules for Tailwind, by using [`eslint-plugin-tailwindcss`](https://github.com/francoismassart/eslint-plugin-tailwindcss)

Some of the main features, inherited directly from `@antfu/eslint-config`:

- Vue and TypeScript support
- Linting for Json, Yaml, Markdown
- Uses the easily extensible [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- Includes [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic) to format code and enforce a preconfigured style (*Prettier not required and not officially supported*)
- ... and many more (check its docs for the full list)

My own customizations and preferences:

- (General) Force use of curly braces on control statements
- (General) Disable `antfu/top-level-function` to allow arrow syntax on top level functions
- (Vue - *Optional*) Set maximum allowed attributes per line on HTML elements (`10` for singleline, `1` for multiline)
- (Vue - *Optional*) Set block order to `<template>`, `<script>`, `<style>`
- (Tailwind - *Optional*) Enforce best practices and consistency for Tailwind, mainly class names ordering (imported directly from `eslint-plugin-tailwindcss`)
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

#### Using optional Vue and Tailwind rules

This package also provides optional configuration for Vue and Tailwind. They can be used together or by themselves, and together with further custom rules.

```js
// eslint.config.js
import { stefanobartoletti, tailwind, vue } from '@stefanobartoletti/eslint-config'

export default stefanobartoletti(
  {}, // @antfu/eslint-config options, must always be present as first item even if empty
  vue,
  tailwind,
  {
    // ESlint Flat config rule object
  },
)
```

> [!WARNING]
> Starting from `v2.x`, all my custom Vue-related rules must be explicitly imported with the `vue` key. They were previously included in the base configuration, and automatically active even when not really needed or when the Vue plugins were not active.

#### Integrationg with Nuxt

> [!INFO]
> This package used to provide custom rules to be used with Nuxt, but the latest versions of the official Nuxt configs effectively made them redundand and unnecessary.  
> Starting from `v3.x`, Nuxt rules were removed from this package, the recommended way to use this config is to directly integrate it with the Nuxt module.

1. Install the ESLint module with `npx nuxi module add eslint`, as described in the [official docs](https://eslint.nuxt.com/packages/module)

2. Set it to be "standalone", to prevent conflicting with `@antfu/eslint-config`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
  ],

  eslint: {
    config: {
      standalone: false, // <-- Important to work correctly
    },
  },
})
```

3. Integrate this config by prepending it to the Nuxt provided one:

```js
// eslint.config.js
import { stefanobartoletti, tailwind, vue } from '@stefanobartoletti/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    // More ESlint Flat configs, appended to Nuxt's
)
  .prepend(
    stefanobartoletti(
      {}, // Antfu Options, required
      vue, // Optional, but recommended to follow this config style preferences
      tailwind, // Optional, depending on the project
    ),
  )

```


## 📝 VS Code Support

If you use VS Code, you should manually enable support for ESLint flat config.

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Add the following settings to your `.vscode/settings.json`:

```jsonc
{
  // Enable the ESLint flat config support
  "eslint.experimental.useFlatConfig": true
}
```

For more settings, check the "VS Code support" section in [antfu/eslint-config](https://github.com/antfu/eslint-config#vs-code-support-auto-fix)

## 🤝 Contributing

> [!NOTE]
> If you want to contribute you can start by reading the [Contributing guidelines](https://github.com/stefanobartoletti/eslint-config/blob/master/.github/CONTRIBUTING.md).

> [!IMPORTANT]
> I am more than happy to accept suggestions for improvement and contributions, and to try to fix issues that may come on other people specific environments, to allow this package to be used on other people's projects too.
>
> Anyway, keep in mind that this is my personal configuration, whose main goal is to provide a shareable base to be used across my own projects, based on my preferences and supporting tools and frameworks that I personally use on a daily basis.
>
> Unfortunately I don't have time and resources to support frameworks, tools or features that I am not currently using. ESlint Flat config is very easy to customize and if my setup does not cater to your needs, but you still want to build up antfu's, you can use this repository as a base for your own custom take on it.

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
