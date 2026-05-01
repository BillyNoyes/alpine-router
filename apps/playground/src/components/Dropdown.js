export default {
  template: `
    <div x-data="__self__" class="relative inline-block">
      <button
        @click="open = !open"
        class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-indigo-300 transition-colors text-sm font-medium text-gray-700 cursor-pointer"
      >
        <span x-text="selected"></span>
        <svg class="w-4 h-4 text-gray-400 transition-transform" :class="open && 'rotate-180'" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div
        x-show="open"
        @click.outside="open = false"
        class="absolute z-10 mt-1 w-40 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden"
      >
        <template x-for="item in items">
          <button
            @click="selected = item; open = false"
            class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors cursor-pointer"
            x-text="item"
          ></button>
        </template>
      </div>
    </div>
  `,
  data: () => ({
    open: false,
    selected: 'Pick one',
    items: ['Alpine.js', 'alpine-router', 'Vite', 'Tailwind'],
  })
}
