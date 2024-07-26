class Account {
    constructor(balance) {
        this.balance = balance
    }

    set acountWithdraw(amount) {
        return this.balance = this.balance - amount
    }

    get accountBalance() {
        return this.balance
    }
}

const account1 = new Account(5000)

console.log(account1.balance);
account1.acountWithdraw = 2000
console.log(account1.accountBalance);
account1.acountWithdraw = 2000
console.log(account1.accountBalance);