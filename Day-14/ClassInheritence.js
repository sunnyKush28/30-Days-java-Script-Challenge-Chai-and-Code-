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

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age)
        this.studentId = studentId
    }

    getStudentId() {
        console.log(`Student ID is ${this.studentId}`);
    }


    greeting() {
        console.log(`Hello! My name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}`);
    }

}

const student1 = new Student("Sunny", "25", "sunny123456")

student1.getStudentId()
student1.greeting()