function palindromeNumber(num) {
    let number = num.toString()
    // console.log(/[-]/g.test(number));
    if (/[-]/g.test(number)) {
        number = number.slice(1)
    }

    if (number.length <= 1) {
        return true
    }

    if (number.charAt(0) == number.charAt(number.length - 1)) {
        return palindromeNumber(number.slice(1, -1))
    }

    return false
}

console.log(palindromeNumber(-121));


function isPalindrome(num) {
    // Negative numbers are not palindromes
    if (num < 0) return false;

    // Convert the number to a string
    const str = num.toString();

    // Compare the string with its reversed version
    const reversedStr = str.split('').reverse().join('');

    // Check if the original string is the same as the reversed one
    return str === reversedStr;
}

// Example usage:
console.log(isPalindrome(121));  // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(123));  // Output: false