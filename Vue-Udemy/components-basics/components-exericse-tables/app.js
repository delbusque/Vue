const app = Vue.createApp({

    data() {
        return {

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
                }
            ]
        }
    },

    methods: {
    },



});

app.component('client-table', {
    props: ['tablename'],
    template: `<div class="bg-white shadow-sm rounded-md text-gray-700 text-xs md:text-sm p-4">{{tablename}}</div>`

})

app.mount('#app')