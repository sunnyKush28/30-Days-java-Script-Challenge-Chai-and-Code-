import _ from 'lodash'

const array = [1, 2, 3, 4, 5]
const array1 = _.shuffle(array)

console.log(array, array1);

const fetchData = async () => {
    try {
        await fetch('https://jsonplaceholder.typicode.com/users/1').then(res => console.log(res))
    } catch (error) {
        console.log(error.message);
    }
}

fetchData()