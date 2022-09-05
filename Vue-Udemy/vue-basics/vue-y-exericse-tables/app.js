const vm = Vue.createApp({

    data() {
        return {
            isOpen: false,
            opened: true,
            tables: [
                {
                    id: 1,
                    capacity: 4,
                    meals: null,
                    drinks: null,
                    seats: 4
                },
                {
                    id: 2,
                    capacity: 4,
                    meals: null,
                    drinks: null,
                    seats: 4
                },
                {
                    id: 3,
                    capacity: 4,
                    meals: null,
                    drinks: null,
                    seats: 4
                },
                {
                    id: 4,
                    capacity: 6,
                    meals: null,
                    drinks: null,
                    seats: 4
                },
                {
                    id: 5,
                    capacity: 8,
                    meals: null,
                    drinks: null,
                    seats: 4,
                    isFree: true,
                    opened: true
                }
            ]
        }
    },

    methods: {
        openTable() {
            this.opened = false;
            this.isOpen = true;
        }
    }

}).mount('#app')