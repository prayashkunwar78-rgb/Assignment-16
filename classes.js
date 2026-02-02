// Class is a blueprint to create objects

// Creating Student class
class Student {
    constructor(name, rollNumber, grade) {
        this.name = name;               // Student name
        this.rollNumber = rollNumber;   // Roll number
        this.grade = grade;             // Grade
    }

    // Method inside class
    getStudentInfo() {
        console.log(this.name + " " + this.rollNumber + " " + this.grade);
    }

    // Static method
    static schoolName() {
        console.log("Shanti Deep Academy School"); // Belongs to class, not object
    }
}

// Creating student objects
let s1 = new Student("Prayash", 1, "A"); // Student 1
let s2 = new Student("Prakash", 2, "B"); // Student 2

// Calling methods
s1.getStudentInfo(); // Student 1 info
s2.getStudentInfo(); // Student 2 info

// Calling static method
Student.schoolName(); // Static method call

// Class vs Constructor:
// Class is cleaner and easier to read
// Constructor function is older way
