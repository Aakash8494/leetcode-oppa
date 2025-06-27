const Store = function () {
    this.store = new Map();

    this.add = (timeStamp, price, checkpoint) => {
        // check if timestamp is already present
        // then push the new commodity price
        if (this.store.has(timeStamp)) {
            const prices = this.store.get(timeStamp);
            this.store.set(timeStamp, [...prices, price]);
        }
        // create a new entry for the timestamp
        else {
            this.store.set(timeStamp, [price]);
        }

        // Mark the checkpoint after the last price entry
        if (checkpoint) {
            const prices = this.store.get(timeStamp);
            this.store.set(timeStamp, [...prices, checkpoint]);
        }
    };

    this.highestPrice = (timeStamp, checkpoint) => {
        let prices = this.store.get(timeStamp) ?? [];

        // If checkpoint is passed, get the list till the checkpoint
        if (checkpoint) {
            let checkpointIndex = prices.findIndex((e) => e === checkpoint);
            prices = prices.slice(0, checkpointIndex);
        }

        return this.getMax(prices);
    };

    this.getMax = (pricesList) => {
        // filter non-numeric values (remove checkpoint marks)
        const prices = pricesList.filter((e) => Number(e));
        return Math.max(...prices) ?? 0;
    }
};

const s = new Store();
s.add(1, 1);
s.add(1, 4);
s.add(1, 2);
s.add(1, 3, 'a');
s.add(1, 6);
s.add(1, 7);
s.add(1, 8, 'b');

console.log(s.highestPrice(1, 'a')); // 4
console.log(s.highestPrice(1, 'b')); // 8