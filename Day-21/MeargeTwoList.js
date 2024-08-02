function sortedList(arr1, arr2) {


    let list = [...arr1, ...arr2]
    // let newArray = new Map()

    for (let i = 0; i <= list.length - 1; i++) {
        // newArray.set(list[i], list[i])
        for (let j = 0; j < list.length - 1 - i; j++) {
            if (list[j] > list[j + 1]) {
                [list[j], list[j + 1]] = [list[j + 1], list[j]]
            }
        }
    }


    let uniqueList = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] !== list[i + 1]) {
            uniqueList.push(list[i]);
        }
    }

    return uniqueList;

}

console.log(sortedList([1, 3, 4], [3, 5]));