import { BankAccount } from "./BankAccount.js";

// parteexercicio 3

export class SavingsAccount extends BankAccount {
    constructor(balance, interestRate) {
        super(balance);
        this.interestRate = interestRate;
    }

    updateBankInterest() {
            let profit = Number((this.balance * (this.interestRate / 100)).toFixed(2));
            return console.log(`Atualizando juros conta poupança valor do saldo após ganho R$ ${this.balance = this.balance + profit}`);
    }

}