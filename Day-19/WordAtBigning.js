const str = "Hello world, this is a test.";
const regex = /^(\w+)/;

const match = str.match(regex);

if (match) {
    const wordAtBeginning = match[1];
    console.log("Word at the beginning:", wordAtBeginning);
} else {
    console.log("No match found.");
}
