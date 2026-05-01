export default {
  template: `
    <div x-data="__self__" class="flex items-center gap-4">
      <button
        @click="decrement"
        class="w-10 h-10 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold text-lg transition-colors cursor-pointer"
      >−</button>
      <span x-text="count" class="text-3xl font-bold text-indigo-700 w-10 text-center tabular-nums"></span>
      <button
        @click="increment"
        class="w-10 h-10 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-bold text-lg transition-colors cursor-pointer"
      >+</button>
    </div>
  `,
  data: () => ({
    count: 0,
    increment() { this.count++ },
    decrement() { this.count-- },
  })
}
