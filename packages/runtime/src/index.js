import { matchRoute } from './matcher.js'

const registry = {}
let currentParams = {}

export function registerComponent(name, component) {
  registry[name] = component
}

function dispatch() {
  window.dispatchEvent(new CustomEvent('alpine-router:navigate'))
}

function updateParams() {
  const all = document.querySelectorAll('[x-route]')
  for (const el of all) {
    const pattern = el.getAttribute('x-route')
    const params = matchRoute(pattern === '/' ? '' : pattern, location.pathname === '/' ? '' : location.pathname)
    if (params) {
      currentParams = params
      return
    }
  }
  currentParams = {}
}

export default function AlpineRouter(Alpine) {
  window.addEventListener('popstate', () => {
    updateParams()
    dispatch()
  })

  Alpine.directive('route', (el, { expression }, { cleanup }) => {
    const pattern = expression.replace(/^['"]|['"]$/g, '')

    function evaluate() {
      const params = matchRoute(
        pattern === '/' ? '' : pattern,
        location.pathname === '/' ? '' : location.pathname
      )
      el.style.display = params !== null ? '' : 'none'
    }

    evaluate()

    const handler = () => evaluate()
    window.addEventListener('alpine-router:navigate', handler)
    cleanup(() => window.removeEventListener('alpine-router:navigate', handler))
  })

  Alpine.directive('component', (el, { expression }, { evaluate }) => {
    const name = evaluate(expression)
    const component = registry[name]
    if (!component) return

    Alpine.data('__self__', component.data ?? (() => ({})))
    el.innerHTML = component.template ?? ''
    Alpine.initTree(el)
  })

  Alpine.magic('router', () => ({
    push(path) {
      history.pushState({}, '', path)
      updateParams()
      dispatch()
    },
    replace(path) {
      history.replaceState({}, '', path)
      updateParams()
      dispatch()
    },
    back() {
      history.back()
    },
  }))

  Alpine.magic('params', () => currentParams)
}
