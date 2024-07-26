class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }

    get fullname() {
        return console.log(`Fullname: ${this.firstname} ${this.lastname}`);
    }

    set updateFullName({ firstname, lastname }) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

class Student extends Person {
    static numberOfStudents = 0;

    constructor(firstname, lastname, age, studentId) {
        super(firstname, lastname, age)
        this.studentId = studentId
        Student.numberOfStudents++
    }

    getStudentId() {
        console.log(`Student ID is ${this.studentId}`)
    }

    static getNumberOfStudents() {
        return Student.numberOfStudents
    }

}

const student = new Student("Sunny", "Kushwah", "25", "sunny123456")
student.updateFullName = { firstname: "sun", lastname: "kush" };
student.fullname
