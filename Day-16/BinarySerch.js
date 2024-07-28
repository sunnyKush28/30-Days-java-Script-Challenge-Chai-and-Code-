//Binary Search is a searching technique that works on the Divide and Conquer approach. It is used to search for any element in a sorted array. Compared with linear, binary search is much faster with a Time Complexity of O(logN), whereas linear search works in O(N) time complexity

//Binary Search Algorithm is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N). 

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    // Base case: if the range is invalid, the target is not in the array
    if (left > right) {
        return -1;
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);


    // If the middle element is the target, return its index
    if (arr[mid] === target) {
        return mid;
    }

    // If the target is less than the middle element, search in the left half
    if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }

    // If the target is greater than the middle element, search in the right half
    return binarySearchRecursive(arr, target, mid + 1, right);
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13]
const targetValue = 11
const result = binarySearchRecursive(sortedArray, targetValue)
console.log(result)