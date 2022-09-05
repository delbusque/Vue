const app = Vue.createApp({
  data() {
    return {}
  },
  methods: {},
  computed: {}
});

app.component('my-first-component', {
  template: `<div>Hello World !!!</div>`
})

app.mount('#app');