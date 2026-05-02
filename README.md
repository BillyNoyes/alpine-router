# 🧩 alpine-components

> Reusable template components and routing for [Alpine.js](https://alpinejs.dev/)

[![npm](https://img.shields.io/npm/v/alpine-components)](https://www.npmjs.com/package/alpine-components)
[![license](https://img.shields.io/npm/l/alpine-components)](./LICENSE)

Just directives. No framework. No file conventions. Feels like Alpine. ✨

---

## 📦 Install

```bash
pnpm add alpine-components
```

Want component auto-import with Vite? Add the optional plugin too:

```bash
pnpm add -D vite-plugin-alpine-components
```

---

## ⚡ Quick Start

**`src/main.js`**
```js
import Alpine from 'alpinejs'
import AlpineComponents from 'alpine-components'
import { registerComponent } from 'alpine-components'
import Counter from './components/Counter.js'

registerComponent('Counter', Counter)
Alpine.plugin(AlpineComponents)
Alpine.start()
```

**`index.html`**
```html
<body>
  <div x-component="'Counter'"></div>
  <script type="module" src="/src/main.js"></script>
</body>
```

That's it. 🎉

---

## 🧩 `x-component`

Renders a registered component inline:

```html
<div x-component="'Counter'"></div>
```

Components export a `template` string and a `data` factory:

```js
// src/components/Counter.js
export default {
  template: `
    <div x-data="__self__">
      <p>Count: <span x-text="count"></span></p>
      <button @click="increment">+</button>
    </div>
  `,
  data: () => ({
    count: 0,
    increment() { this.count++ }
  })
}
```

Register manually:

```js
import { registerComponent } from 'alpine-components'
import Counter from './components/Counter.js'

registerComponent('Counter', Counter)
```

Or use the Vite plugin to auto-register everything in `src/components/` 👇

---

## ⚡ Vite Plugin (optional)

Auto-registers all components in `src/components/` — no manual imports needed:

**`vite.config.js`**
```js
import { defineConfig } from 'vite'
import alpineComponents from 'vite-plugin-alpine-components'

export default defineConfig({
  plugins: [alpineComponents()],
})
```

**`src/main.js`**
```js
import Alpine from 'alpinejs'
import AlpineComponents from 'alpine-components'
import 'virtual:alpine-components/components'

Alpine.plugin(AlpineComponents)
Alpine.start()
```

---

## ⚙️ Plugin Options

```js
alpineComponents({
  componentsDir: 'src/components', // default
})
```

---

## 📁 Monorepo Structure

```
alpine-components/
  packages/
    plugin/     → vite-plugin-alpine-components (optional)
    runtime/    → alpine-components
  apps/
    docs/       → dev sandbox + docs site
```

---

## 🤝 Contributing

```bash
pnpm install
pnpm dev  # starts the docs site
```

---

## 📄 License

MIT
