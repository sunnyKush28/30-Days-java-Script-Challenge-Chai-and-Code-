//Insertion Sort
//In this approach, utilize the Insertion Sort algorithm to arrange elements in ascending order by repeatedly placing each element in its correct position among the already sorted elements. Finally, the sorted array is returned.

function insertionSortFun(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(insertionSortFun(arr));