function oprations(a, b) {
    let oprations = []
    oprations.push(
        { "addition of values is": a + b },
        { "subtration of value is": a - b },
        { "multiplication of value is": a * b },
        { "divion of value is": a / b },
        { "remainder of value is": a % b },
    )

    return oprations

}

console.log(oprations(23, 3));

function assignmentOpr(a) {

    let task = []
    let task1 = (a) => {
        task.push(a += 3)
    }
    let task2 = (a) => {
        task.push(a -= 3)
    }
    task1(a)
    task2(a)

    return task
}
console.log(assignmentOpr(5));

function comparsionOpr(a, b) {
    let task = []
    task.push(
        { ">": a > b },
        { "<": a < b },
        { ">=": a >= b },
        { "<=": a <= b },
        { "==": a == b },
        { "===": a === b },
    )

    return task
}
console.log(comparsionOpr(10, 10));


function checkConditions(a, b) {
    let condition1 = a >= b;
    let condition2 = a <= b;
    if (condition1 && condition2) {
        return "Condition is True"
    } else {
        return "One or Both condition is false"
    }
}

console.log(checkConditions(10, 11));

function checkConditions2(a, b) {
    let condition1 = a >= b;
    let condition2 = a <= b;
    if (condition1 || condition2) {
        return "One or both Condition is True"
    } else {
        return "Both condition is false"
    }
}

console.log(checkConditions2(10, 11));

function checkConditions3(a, b) {

    if (!(a > b)) {
        return `${a} is not greater then ${b}`
    } else {
        return `${a} is  greater then ${b}`

    }
}

console.log(checkConditions3(10, 5));

function tarnaryOpr(a, b) {
    let condition1 = a >= b;
    let condition2 = a <= b;
    return (condition1 && condition2) ? "Both condition are true" : "One or both condition is false";
}
console.log(tarnaryOpr(10, 10));
