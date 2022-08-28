const vm = Vue.createApp({
  data() {
    return {
      name: '',
      gender: 'unknown',
    }
  },
  computed: {
    message() {
      return `Hello ${this.prefix} ${this.name} !!!`;
    },
    prefix() {
      switch (this.gender) {
        case 'male': return 'Mr';
        case 'female': return 'Ms';
        default: return '';
      }
    }
  },
  watch: {
    name(newName, oldName) {
      fetch(`https://api.genderize.io?name=${newName}`)
        .then(res => res.json())
        .then(data => this.gender = data.gender)
    }
  }
}).mount('#app');