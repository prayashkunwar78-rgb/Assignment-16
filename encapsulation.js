// ================================
// ENCAPSULATION IN JAVASCRIPT
// ================================

// Encapsulation means wrapping data (variables)
// and methods (functions) together in a single unit (class)

// It also means hiding internal data
// and allowing access only through methods

// Creating a class named BankAccount
class BankAccount {

    // #balance is a private property
    // It cannot be accessed directly from outside the class
    #balance;

    // Constructor is called when object is created
    constructor(balance) {

        // Assigning initial balance to private variable
        this.#balance = balance;
    }

    // Public method to add money to balance
    deposit(amount) {

        // Increasing balance by deposit amount
        this.#balance = this.#balance + amount;
    }

    // Public method to remove money from balance
    withdraw(amount) {

        // Decreasing balance by withdraw amount
        this.#balance = this.#balance - amount;
    }

    // Public method to check current balance
    getBalance() {

        // Returning private balance safely
        return this.#balance;
    }
}

// Creating an object of BankAccount class
let account1 = new BankAccount(1000);

// Depositing money using public method
account1.deposit(500);

// Withdrawing money using public method
account1.withdraw(200);

// Getting balance using getter method
console.log(account1.getBalance());

// Trying to access private property directly
// console.log(account1.#balance);  ERROR


// What is encapsulation?
// Encapsulation is the process of hiding data
// and controlling access through public methods

// Why is data hiding important?
// It protects sensitive data like balance
// It prevents accidental modification
// It increases security and reliability
