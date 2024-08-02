function reverseDigit(num) {
    const number = num.toString()
    let reverseDigitNum = ''
    for (let i = number.length - 1; i >= 0; i--) {
        reverseDigitNum += number[i]
    }
    return parseInt(reverseDigitNum, 10) * Math.sign(num);
}
console.log(reverseDigit(123456));