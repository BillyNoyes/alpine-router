export default {
  template: `
    <div x-data="__self__">
      <button
        @click="open = true"
        class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer"
      >Open modal</button>

      <div
        x-show="open"
        x-transition.opacity
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        style="display:none"
      >
        <div class="absolute inset-0 bg-black/30 backdrop-blur-sm" @click="open = false"></div>
        <div class="relative bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
          <h2 class="text-base font-semibold mb-1">Confirm action</h2>
          <p class="text-sm text-gray-500 mb-5">This is a modal rendered via <code class="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">x-component</code>. No boilerplate required.</p>
          <div class="flex gap-2 justify-end">
            <button @click="open = false" class="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">Cancel</button>
            <button @click="open = false" class="px-3 py-1.5 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors cursor-pointer">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  `,
  data: () => ({ open: false })
}
