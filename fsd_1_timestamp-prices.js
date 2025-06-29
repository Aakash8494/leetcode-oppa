const Store = function () {// arrow function no no no no .... function bcos of this keyword
    // constructor() {
    this.store = new Map();
    // }

    this.add = (timestamp, price, checkpoint) => {
        if (this.store.has(timestamp)) {
            const existing_prices = this.store.get(timestamp);
            this.store.set(timestamp, [...existing_prices, price]);
        } else {
            this.store.set(timestamp, [price]);
        }

        if (checkpoint) {
            const existing_prices = this.store.get(timestamp);
            this.store.set(timestamp, [...existing_prices, checkpoint]);
        }
    }


    this.getHighestPrice = (timestamp, checkpoint) => {

        let prices = [...this.store.get(timestamp)];


        if (checkpoint) {
            let index = prices.findIndex(item => item === checkpoint);
            prices = prices.splice(0, index);
        }

        return this.getMaxPrice(prices)


    }
    this.getMaxPrice = (prices) => {
        console.log('prices: ', prices);
        // if (prices.length === 0) return 0; 
        const pricesList = prices.filter((item) => {
            console.log('Number(item): ', Number(item));
            return Number(item)// NaN behaves as falsy but not equal to false
        })
        return Math.max(...pricesList) ?? 0; // why ?? 
    }

}

const s = new Store();
s.add(1, 1)
s.add(1, 4)
s.add(1, 10)
s.add(1, 2)
s.add(1, 1, 'a')
s.add(1, 1)
s.add(1, 1)
s.add(1, 9)
s.add(1, 1, 'b')

console.log(s.getHighestPrice(1, 'a'))
console.log(s.getHighestPrice(1, 'b'))
console.log(s.store)

