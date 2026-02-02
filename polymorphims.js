// ================================
// POLYMORPHISM IN JAVASCRIPT
// ================================

// Polymorphism means one method name
// but different behavior in different classes

// Creating a parent (base) class
class Shape {

    // Method in parent class
    calculateArea() {

        // Default behavior of calculateArea method
        console.log("Area is not defined");
    }
}

// Rectangle class inherits Shape
class Rectangle extends Shape {

    // Constructor for Rectangle class
    constructor(length, width) {

        // Calling parent class constructor
        super();

        // Assigning length value
        this.length = length;

        // Assigning width value
        this.width = width;
    }

    // Overriding calculateArea method
    calculateArea() {

        // Rectangle has its own area calculation
        return this.length * this.width;
    }
}

// Circle class inherits Shape
class Circle extends Shape {

    // Constructor for Circle class
    constructor(radius) {

        // Calling parent class constructor
        super();

        // Assigning radius value
        this.radius = radius;
    }

    // Overriding calculateArea method
    calculateArea() {

        // Circle has its own area calculation
        return 3.14 * this.radius * this.radius;
    }
}

// Creating objects of different shape types
let shapes = [
    new Rectangle(10, 5), // Rectangle object
    new Circle(7)         // Circle object
];

// Looping through all shape objects
shapes.forEach(function (shape) {

    // Calling same method on different objects
    // Each object responds differently
    console.log(shape.calculateArea());
});


// What is polymorphism?
// Polymorphism allows same method name
// to perform different actions based on object type

// How method overriding works?
// Child class defines method with same name
// Parent method is replaced by child method
