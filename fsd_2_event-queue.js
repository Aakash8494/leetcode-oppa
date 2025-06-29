class SDK {
    constructor() {
        this.queue = [];
        this.count = 1;
    }

    wait = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (this.count % 5 === 0) {
                reject();
            } else {
                resolve();
            }
        }, 2000)
    })

    add = (item) => {
        this.queue.push(item);
    }

    send = async () => {
        if (this.queue.length === 0) {
            console.log("Queue is empty")
            return;
        }

        try {
            await this.wait()
            console.log("sending-", this.queue.shift())
            this.count++;
        }
        catch {
            this.count = 1; // need to set it back to 1 because we need to mod at 5 .... hahaha
            console.log("error")
        } finally {
            console.log("finally")
            this.send();
        }

    }
}

const q = new SDK();
q.add('1')
q.add('2')
q.add('3')
q.add('4')
q.add('5')
q.add('6')
q.add('7');

q.send();