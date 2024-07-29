class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element);
    }


    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift()
    }

    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0]
    }


    isEmpty() {
        return this.items.length === 0
    }


    size() {
        return this.items.length
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Front element:", queue.front()); // Output: 1
console.log("Dequeue element:", queue.dequeue(2)); // Output: 1
console.log("Front element after dequeue:", queue.front()); // Output: 2
console.log("Queue size:", queue.size()); // Output: 2
console.log("Is queue empty?", queue.isEmpty()); // Output: false

function printJob(...args) {
    const printQueue = new Queue()
    for (let value of args) {
        printQueue.enqueue(value)
    }
    console.log(printQueue.items);

    while (!printQueue.isEmpty()) {
        console.log(`Printed Result: ${printQueue.dequeue()}`);
    }
}

printJob("sunny", 5656, "dsa")

