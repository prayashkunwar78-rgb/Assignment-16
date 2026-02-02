# JavaScript ES6+ Assignment – Objects, Classes, and OOP Concepts

This project demonstrates fundamental concepts of modern JavaScript (ES6+) with a focus on object-oriented programming (OOP). 
The goal of this assignment is to provide clear and simple examples of objects, constructor functions, classes, inheritance, encapsulation,
and polymorphism in a way that is easy to understand for students. 
Each concept is explained with code examples, comments, and practical use cases to show how these ideas can be applied in real-world applications.

The first topic covers objects in JavaScript. Objects are used to group related data and functions that represent real-world entities. 
In this assignment, a `Person` object is created with properties such as `name`, `age`, and `city`, along with a `greet()` method thatprints a greeting message.
The code demonstrates accessing object properties using both dot notation and bracket notation, updating existing properties, and
adding new properties dynamically. Objects are very useful in programming because they allow us to organize and 
structure data in a meaningful way, making it easier to manage and use in applications.

The second topic focuses on constructor functions. A constructor function is a special type of function used to create multiple objects that 
share the same structure and behavior. The `Car` constructor function includes properties like `brand`, `model`, and `year`, along with
a method `getDetails()` that prints the car’s details. Multiple car objects are created using the `new` keyword, which is necessary because 
it creates a new object, binds the `this` keyword to that object, and returns the object automatically.
Constructor functions are useful for creating reusable templates and avoiding repetitive code.

The third topic introduces ES6 classes, which are a modern and cleaner way to create objects compared to constructor functions.
The `Student` class includes properties such as `name`, `rollNumber`, and `grade`, and a method `getStudentInfo()` to display student details.
Multiple student objects are created using this class. Additionally, a static method `schoolName()` is included to demonstrate that 
some methods belong to the class itself and not to individual objects.
Classes make code easier to read, maintain, and extend compared to traditional constructor functions.

The fourth topic is inheritance, which allows one class to use the properties and methods of another class.
In this assignment, an `Animal` class serves as the parent class with a `name` property and a `makeSound()` method. 
A `Dog` class extends `Animal` using the `extends` keyword, and it overrides the `makeSound()` method while using `super()` to call the parent class
constructor. Inheritance enables code reuse, organizes related classes hierarchically,
and allows child classes to have specialized behavior while still sharing common functionality from the parent class.

The fifth topic is encapsulation, which is the practice of hiding data and providing controlled access through methods.
The `BankAccount` class contains a private property `#balance` that cannot be accessed directly from outside the class.
Public methods `deposit()`, `withdraw()`, and `getBalance()` allow safe interaction with the balance. 
Encapsulation is important because it protects sensitive information, prevents accidental modification, and ensures data integrity.

The final topic is polymorphism, which allows the same method to have different behavior in different classes.
The `Shape` class includes a generic `calculateArea()` method, which is overridden in child classes `Rectangle` and `Circle` to calculate
the area according to their specific formulas. A loop is used to call the same method on different objects, demonstrating 
how method overriding works in JavaScript. Polymorphism makes programs more flexible and easier to extend because 
the same interface can be used for different types of objects.

In summary, this project provides practical examples of key OOP concepts in JavaScript.
Objects, constructor functions, and classes help organize and structure code, inheritance allows code reuse, encapsulation protects data, and 
polymorphism provides flexibility in method behavior. All examples are accompanied by detailed comments to make it easy for students to understand the logic
and use these concepts in their own projects.
