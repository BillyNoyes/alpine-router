# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`alpine-components` is a lightweight Alpine.js plugin that adds directive-based component rendering. It is intentionally not a framework — no file conventions, no build tooling required.

- `packages/runtime` (`alpine-components`) — The Alpine.js plugin. Registers the `x-component` directive. No Vite dependency.
- `apps/docs` — Vite + Alpine.js docs site and sandbox consuming the package via workspace link.

## Monorepo

pnpm workspaces. Install from the root:

```bash
pnpm install
```

## Commands

```bash
# Run the docs dev server
pnpm dev

# Build the package
pnpm build

# Run dev/build for a specific workspace
pnpm --filter docs dev
pnpm --filter alpine-components build
```

## Runtime API

`x-component="'Name'"` — looks up the component in the registry, sets `el.innerHTML` to its `template`, registers its `data` factory as `Alpine.data('__self__', ...)`, then calls `Alpine.initTree(el)`.

`registerComponent(name, { template, data })` — named export from `alpine-components`. Called manually by the user before `Alpine.start()`.

## Component format

```js
export default {
  template: `<div x-data="__self__">...</div>`,
  data: () => ({ /* Alpine data */ })
}
```

`__self__` is the convention for the component's own `x-data` name — `x-component` always registers the data factory under that key before calling `Alpine.initTree`.
