const app = Vue.createApp({
  data() {
    return {}
  },
  methods: {},
  computed: {}
});

app.component('todo-list-item', {
  props: {
    task: {
      type: String,
      required: true,
      validator(value) {
        return 'okey' === value;
      }
    },
    id: {
      type: Number,
      required: false,
      validator(value) {
        return value >= 5 && value <= 10;
      }
    },
    tickets: {
      type: Array,
      required: false,
      validator(value) {
        return value.length == 2;
      }
    },
    onboard: {
      type: Boolean,
      validator(value) {
        return value === true;
      }
    }
  },
  template: `<div class="bg-white shadow-sm rounded-md text-gray-700 text-xs md:text-sm p-4">{{task}}</div>`
})

app.mount('#app');