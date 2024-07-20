//activity-1: Template literals
const name = "sunny"
const age = 30

console.log(`Name of person: ${name} and age: ${age}`);

console.log(`Lorem ipsum is placeholder text commonly used in the graphic, print, and  
    publishing industries for previewing layouts and visual mockups.
     Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`);
const string = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."

//activity-2: Destructuring
const array = [10, 20]

const [first, second] = array

console.log(first, second);

const book = {
    title: "book",
    author: "sunny",
    year: 2024,
}

const { title, author, year } = book

console.log(title, author, year);



//activity-3: Spread and rest Operators
const array1 = [1, 2, 3, "sunny"]
const newArray = [...array1, 4, 5, 6, 7, 8, 9, 0]

console.log(newArray);

function restValueSum(...values) {
    return values.reduce((acc, curr) => { return acc + curr }, 0)
}

console.log(restValueSum(5, 6, 7, 10));


//activity-4: Deafult parameters
function productDisplay(product1, amount = 1) {
    return `Product: ${product1}, Amount: ${amount}`;
}

console.log(productDisplay("mouse", 25));
console.log(productDisplay("Keyboard"));


//activity-5: Enhance Object literals

const book2 = {
    title: "sunny1",
    name: "Kushwah",
    year: "2025",
    getNameAndYear: function () {
        console.log(`Book title is ${this.title}, name is ${this.name} and year is ${this.year}  `);
    }
}

book2.getNameAndYear()

const variable = "JS variable"
const variableVlaue = "30 days Js challenge"

const obj = {
    [variable]: variableVlaue
}

console.log(obj);