
// Напишите метод, который будет проверять является ли число палиндромом
// (одинаково читающееся в обоих направлениях).
// (Опционально) усовершенствуйте метод для проверки символьной строки.


// Input data

var num = prompt("Enter the number please");

// ------------------------------------------


// Functions

function numToString(num) {
    return num.toString().split("");
}

function checkNumLength(num) {
    if (numToString(num).length < 2) {
        return false;
    } else {
        return true;
    }
}

function reversArr(num) {
    if (numToString(num).reverse().join("") === numToString(num).join("")) {
        return "This is a palindrome";
    } else {
        return "It's not a palindrome";
    }
}

function checkNum(num) {
    if (checkNumLength(num)) {
        return reversArr(num);
    } else {
        return "It's not a palindrome";
    }
}

// ------------------------------------------


// Implementation of the program


console.log(checkNum(num));


// ------------------------------------------
