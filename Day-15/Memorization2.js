function memorizedFunction() {
    const cache = {}

    function factorial(value) {
        if (value <= 1) return 1

        if (cache[value] !== undefined) {
            console.log(`Returning cached result for ${value}`);
            return cache[value]
        } else {
            console.log(`Computing result for ${value}`);

            let result = value * factorial(value - 1);
            cache[value] = result

            return cache[value];
        }
    }
    return factorial;
}

const memoizedFactorial = memorizedFunction();

console.log(memoizedFactorial(3))
console.log(memoizedFactorial(3))



console.log(memoizedFactorial(4))
