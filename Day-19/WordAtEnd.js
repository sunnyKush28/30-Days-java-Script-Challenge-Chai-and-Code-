const str = "This is a test.";
const regex = /(\w+)$/;

const match = str.match(regex);

if (match) {
    const wordAtEnd = match[1];
    console.log("Word at the end:", wordAtEnd);
} else {
    console.log("No match found.");
}

const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const regexURL = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-.,@?^=%&:/~+#]*)?$/;