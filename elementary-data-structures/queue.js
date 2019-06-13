class Queue {
    constructor() {
        this.dataStore = [];
    }

    enqueue(element) {
        this.dataStore.push(element)
    }

    dequeue() {
        if(this.dataStore.length === 0) {
            throw "queue is empty"
        } else {
            this.dataStore.shift()
        }
    }
}

class Queue2 {
    constructor() {
        this.dataStore = [];
    }

    enqueue(element) {
        this.dataStore.unshift(element);
    }

    dequeue() {
        this.dataStore.pop();
    }
}
