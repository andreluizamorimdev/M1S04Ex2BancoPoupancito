import { BankAccount } from "./modules/BankAccount.js";
import { SavingsAccount } from "./modules/SavingsAccount.js";
import { PremiumSavingsAccount } from "./modules/PremiumSavingsAccount.js";

//parte do exercicio 2
const checkingAccount = new BankAccount(28.00);
checkingAccount.password = '12345';

function verifyPasswordDeposit() {
    let personPassword = prompt('Digite sua senha para realizar o deposito');
    if(personPassword === checkingAccount.password) {
        checkingAccount.deposit(38.00);
    } else {
        console.log("Senha incorreta tente novamente");
    }
}
verifyPasswordDeposit();

function verifyPasswordWithdraw() {
    let personPassword = prompt('Digite sua senha para realizar a retirada');
    if(personPassword === checkingAccount.password) {
        checkingAccount.withdrawMoney(38.00);
    } else {
        console.log("Senha incorreta tente novamente");
    }
}
verifyPasswordWithdraw();

// parte do exercicio 3 
const savings = new SavingsAccount(25.00, 0.7);
savings.password = '12345';
function verifyPasswordUpdateInterest() {
    let personPassword = prompt('Digite sua senha para visualizar o saldo atualiado após ganho percentual de juros da conta poupança');
    if(personPassword === savings.password) {
        savings.updateBankInterest();
    } else {
        console.log("Senha incorreta tente novamente");
    }
}
verifyPasswordUpdateInterest();


//parte do exercicio 4
const savingsPremium = new PremiumSavingsAccount(29, 1.2);
savingsPremium.password = '12345';

function verifyPasswordUpdateInterestPremium() {
    let personPassword = prompt('Digite sua senha para visualizar o saldo atualiado após ganho percentual de juros da conta poupança premium');
    if(personPassword === savingsPremium.password) {
        savingsPremium.updateBankInterest();
    } else {
        console.log("Senha incorreta tente novamente");
    }
}
verifyPasswordUpdateInterestPremium();

