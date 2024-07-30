function sortedArray(array1, array2) {
    const newShortedArray = [...array1, ...array2]

    const newArrayLength = newShortedArray.length

    for (let i = 0; i <= newArrayLength; i++) {
        for (let j = 0; j < newArrayLength - 1 - i; j++) {
            if (newShortedArray[j] > newShortedArray[j + 1]) {
                [newShortedArray[j], newShortedArray[j + 1]] = [newShortedArray[j + 1], newShortedArray[j]]
            }
        }
    }
    return newShortedArray
}

console.log(sortedArray([1, 64, 3, 64, 2], [6, 9, 3]));



//  function mergeSortedArrays(arr1, arr2) {
//     let mergedArray = [];
//     let i = 0;
//     let j = 0;

//     // Traverse both arrays and insert smaller element from arr1 or arr2
//     // into mergedArray
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }

//     // Store remaining elements of the first array
//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }

//     // Store remaining elements of the second array
//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }

//     console.log("Merged array:", mergedArray);
//     return mergedArray;
// }

// // Example usage:
// mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
// mergeSortedArrays([1, 2, 3], [4, 5, 6]);        // Output: [1, 2, 3, 4, 5, 6]
// mergeSortedArrays([1, 3, 5], [2, 4, 6, 8, 10]); // Output: [1, 2, 3, 4, 5, 6, 8, 10]