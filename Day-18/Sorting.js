//What is Selection Sort in JavaScript?
//Selection sort is a simple and efficient algorithm that works on selecting either the smallest or the largest element of the list or array and moving it to the correct position.

function selectionShort(array) {
    let lengthOfArray = array.length

    for (let i = 0; i <= lengthOfArray - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < lengthOfArray; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }

    return array;

}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionShort(array)); 