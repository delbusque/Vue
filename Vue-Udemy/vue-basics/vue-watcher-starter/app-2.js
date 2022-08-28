let vat = 20;
let vatIndex = vat / 100 + 1;

const vm = Vue.createApp({

    data() {
        return {
            item: 'Versace',
            price: 50,
            name: '',
            gender: 'unknown'
        }
    },
    computed: {
        vatPrice() {
            return this.price * vatIndex;
        },
        message() {
            return `Price for ${this.prefix} of ${this.item} is ${this.vatPrice}$ (no VAT - ${this.price}$)`
        },
        prefix() {
            switch (this.gender) {
                case 'male': return 'Him';
                case 'female': return 'Her';
                default: return 'unspecified gender'
            }
        }
    },
    watch: {
        name(newName, oldName) {
            fetch(`https://api.genderize.io?name=${newName}`)
                .then(res => res.json())
                .then(data => {
                    this.gender = data.gender;
                })
        }
    }

}).mount('#app')