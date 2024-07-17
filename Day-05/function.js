//function decleration
function numberEvenOrOdd(a) {
    return a % 2 == 0 ? console.log(`${a} is Even number`) : console.log(`${a} is Odd number`);
}
numberEvenOrOdd(4)

function squareNumber(a) {
    return console.log(`The square of Number ${a} is ${a ** 2}`)
}
squareNumber(10)

//function expresstion
const maxNumber = function (a, b) {
    if (a > b) {
        console.log(`${a} is gretest`);
    } else {
        console.log(`${b} is gretest`);
    }
}
maxNumber(10, 12)

const concatenateString = function (str1, str2) {
    // return console.log(str1 + " " + str2);
    return console.log([str1, str2].join(" "));
}

concatenateString("sunny", "kushwah")

//arrow function
const sumOfNumber = (a, b) => {
    return console.log(`the Sum of Numbers ${a} and ${b} is ${a + b}`);
}

sumOfNumber(10, 15)

const checkStr = (str) => {
    let result = false;
    for (let i = 0; i <= str.length; i++) {

        if (str[i] == "s") {
            result = true;
            console.log(result);
            break
        }

    }
}

const checkStrValue = (str, char) => {
    return console.log(str.includes(char));
}

// checkStr("sunny")
checkStrValue("sunny Kushwah", "K")


// function parameters And defalt value

const product = (p1, p2 = "keyboard") => {
    console.log(p1, p2);
}

product("mouse", "earphone")
product("mouse")

const greeting = (name, age = "15") => {
    console.log(`Hello everyone, My name is ${name}, my age is ${age}`);
}

greeting("sunny kushwah")
greeting("sunny kushwah", 30)

//higher order function
const higherOrderFunction = (retunFun, number) => {
    for (let i = 1; i <= number; i++) {
        console.log(retunFun(i));
    }
}
function retunFun(value) {
    return `Funtion run time ${value}`;
}

higherOrderFunction(retunFun, 5)

const applyFunctions = (func1, func2, value) => {
    const result1 = func1(value)
    const result2 = func2(result1)
    return result2
};


const multiplyByTwo = (num) => num * 2
const addFive = (num) => num + 5


const result = applyFunctions(multiplyByTwo, addFive, 10)
console.log(result)