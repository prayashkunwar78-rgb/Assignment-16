// ================================
// CONSTRUCTOR FUNCTION IN JAVASCRIPT
// ================================

// A constructor function is a special function
// It is used to create multiple objects with same structure

// Creating constructor function named Car
function Car(brand, model, year) {
    this.brand = brand;   // Store car brand
    this.model = model;   // Store car model
    this.year = year;     // Store car manufacturing year

    // Method to print car details
    this.getDetails = function () {
        console.log(
            "Brand: " + this.brand +
            ", Model: " + this.model +
            ", Year: " + this.year
        );
    };
}

// Creating multiple instances (objects) of Car
// new keyword creates a new object

let car1 = new Car("Toyota", "Corolla", 2020); // First car object
let car2 = new Car("Honda", "Civic", 2022);    // Second car object
let car3 = new Car("Suzuki", "Swift", 2019);   // Third car object

// Printing details of each car instance
car1.getDetails(); // Prints car1 details
car2.getDetails(); // Prints car2 details
car3.getDetails(); // Prints car3 details


// What is a constructor function?
// A constructor function is used to create multiple objects
// with the same properties and methods

// Why is the new keyword required?
// new keyword does the following:
// 1. Creates a new empty object
// 2. Links 'this' keyword to that object
// 3. Returns the new object automatically

// Without 'new', the object will not be created correctly
