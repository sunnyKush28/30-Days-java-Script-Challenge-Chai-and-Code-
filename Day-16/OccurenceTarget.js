function countOccurrences(arr, target) {
    if (arr.length == 0) return 0

    const firstElementCount = (arr[0] === target ? 1 : 0);
    return firstElementCount + countOccurrences(arr.slice(1), target);

}
const array = [1, 2, 3, 1, 5, 6, 8, 7, 1, 6, 7, 8, 5, 1, 3, 5, 8, 9, 6, 3, 4, 6, 5, 5]
console.log(countOccurrences(array, 7));