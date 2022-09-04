const vm = Vue.createApp({
  data() {
    return {
      isUnderlined: false,
      isBigFont: false,
      isRed: false,
      highlightClass: 'under-line',
      errorClass: 'red',
      theText: ''
    }
  },
  computed: {
    classes() {
      return {
        red: this.isRed,
        bigfont: this.isBigFont,
        'under-line': this.isUnderlined
      }
    },

    inpClasses() {
      return {
        error: !this.isOK,
        ok: this.isOK
      }
    },

    isOK() {
      return this.theText === 'okey';
    },
  }
}).mount('#app');