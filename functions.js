class BankAccount {
    balance;
    #password;
    
    constructor(balance, password) {
        this.balance = balance;
        this.#password = password;
    }

    get password() {
        return this.#password;
    }

    set password(pass) {
        this.password = pass;
    }

    deposit(newBalance) {
        let personPassword = prompt('Digite sua senha para depositar o dinheiro');
        if(personPassword === this.password) {
            this.balance = newBalance;
            console.log(`O seu deposito de R$ ${newBalance} foi realizado com sucesso`);
        } else {
            console.log(`Sua senha esta incorreta favor tente novamente`);
        }

    }

    withdrawMoney(money) {
        let personPassword = prompt('Digite sua senha para retirar o dinheiro');
        if (personPassword === this.password) { 
            if(money <= this.balance) {
                let total = this.balance - money;
                console.log(`Retirado R$ ${money} de seu saldo de R$ ${this.balance} sobrou o valor de R$ ${total.toFixed(2)} em sua conta`)
            } else {
                console.log(`Valor para retirada é maior que o seu saldo, favor verifique seu saldo e tente novamente`);
            }
        } else {
            console.log('Sua senha esta incorreta favor tente novamente');
        }
    }

}

const checkingAccount = new BankAccount(28.00, '1234');

checkingAccount.deposit(38.00);

checkingAccount.withdrawMoney(38.00);