function recursiveArraySum(args) {
    if (args.length === 0) return 0

    return args[0] + recursiveArraySum(args.slice(1))
}

const array = [1, 2, 3, 4, 5]
console.log(recursiveArraySum(array));

function maxArray(arr) {
    if (arr.length === 1) {
        return arr[0]
    }
    const max = maxArray(arr.slice(1))


    return arr[0] > max ? arr[0] : max
}

const array2 = [1, 5, 3, 9, 2]
console.log(maxArray(array2))