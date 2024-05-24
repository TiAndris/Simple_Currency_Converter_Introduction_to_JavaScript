//Write your code here
const input = require('sync-input');

function start() {
    console.log("Welcome to Currency Converter!");
    printCurrencys();
    mainLoop()
    console.log("Have a nice day!");
}

let currencys = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
}
function mainLoop(){
    while (true){
        if (!manageProgram()){
            break;
        }
        calculate();
    }
}
function manageProgram() {
    let exitProgram = Number(input("What do you want to do?\n" +
        "1-Convert currencies 2-Exit program\n"))
    switch (exitProgram) {
        case 1:
            return true;
        case 2:
            return false;
        default:
            console.log("Unknown input.");
            return manageProgram(); // Recursive call for valid input
    }
}

function printCurrencys() {
    for (let currency in currencys) {
        console.log(`1 USD equals ${currencys[currency]} ${currency}`)
    }
}

function calculate() {
    console.log("What do you want to convert?");
    let fromCurrency = input("From: ").toUpperCase();
    if (!checkCurrency(fromCurrency)) {
        calculate();
    }
    let ToCurrency = input("To: ").toUpperCase();
    if (!checkCurrency(ToCurrency)) {
        calculate();
    }

    let amount = Number(input("Amount: "));
    if (amount < 1) {
        console.log("The amount cannot be less than 1");
        return;
    } else if (isNaN(amount)) {
        console.log("The amount has to be a number");
        return;
    } else {
        changeCurrency(fromCurrency, ToCurrency, amount);
    }
}

function checkCurrency(currency) {
    if (!currencys.hasOwnProperty(currency)) {
        console.log("Unknown currency");
        return false;
    }
    return true;
}

function changeCurrency(fromCurrency, ToCurrency, amount) {
    let result = (amount / currencys[fromCurrency]) * currencys[ToCurrency];
    console.log(`Result: ${amount} ${fromCurrency} equals ${result.toFixed(4)} ${ToCurrency}`)
}

start();