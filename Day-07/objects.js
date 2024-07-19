//activity-1-object creations and access

const book = {
    title: "book",
    author: "sunny",
    year: 2024,
}
console.log(book);
console.log(`Tiitle of the book: ${book.title}`);
console.log(`Author of the book: ${book.author}`);

//activity-2: object methods
Object.defineProperty(book, 'details', {
    value: function () {
        console.log(`Tiitle of the book: ${this.title}, Author of the book: ${this.author}`);
    }
})

book.details()

Object.defineProperty(book, 'updateYear', {
    value: function (year) {
        this.year = year
        console.log(`Year of the book ${this.year}`);
    }
})

book.updateYear(2022)
console.log(book);

//activity-3: nested object 

const books = [
    {
        title: "book1",
        author: "sunny1",
        name: "Kushwah1",
        year: 2021,
    },
    {
        title: "book2",
        author: "sunny2",
        name: "Kushwah2",

        year: 2022,
    },
    {
        title: "book3",
        author: "sunnhy3",
        name: "Kushwah3",
        year: 2023,
    }
];

console.log(books);

for (let index in books) {

    console.log(`Title of the book ${books[index].title}, Name of the book ${books[index].name}`)
}

//activity-4: this keyword 
const book2 = {
    title: "sunny1",
    name: "Kushwah",
    year: "2025",
    getNameAndYear: function () {
        console.log(`Book title is ${this.title}, name is ${this.name} and year is ${this.year}  `);
    }
}

book2.getNameAndYear()

//activity-5: Object itration

for (let key in book2) {
    if (typeof book2[key] !== "function") {
        console.log(key + ": " + book2[key]);
    }

}

console.log(Object.keys(book2));
console.log(Object.values(book2));

