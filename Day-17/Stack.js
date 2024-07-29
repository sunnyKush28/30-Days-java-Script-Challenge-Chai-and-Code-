class Stack {
    constructor() {
        this.items = []
    }

    push(value) {
        this.items.push(value)
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("No elements to pop");
        }
        return this.items.pop()
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("No elements to peek");
        }
        return this.items[this.items.length - 1]
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = [];
    }


}

const stack = new Stack()
stack.push(1)

stack.push(2)
stack.push(3)
console.log(stack.peek())

console.log(stack.pop())
console.log(stack.peek())

console.log(stack.pop())
console.log(stack.pop())

console.log(stack.isEmpty())


function reverseString(str) {
    const stack = new Stack()
    let reverseStr = ''

    for (let char of str) {
        stack.push(char)
    }

    while (!stack.isEmpty()) {
        reverseStr += stack.pop()
    }

    return reverseStr;
}

const originalString = "sunny";
const reversedString = reverseString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);