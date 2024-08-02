function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j]
            }
        }
    }
}

const arr = [10, 5, 13, 5]
console.log(twoSum(arr, 15));