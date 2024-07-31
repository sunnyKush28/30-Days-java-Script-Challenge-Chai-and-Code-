const str1 = "JavaScript is popular. Many developers use JavaScript. JavaScript frameworks are widely adopted. Learning JavaScript is beneficial. The JavaScript community is huge.";

const regularEx1 = /JavaScript/g

console.log(str1.match(regularEx1));


const str2 = "Order ID: 9283746521, Tracking ID: 1847562930, Serial Number: 5678391024, Reference Code: 9302847561, Transaction ID: 4728193056.";

const regularEx2 = /\d+/g
console.log(str2.match(regularEx2));


const regularEx3 = /\b[A-Z][a-z]*\b/g
console.log(str2.match(regularEx3));
