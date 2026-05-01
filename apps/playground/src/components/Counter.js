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
