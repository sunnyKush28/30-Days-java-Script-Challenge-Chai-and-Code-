function checkNumber(number) {
    if (number < 0) {
        return "Number is negative, Number: " + number
    } else if (number > 0) {
        return "Number is positive, Number: " + number
    } else {
        return "Number is zero, Number: " + number
    }
}

console.log(checkNumber(-0));

function eligible(age) {
    if (age >= 18) {
        return "Eligible For vote"
    } else {
        return "Not eligible For vote"

    }
}

console.log(eligible(15));

function largetNumber(a, b, c) {
    if (a > b && a > c) {
        return `Number ${a} is larget number`
    } else if (b > a && b > c) {
        return `Number ${b} is larget number`
    } else {
        return `Number ${c} is larget number`

    }
}

console.log(largetNumber(30, 15, 25));

function dayOfWeek(day) {
    switch (true) {
        case day = 1:
            return "Today is Monday"
        case day = 2:
            return "Today is Tuesday"
        case day = 3:
            return "Today is Wednesday"
        case day = 4:
            return "Today is Thrusday"
        case day = 5:
            return "Today is Firday"
        case day = 6:
            return "Today is Saturday"
        case day = 7:
            return "Today is Sunday"


        default:
            return "Please provide Day"
    }
}

console.log(dayOfWeek(1));

function gradeFind(number) {
    switch (true) {
        case (number >= 80):
            return "Your grade is A"
        case (number >= 65):
            return "Your grade is B"
        case (number >= 45):
            return "Your grade is C"
        case (number >= 35):
            return "Your grade is D"
        case (number < 35):
            return "Your grade is F"
        default:
            return "Please provide number"
    }

}

console.log(gradeFind(85));

function numberisEvenOrOdd(number) {
    return number % 2 == 0 ? "Number is even, Number: " + number : "Number is odd, Number: " + number
}

console.log(numberisEvenOrOdd(3));

function findLeapYear(year) {
    return year % 4 == 0 ? year % 100 == 0 ? year % 400 == 0 ? "Leap year" : "Not leap year" : "leap year" : "Not Leap Year"
}

console.log(findLeapYear(2020))
console.log(findLeapYear(2021))
console.log(findLeapYear(1900))
console.log(findLeapYear(2000))
