// An object is a collection of related data and functions

// Creating a simple object named person
let person = {
    name: "Prayash",            // Property: name
    age: 20,                // Property: age
    city: "Kathmandu",      // Property: city

    // Method inside object
    greet: function () {
        console.log("Hello, my name is " + this.name); // Prints greeting message
    }
};

// Accessing properties using dot notation
console.log(person.name);   // Output: Prayash

// Accessing properties using bracket notation
console.log(person["age"]); // Output: 20

// Updating existing property
person.age = 21;            // Age updated to 21

// Adding new property dynamically
person.country = "Nepal";   // New property added

// Calling object method
person.greet();             // Calls greet method

// Objects are useful because they represent real-world things
// Example: person, car, student, bank account, etc.
