//Bubble sort algorithm is an algorithm that sorts an array by comparing two adjacent elements and swapping them if they are not in the intended order. Here order can be anything like increasing or decreasing.

function bubbleShort(array) {
    const lengthOfArray = array.length

    for (let i = 0; i < lengthOfArray; i++) {

        for (let j = 0; j < lengthOfArray - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }

    return array
}

console.log(bubbleShort([25, 2, 3, 20]));

