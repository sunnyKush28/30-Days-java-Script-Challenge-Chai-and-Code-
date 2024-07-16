for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} = ${5 * i}`);
}

let i = 1;
let number = 0
while (i <= 10) {
    number += i
    i++;
}
console.log(number)

let x = 10
while (x >= 1) {
    console.log(x);
    x--
}

let y = 1;
do {
    console.log(y);
    y++
} while (y <= 5)

let factorialNum = 3
let result = 1;
do {
    result *= factorialNum;
    factorialNum--
} while (factorialNum > 0)
console.log(result);

console.log("Pattern using Nested loop");


for (let index = 1; index <= 5; index++) {
    let patternValue = '';
    for (let index2 = 1; index2 <= index; index2++) {
        patternValue += "*";
    }
    console.log(patternValue);
}

//loop control statement
for (let q = 1; q <= 10; q++) {
    if (q == 5) {
        continue;
    }
    console.log(q);
}

for (let r = 1; r <= 10; r++) {
    if (r == 7) {
        break;
    }
    console.log(r);
}