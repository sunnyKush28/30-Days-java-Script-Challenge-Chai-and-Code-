function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;  // In case k is greater than the length of the array
    console.log(k);
    // Reverse the entire array
    reverse(arr, 0, n - 1);
    // Reverse the first k elements
    reverse(arr, 0, k - 1);
    // Reverse the remaining elements
    reverse(arr, k, n - 1);

    console.log("Array after rotation:", arr);
    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// Example usage:
rotateArray([1, 2, 3, 4, 5, 6, 7], 7);  // Output: [5, 6, 7, 1, 2, 3, 4]
rotateArray([1, 2, 3, 4, 5], 2);        // Output: [4, 5, 1, 2, 3]
rotateArray([1, 2, 3], 4);              // Output: [3, 1, 2] (since 4 % 3 = 1)
