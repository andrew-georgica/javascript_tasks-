
// Напишите метод переводящий рубли в доллары по заданному курсу. В качестве
// аргументов передайте кол-во рублей и курс.


// Input data

var quantity = prompt("Enter the amount of hryvnia");
var dollar_exchange_rate = prompt("Enter the hryvnia exchange rate to the dollar");

// ------------------------------------------


// Functions

function check(num) {

    if (isNaN(num)) {
        return false;
    } else {
        return true;
    }

}

function conversion(quantity, dollar_exchange_rate) {
    if(check(quantity) && check(dollar_exchange_rate)) {
        return quantity + " hryvnia equals " + quantity/dollar_exchange_rate + " dollars";
    } else {
        return "bad";
    }   
}

// ------------------------------------------


// Implementation of the program

console.log(conversion(quantity, dollar_exchange_rate));

// ------------------------------------------
