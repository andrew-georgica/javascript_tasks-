
// Разработайте программу, которая будет выводить таблицу умножения введенного
// пользователем числа с клавиатуры.


// Input data

var num = prompt("Enter the number please");

var arr = [];

// ------------------------------------------


// Functions

function check(num) {

    if (isNaN(num)) {
        return false;
    } else {
        return true;
    }

}

function multiplicationOnNum(num) {
    
    for (i = 0; i <= 10; i++) {
        arr.push(i*num);
    }

    return arr;
}

// ------------------------------------------


// Implementation of the program

console.log(multiplicationOnNum(num));

// ------------------------------------------

