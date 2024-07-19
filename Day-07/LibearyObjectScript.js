
const book1 = {
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

const book2 = {
    title: "book2",
    author: "sunny2",
    year: 2021,
    getTitleAndYear: function () {
        return `Title: ${this.title}, Author: ${this.year}`;
    },
    gettitleAndAuthor: function () {
        return `Title: ${this.title}, Year: ${this.year}`;
    }
}

const book3 = {
    title: "book3",
    author: "sunny3",
    year: 2023,
    getTitleAndYear: function () {
        return `Title: ${this.title}, Author: ${this.year}`;
    },
    gettitleAndAuthor: function () {
        return `Title: ${this.title}, Year: ${this.year}`;
    }
}


const library = {
    name: "book library",
    books: [book1, book2, book3]
}



console.log(`Library Name: ${library.name}`);

library.books.map((book) => {
    console.log(book.title);
})

library.books.forEach((book, index) => {
    console.log(`Book ${index + 1}: ${book.getTitleAndYear()}`);

})