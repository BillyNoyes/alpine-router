# 🏔️ alpine-router

> Directive-based routing and component rendering for [Alpine.js](https://alpinejs.dev/)

[![npm](https://img.shields.io/npm/v/alpine-router)](https://www.npmjs.com/package/alpine-router)
[![license](https://img.shields.io/npm/l/alpine-router)](./LICENSE)

Just directives. No framework. No file conventions. Feels like Alpine. ✨

---

## 📦 Install

```bash
pnpm add alpine-router
```

Want component auto-import with Vite? Add the optional plugin too:

```bash
pnpm add -D vite-plugin-alpine-router
```

---

## ⚡ Quick Start

**`src/main.js`**
```js
import Alpine from 'alpinejs'
import AlpineRouter from 'alpine-router'

Alpine.plugin(AlpineRouter)
Alpine.start()
```

**`index.html`**
```html
<body x-data>
  <nav>
    <a href="/" @click.prevent="$router.push('/')">Home</a>
    <a href="/about" @click.prevent="$router.push('/about')">About</a>
  </nav>

  <div x-route="/">
    <h1>Home</h1>
  </div>

  <div x-route="/about">
    <h1>About</h1>
  </div>

  <script type="module" src="/src/main.js"></script>
</body>
```

That's it. 🎉

---

## 🗺️ `x-route`

Shows an element when the URL matches, hides it otherwise. Supports dynamic segments:

```html
<div x-route="/">Home</div>
<div x-route="/about">About</div>
<div x-route="/blog/:id">
  Blog post: <span x-text="$params.id"></span>
</div>
```

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
import { registerComponent } from 'alpine-router'
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
import alpineRouter from 'vite-plugin-alpine-router'

export default defineConfig({
  plugins: [alpineRouter()],
})
```

**`src/main.js`**
```js
import Alpine from 'alpinejs'
import AlpineRouter from 'alpine-router'
import 'virtual:alpine-router/components'

Alpine.plugin(AlpineRouter)
Alpine.start()
```

---

## 🧭 `$router`

Programmatic navigation anywhere in your Alpine markup:

```html
<button @click="$router.push('/about')">Go to About</button>
<button @click="$router.replace('/login')">Replace history</button>
<button @click="$router.back()">Go back</button>
```

---

## 🔖 `$params`

Access dynamic route params from the currently matched `x-route`:

```html
<div x-route="/blog/:id">
  <span x-text="$params.id"></span>
</div>
```

---

## ⚙️ Plugin Options

```js
alpineRouter({
  componentsDir: 'src/components', // default
})
```

---

## 📁 Monorepo Structure

```
alpine-router/
  packages/
    plugin/     → vite-plugin-alpine-router (optional)
    runtime/    → alpine-router
  apps/
    playground/ → dev sandbox
```

---

## 🤝 Contributing

```bash
pnpm install
pnpm dev  # starts the playground
```

---

## 📄 License

MIT
