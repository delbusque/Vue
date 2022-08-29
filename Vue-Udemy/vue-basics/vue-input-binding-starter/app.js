const vm = Vue.createApp({
  data() {
    return {
      riddle1: '',
      riddle2: null,
      riddle3: [],
      ready: false
    }
  },
  methods: {
    log() {
      console.log('My first event handler');
      this.ready = false;
      this.riddle3.push('variable')
    },
    sub() {
      this.ready = true;
    }
  }
}).mount('#app');