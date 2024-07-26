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
        console.log(`Updated age: ${this.age}`)
    }

    static genericGreeting() {
        return "Hello! This is a generic greeting."
    }
}

class Student extends Person {
    static numberOfStudents = 0;

    constructor(name, age, studentId) {
        super(name, age)
        this.studentId = studentId
        Student.numberOfStudents++
    }

    getStudentId() {
        console.log(`Student ID is ${this.studentId}`)
    }


    greeting() {
        console.log(`Hello! My name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}`)
    }

    static getNumberOfStudents() {
        return Student.numberOfStudents
    }

}

const student4 = new Student("Sunny", "25", "sunny123456")

console.log(Person.genericGreeting())
const student1 = new Student("Sunny", 30, "S12345")
const student2 = new Student("Alex", 22, "S12346")
console.log(`Total number of students: ${Student.getNumberOfStudents()}`)

const student3 = new Student("Taylor", 25, "S12347")
console.log(`Total number of students: ${Student.getNumberOfStudents()}`)
console.log(Student);
console.log(Person);
