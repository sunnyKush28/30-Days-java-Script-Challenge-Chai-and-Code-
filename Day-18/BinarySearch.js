var binarySearch = function (arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor(start + end / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2)
    }
    // if(arr[middle] === elem){
    //     return middle;
    // }
    // return -1;
    return arr[middle] === elem ? middle : -1;
}
console.log(binarySearch([2, 4, 6, 9, 11, 14, 20, 25, 28, 40], 11)) 