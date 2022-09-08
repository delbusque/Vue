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
   },
   template: `<div class="bg-white shadow-sm rounded-md text-gray-700 text-xs md:text-sm p-4">{{task}}</div>`
});

app.component('add-task-event', {
   data() {
      return {
         task: ''
      }
   },

   methods: {
      add() {
         this.$emit('added', this.task);
         this.task = '';
      }
   },

   template: `<input type="text" placeholder="Enter task and hit enter"
  @keyup.enter="add" v-model="task"
  class="block w-full rounded-md shadow-sm text-lg p-4"/>`
})

app.mount('#app');