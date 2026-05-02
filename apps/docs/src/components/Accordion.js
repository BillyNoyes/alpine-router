export default {
  template: `
    <div x-data="__self__" class="w-full space-y-2">
      <template x-for="(item, i) in items" :key="i">
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <button
            @click="active = active === i ? null : i"
            class="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-left hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span x-text="item.q"></span>
            <svg class="w-4 h-4 text-gray-400 transition-transform shrink-0" :class="active === i && 'rotate-180'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div x-show="active === i" class="px-4 pt-2 pb-4 text-sm text-gray-500" x-text="item.a"></div>
        </div>
      </template>
    </div>
  `,
  data: () => ({
    active: null,
    items: [
      { q: 'Do I need a build step?', a: 'No. The runtime works with any Alpine.js setup — no Vite required.' },
      { q: 'How do I register a component?', a: 'Export { template, data } from a JS file and call registerComponent(), or use the Vite plugin to auto-import.' },
      { q: 'Can I nest components?', a: 'Yes. Use x-component inside a component template just like anywhere else.' },
    ]
  })
}
