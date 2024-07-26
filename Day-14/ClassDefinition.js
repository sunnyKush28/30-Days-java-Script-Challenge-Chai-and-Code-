class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }


    greeting() {
        console.log(`Hello! my name is ${this.name}, I am ${this.age} year old`)
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

const person1 = new Person("sunny", 30)

person1.greeting()

person1.updateAge(10)

person1.greeting()

