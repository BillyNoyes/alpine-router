# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`alpine-router` is a monorepo for a lightweight Alpine.js plugin that adds directive-based routing and component rendering. It is intentionally not a framework — no file conventions, no build tooling required.

- `packages/runtime` (`alpine-router`) — The Alpine.js plugin. Registers `x-route`, `x-component` directives and `$router`, `$params` magics. No Vite dependency.
- `packages/plugin` (`vite-plugin-alpine-router`) — Optional Vite plugin. Scans `src/components/` and auto-registers components via `virtual:alpine-router/components`. No routing logic.
- `apps/playground` — Vite + Alpine.js sandbox consuming both packages via workspace links.

## Monorepo

pnpm workspaces. Install from the root:

```bash
pnpm install
```

## Commands

```bash
# Run the playground dev server
pnpm dev

# Build both packages
pnpm build

# Run dev/build for a specific workspace
pnpm --filter playground dev
pnpm --filter vite-plugin-alpine-router build
pnpm --filter alpine-router build
```

## Runtime API

`x-route="/path"` — shows/hides the element based on `location.pathname`. Supports `:param` dynamic segments. Re-evaluates on `alpine-router:navigate` window events.

`x-component="'Name'"` — looks up the component in the registry, sets `el.innerHTML` to its `template`, registers its `data` factory as `Alpine.data('__self__', ...)`, then calls `Alpine.initTree(el)`.

`$router` — `{ push(path), replace(path), back() }`. `push`/`replace` call the History API then dispatch `alpine-router:navigate`.

`$params` — returns the params captured from the first `x-route` element whose pattern matches the current URL.

`registerComponent(name, { template, data })` — named export from `alpine-router`. Called by the Vite plugin's virtual module or manually by the user before `Alpine.start()`.

## Component format

```js
export default {
  template: `<div x-data="__self__">...</div>`,
  data: () => ({ /* Alpine data */ })
}
```

`__self__` is the convention for the component's own `x-data` name — `x-component` always registers the data factory under that key before calling `Alpine.initTree`.
