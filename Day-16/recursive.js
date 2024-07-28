// activity-1

function factorial(value) {
    if (value <= 1) return value
    else {
        // console.log(factorial(value - 1));
        result = value * factorial(value - 1)
        // 5*{factorial(4)=4}*{factorial(3)=3}*{factorial(2)=2}*{factorial(1)=1}
        // console.log(result);
        return result
    }

}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));


function fibonacci(value) {
    if (value <= 1) return value;
    return fibonacci(value - 1) + fibonacci(value - 2);

}
console.log(fibonacci(10));