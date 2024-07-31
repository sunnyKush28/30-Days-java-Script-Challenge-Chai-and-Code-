// const str = "(123) 456-7890";
// const regexAreaCode = /\(\d{3}\)/g;
// const regexCenterOffice = /\d{3}\-/g;
// const regexOfficeCode = /\-\d{4}/g;
// const matches1 = str.match(regexAreaCode);
// const matches2 = str.match(regexCenterOffice);
// const matches3 = str.match(regexOfficeCode);

// console.log(matches1);
// console.log(matches2);
// console.log(matches3);


const str = "(123) 456-7890";

// Matches the area code, including parentheses
const regexAreaCode = /\(\d{3}\)/g;

// Matches the central office code (three digits after the area code)
const regexCenterOffice = /\d{3}(?=\-)/g;  // Positive lookahead to match 3 digits before the hyphen

// Matches the line number (four digits after the hyphen)
const regexOfficeCode = /(?<=-)\d{4}/g;  // Positive lookbehind to match 4 digits after the hyphen

const matches1 = str.match(regexAreaCode);
const matches2 = str.match(regexCenterOffice);
const matches3 = str.match(regexOfficeCode);

console.log(matches1);
console.log(matches2);
console.log(matches3);
