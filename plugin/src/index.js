const registry = {}

export function registerComponent(name, component) {
  registry[name] = component
}

export default function AlpineComponents(Alpine) {
  Alpine.directive('component', (el, { expression }, { evaluate }) => {
    const name = evaluate(expression)
    const component = registry[name]
    if (!component) return

    Alpine.data('__self__', component.data ?? (() => ({})))
    el.innerHTML = component.template ?? ''
    Alpine.initTree(el)
  })
}
