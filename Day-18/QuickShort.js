//What is Quick Sort Algorithm?
// Quick sort is one of the sorting algorithms that works on the idea of divide and conquer. It takes an element as a pivot and partitions the given array around that pivot by placing it in the correct position in the sorted array. The pivot element can be selected in the following ways:

// Select the First element as a pivot
// Select the Last element as a pivot
// Select the Middle element as a pivot
// Select a Random element as a pivot

// high = 4
// array[high] = 40
// low = 0

function partition(arr, low, high) {
    let pivot = arr[high];//
    let i = low - 1;
    console.log(i);
    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot 
        if (arr[j] < pivot) {
            // Increment index of smaller element 
            i++;
            // Swap elements 
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // Swap pivot to its correct position 
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1; // Return the partition index 
}

function quickSort(arr, low, high) {
    if (low >= high) return;
    let pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
}

let arr = [10, 80, 30, 90, 40];
console.log("Original array: " + arr);

quickSort(arr, 0, arr.length - 1);
console.log("Sorted array: " + arr);