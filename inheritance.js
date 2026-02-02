// ================================
// INHERITANCE IN JAVASCRIPT
// ================================

// Inheritance means one class (child)
// can use properties and methods of another class (parent)

// Creating a parent (base) class
class Animal {

    // Constructor is used to initialize values
    constructor(name) {

        // This assigns the name value to the object
        this.name = name;
    }

    // Method of parent class
    makeSound() {

        // This method will be inherited by child class
        console.log("Animal makes a sound");
    }
}

// Creating a child class Dog
// extends keyword is used to inherit from Animal class
class Dog extends Animal {

    // Constructor of child class
    constructor(name) {

        // super keyword calls the parent class constructor
        // It sends name value to Animal constructor
        super(name);
    }

    // Method overriding
    makeSound() {

        // This replaces the parent class method
        console.log(this.name + " barks");
    }
}

// Creating object of parent class
let animal1 = new Animal("Generic Animal");

// Creating object of child class
let dog1 = new Dog("Rocky");

// Calling parent class method
animal1.makeSound(); // Output: Animal makes a sound

// Calling child class overridden method
dog1.makeSound(); // Output: Rocky barks


// What is inheritance?
// Inheritance allows a child class
// to reuse properties and methods of parent class

// How extends works?
// extends connects child class to parent class
// It allows child to access parent methods and properties

// How super works?
// super calls the parent class constructor
// It must be used before using 'this' in child constructor
