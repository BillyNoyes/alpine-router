# 🧩 alpine-components

> Reusable template components for [Alpine.js](https://alpinejs.dev/)

[![npm](https://img.shields.io/npm/v/alpine-components)](https://www.npmjs.com/package/alpine-components)
[![license](https://img.shields.io/npm/l/alpine-components)](./LICENSE)

Define reusable components as plain JS objects. Register once, render anywhere with `x-component`.

---

## 📦 Install

```bash
pnpm add alpine-components
```

---

## ⚡ Quick Start

**`src/main.js`**
```js
import Alpine from 'alpinejs'
import AlpineComponents, { registerComponent } from 'alpine-components'
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

Register manually before `Alpine.start()`:

```js
import { registerComponent } from 'alpine-components'
import Counter from './components/Counter.js'

registerComponent('Counter', Counter)
```

---

## 📁 Monorepo Structure

```
alpine-components/
  packages/
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
