# Vue Designer CSS - Quick start template

This is a starter template that pre-includes the [Pinegrow Vite Plugin](https://www.npmjs.com/package/@pinegrow/vite-plugin) and other goodies for Vue Designer.

Demo - https://pg-vue-css.netlify.app/

## Vue Designer

A desktop visual editor for Vue apps supporting Mac, Windows, and Linux by [Pinegrow](https://pinegrow.com/). Take it for a free trial at [Vue Designer](https://vuedesigner.com)!

It lets you visually design 🎨 your Vue single file components and boosts your productivity and creativity while building your component-based Vue apps.

It smartly integrates with your ⚡️ [Vite](https://vitejs.dev/) based CLI and provides an amazing developer experience with its powerful visual controls and features.

Clean code 😃, No lock-in - You are in control of your projects and development workflow ❤️

## Try it now!

### 1. Clone to local

[Create a repo from this template on GitHub](https://github.com/pinegrow/pg-vue/generate).

(or)

If you prefer to do it manually with the cleaner git history

```bash
npx giget@latest gh:pinegrow/pg-vue my-vue-app #project-name
cd my-vue-app
npm install #or use pnpm
```

## 2. Open in Vue Designer

Open your project in Vue Designer and follow the instructions displayed in the Config Panel (that should pop out automatically). Config Panel ⚙️ displays the key packages and the various links to their individual ecosystems and communities.

## Usage

### Start your development server

```bash
npm run dev
```

### Preview

```bash
npm run now # build & preview
```

### Build

```bash
npm run build # SPA
```

And you will see the generated file in `dist` that's ready to be served.

### Deploy to Netlify

You can deploy this repo as a site on your own to explore and experiment with, by clicking this button.
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Pinegrow/pg-vue)

Check out the [deployment documentation](https://vitejs.dev/guide/static-deploy.html#netlify) for more information.

## Pre-packed

### Meta Framework (Vue-based)

- [Vite](https://vitejs.dev/) - Vite-powered Vue SPA
  - 👉 Follow the amazing Vue [docs](https://vuejs.org/guide/introduction.html)

### UI Frameworks

- [CSS](https://vuejs.org/api/sfc-css-features.html) - Scoped CSS in Vue Single File Component (SFC).

### Icons

- [UnoCSS Preset Icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) - use over 100,000 open-source [Iconify](https://iconify.design/) icons. Uses the **unocss** format for icon names, for example, `i-mdi-home`.

### Modules/Plugins

- [Pinegrow Vite Plugin](https://www.npmjs.com/package/@pinegrow/vite-plugin) - enables you to live-design your Vue single-file components visually in Vue Designer.

### Devtools

- [Vue Devtools](https://devtools.vuejs.org/guide/installation.html#standalone) - Official devtools that can be used as a standalone app alongside Vue Designer. It's conditionally configured in `main.ts` (only during development).
  - **ACTION REQUIRED**: Currently deactivated. In `main.ts`, uncomment the top devtools related snippet to activate.
- [Vite Devtools](https://github.com/webfansplz/vite-plugin-vue-devtools) - A Vite plugin for Vue that enhances your DX (developer experience) with an amazing set of in-app features. This is an in-app alternative to browser-based/standalone Vue Devtools.

### VS Code Extensions

- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://vuejs.org/guide/scaling-up/sfc.html)
- [ESLint](https://eslint.org) with [eslint-plugin-vue](https://vuejs.org/guide/scaling-up/tooling.html#linting) - official set of linting rules.
- [Prettier](https://prettier.io) with [@vue/eslint-config-prettier](https://vuejs.org/guide/scaling-up/tooling.html#formatting) - format without conflicting with eslint rules.

### Typescript

Allows JS & strict mode is turned off. Update `tsconfig.app.json` or `tsconfig.ts` as required.

```json
{
  "compilerOptions": {
    // ...
    "strict": false,
    "allowJs": true
  }
}
```

## Community

- [Vue Designer Community](https://forum.pinegrow.com/c/vue-designer)
