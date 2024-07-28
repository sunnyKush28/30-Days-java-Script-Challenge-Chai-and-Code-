function stringRecursion(str) {
    if (str === "") {
        return "";
    }

    return str.charAt(str.length - 1) + stringRecursion(str.slice(0, -1))

}

console.log(stringRecursion("sunny"));

function stringPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }

    if (str.charAt(0) === str.charAt(str.length - 1)) {
        return stringPalindrome(str.slice(1, -1));
    }


    return false;

}
console.log(stringPalindrome("sunu2"));
