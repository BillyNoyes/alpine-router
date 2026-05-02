# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`alpine-components` is a monorepo for a lightweight Alpine.js plugin that adds directive-based component rendering and routing. It is intentionally not a framework — no file conventions, no build tooling required.

- `packages/runtime` (`alpine-components`) — The Alpine.js plugin. Registers `x-route`, `x-component` directives and `$router`, `$params` magics. No Vite dependency.
- `packages/plugin` (`vite-plugin-alpine-components`) — Optional Vite plugin. Scans `src/components/` and auto-registers components via `virtual:alpine-components/components`. No routing logic.
- `apps/docs` — Vite + Alpine.js docs site and sandbox consuming both packages via workspace links.

## Monorepo

pnpm workspaces. Install from the root:

```bash
pnpm install
```

## Commands

```bash
# Run the docs dev server
pnpm dev

# Build both packages
pnpm build

# Run dev/build for a specific workspace
pnpm --filter docs dev
pnpm --filter vite-plugin-alpine-components build
pnpm --filter alpine-components build
```

## Runtime API

Routing (`x-route`, `$router`, `$params`) has been removed. The package is now focused purely on components.

`x-component="'Name'"` — looks up the component in the registry, sets `el.innerHTML` to its `template`, registers its `data` factory as `Alpine.data('__self__', ...)`, then calls `Alpine.initTree(el)`.

`registerComponent(name, { template, data })` — named export from `alpine-components`. Called by the Vite plugin's virtual module or manually by the user before `Alpine.start()`.

## Component format

```js
export default {
  template: `<div x-data="__self__">...</div>`,
  data: () => ({ /* Alpine data */ })
}
```

`__self__` is the convention for the component's own `x-data` name — `x-component` always registers the data factory under that key before calling `Alpine.initTree`.
