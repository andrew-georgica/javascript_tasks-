
// Напишите программу, которая будет просить ввести ваше имя, а потом выведет его
// на консоль.


// Input data

var name = prompt("Enter the number please");

// ------------------------------------------


// Functions

function check(name) {

    if (isNaN(name)) {
        return name;
    } else {
        return "It's not a number";
    }

}

// ------------------------------------------


// Implementation of the program

console.log(check(name));

// ------------------------------------------