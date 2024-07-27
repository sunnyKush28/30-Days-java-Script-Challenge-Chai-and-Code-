function outerFunction() {
    let name = "sunny"
    function innerFunction() {
        console.log(name);
    }
    return innerFunction

}


const innerFunction = outerFunction()
innerFunction()

function counter() {
    let counter = 0;
    return {
        increment: function () {
            counter++
        },
        getValue: function () {
            return counter
        }

    }
}

const count = counter()
console.log(count);
count.increment()
console.log(count.getValue());

count.increment()
console.log(count.getValue());

count.increment()
console.log(count.getValue());