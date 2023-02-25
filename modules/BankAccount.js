export class BankAccount {
    balance;
    #_password;
    constructor(balance) {
        this.balance = balance;
        this.#_password;
    }

    get password() {
        return this.#_password;
    }

    set password(pass) {
        this.#_password = pass;
    }

    /* verifyPassword() {
        if(this.personPassword === this.password) {
            return true;
        } else {
            return false;
        }
    } */

    deposit(newBalance) {
        this.balance = newBalance;
        console.log(`O seu deposito de R$ ${newBalance} foi realizado com sucesso`);

    }

    withdrawMoney(money) {
        if(money <= this.balance) {
            let total = this.balance - money;
            console.log(`Retirado R$ ${money} de seu saldo de R$ ${this.balance} sobrou o valor de R$ ${total.toFixed(2)} em sua conta`)
        } else {
            console.log(`Valor para retirada é maior que o seu saldo, favor verifique seu saldo e tente novamente`);
        }
       
    }

}