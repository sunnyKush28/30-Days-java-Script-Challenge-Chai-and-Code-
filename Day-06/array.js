// array creation
//activity-1
const array = [1, 2, 3, 4, 5]

console.log(array);
for (let i = 0; i <= array.length; i++) {
    if (i == 0) {
        console.log(array[i]);
    } else if (i == array.length - 1) {
        console.log(array[i])
    }
}
console.log(array[0], array[array.length - 1]);


//activity-2
const arrayTwo = [1, 2, 3, 4, 5]

arrayTwo.push(6)
console.log(arrayTwo);

console.log(arrayTwo.pop(), arrayTwo)

console.log(arrayTwo.shift(), arrayTwo)

console.log(arrayTwo.unshift(1), arrayTwo)
console.log(arrayTwo.unshift(2), arrayTwo)

//activity-3
const arrayThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const mapArray = arrayThree.map(num => num * 2)
console.log(`mapArray: `, mapArray);

const filterArray = arrayThree.filter((num) => num % 2 == 0)
console.log(`filterArray: `, filterArray);

let innitialValue = 0;
const reducerArray = arrayThree.reduce((acc, value) => acc + value, innitialValue)
console.log(`reducerArray: `, reducerArray);

//activity-4
const arrayFour = [1, 2, 3, 4, 5]

for (let index = 0; index < arrayFour.length; index++) {
    const element = arrayFour[index];
    console.log(element);

}

arrayFour.forEach((num) => {
    return console.log(num);
})


//activity-4

const arrayTwoDimensional = [[1, 2, 3], [4, 5, 6]]
console.log(arrayTwoDimensional);
console.log(arrayTwoDimensional[1][2]);


