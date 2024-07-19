const book = {
    title: "book",
    author: "sunny",
    year: 2024,
    getTitleAndYear: function () {
        return `Title: ${this.title}, Author: ${this.year}`;
    },
    gettitleAndAuthor: function () {
        return `Title: ${this.title}, Year: ${this.year}`;
    }
}

for (let key in book) {
    if (typeof book[key] !== "function") {
        console.log(`${key}: ${book[key]}`);
    }
}
console.log(book.getTitleAndYear());
console.log(book.gettitleAndAuthor());
