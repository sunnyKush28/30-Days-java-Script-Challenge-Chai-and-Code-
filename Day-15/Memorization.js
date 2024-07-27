function memorized(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);
        console.log(key);
        if (cache.has(key)) {
            console.log('Returning cached result for', args);
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);

        console.log('Computing result for', args);
        return result;
    }
}

const slowFunction = (num, num1) => {

    return num * num1;
};

const memoizedFunction = memorized(slowFunction);


console.log(memoizedFunction(10, 20));
console.log(memoizedFunction(20, 10));
console.log(memoizedFunction(20, 20));