class BankAccount {
    #balance = 50; // private variable, cannot be accessed directly from outside

    // getter to check balance
    getBalance() {
        return this.#balance;
    }

    // setter to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`${amount} deposited successfully.`);
        } else {
            console.log("Invalid deposit amount");
        }
    }

    // method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`${amount} withdrawn successfully.`);
        } else {
            console.log("Insufficient balance or invalid amount");
        }
    }
}

// Usage
let myAccount = new BankAccount();

console.log(myAccount.getBalance()); // 50
myAccount.deposit(100);               // 100 deposited
console.log(myAccount.getBalance()); // 150
myAccount.withdraw(70);               // 70 withdrawn
console.log(myAccount.getBalance()); // 80


console.log(myAccount.balance);
