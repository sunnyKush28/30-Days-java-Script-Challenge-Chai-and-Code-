class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount
            console.log(`Deposited: Rs${amount}. New balance: Rs${this.#balance}`);
        } else {
            console.log("Deposite amount is Zero");
        }
    }

    whitDraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount
            console.log(`Withdeaw: Rs${amount}. New balance: Rs${this.#balance}`);
        } else if (amount > this.#balance) {
            console.log("Insufficiant balance")
        } else {
            console.log("whithdraw amount is Zero");
        }
    }

    get balance() {
        return this.#balance
    }
}

const account1 = new Account(5000)

account1.deposit(50)
account1.whitDraw(2221)
console.log(`Account Balance: Rs${account1.balance}`);
console.log(account1.balance);