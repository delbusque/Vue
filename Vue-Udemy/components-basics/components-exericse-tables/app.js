const app = Vue.createApp({

    data() {
        return {
            tables: [
                {
                    id: 1,
                    num: 1,
                    capacity: 4,
                    meals: null,
                    drinks: null,
                    opened: false,
                    seats: 4
                },
                {
                    id: 2,
                    num: 2,
                    capacity: 4,
                    meals: null,
                    drinks: null,
                    opened: false,
                    seats: 4
                },
                {
                    id: 3,
                    num: 3,
                    capacity: 4,
                    meals: null,
                    drinks: null,
                    opened: false,
                    seats: 4
                },
                {
                    id: 4,
                    num: 4,
                    capacity: 6,
                    meals: null,
                    drinks: null,
                    opened: false,
                    seats: 4
                },
                {
                    id: 5,
                    num: 5,
                    capacity: 8,
                    meals: null,
                    drinks: null,
                    opened: false,
                    seats: 4,
                }
            ]
        }
    },

    methods: {
        showTable(table) {
            table.opened = true;
        }
    },



});

app.component('client-table', {
    emits: ['opened'],
    props: {
        table: {
            type: Object,
            required: true
        }
    },
    methods: {
        open() {
            this.$emit('opened')
        }
    },

    template: `<button 
    @click="open"
    class="bg-white shadow-sm rounded-md text-gray-700 text-xs md:text-sm p-4">
    Table {{table.num}} with capacity of {{table.capacity}}
    </button>`

})

app.component('opened-table', {
    props: {
        table: {
            type: Object,
            required: true
        }
    },
    methods: {
        addMeal() {

        }
    },
    template: `<div
    class="bg-white shadow-sm rounded-md text-gray-700 text-xs md:text-sm p-4">
    Table {{table.num}}: 
    <button class="p-1" @click="addMeal">Add Meal</button>
    <button class="p-1">Add Drink</button>

    <div> Meals: {{table.meals}}</div>     
    <div> Drinks: {{table.drinks}}</div>     
    </div>`
})

app.mount('#app')