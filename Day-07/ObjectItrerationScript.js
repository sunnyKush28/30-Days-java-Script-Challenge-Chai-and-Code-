
const book = {
    title: "book1",
    author: "sunny1",
    year: 2022,
    getTitleAndYear: function () {
        return `Title: ${this.title}, Author: ${this.year}`;
    },
    gettitleAndAuthor: function () {
        return `Title: ${this.title}, Year: ${this.year}`;
    }
}

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

const keys = Object.keys(book);
const values = Object.values(book);

keys.forEach((key, index) => {
    console.log(`${key}: ${values[index]}`);
});