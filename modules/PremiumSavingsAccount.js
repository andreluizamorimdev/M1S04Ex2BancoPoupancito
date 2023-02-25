import { SavingsAccount } from "./SavingsAccount.js";

// parte do exercicio 4

export class PremiumSavingsAccount extends SavingsAccount {
    constructor(balance, interestRate) {
        super(balance, interestRate);
    }

    updateBankInterest() {
            let profit = Number((this.balance * (this.interestRate / 100)).toFixed(2));
            return console.log(`Atualizando juros conta poupança premium valor do saldo após ganho R$ ${this.balance = this.balance + profit}`);
    }
}