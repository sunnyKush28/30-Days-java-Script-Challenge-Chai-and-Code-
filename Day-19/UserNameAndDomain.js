const str = "user@example.com";
const regex = /^([\w\.-]+)@([\w\.-]+)$/;

const match = str.match(regex);

if (match) {
    const username = match[1];
    const domain = match[2];
    console.log("Username:", username);
    console.log("Domain:", domain);
} else {
    console.log("No match found.");
}