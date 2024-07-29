class Node {
    constructor(value) {
        this.value = value
        this.next = null // Initially, the next node is set to null
    }
}

const firstNode = new Node(1)

const secondNode = new Node(2)
firstNode.next = secondNode

const thirdNode = new Node(3)
secondNode.next = thirdNode

// let currentNode = firstNode
// console.log(currentNode);

// if (currentNode !== null) {
//     console.log(currentNode.value)
//     currentNode = currentNode.next
// }

// while (currentNode !== null) {
//     console.log(currentNode.value)
//     currentNode = currentNode.next
// }

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;//firstNode
            console.log(currentNode);
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }


    removeNode() {
        if (this.head === null) {
            console.log("List is empty.");
            return;
        }

        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let currentNode = this.head;
        let previousNode = null;
        while (currentNode.next !== null) {
            previousNode = currentNode;
            console.log(previousNode);
            currentNode = currentNode.next;
        }
        console.log(previousNode.next);

        previousNode.next = null;
    }

    displayNodes() {
        if (this.head === null) {
            console.log("List is empty.");
            return;
        }

        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

const list = new LinkedList();

list.addNode(1);
list.addNode(2);
list.addNode(3);

console.log("Nodes in the list:");
list.displayNodes();

list.removeNode();

console.log("Nodes in the list after removing the last node:");
list.displayNodes();

list.removeNode();
list.removeNode();

console.log("Nodes in the list after removing all nodes:");
list.displayNodes();