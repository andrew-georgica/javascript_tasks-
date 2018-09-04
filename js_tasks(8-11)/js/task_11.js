
// Сделайте программу, которая будет проверять является ли число типа double целым.



// Input data

var num = prompt("Enter a number please:");

// ------------------------------------------


// Functions

function isInt(num) {
    return num % 1 === 0;
 }

// ------------------------------------------


// Implementation of the program

if(isNaN(num)) {
    console.log("Please enter a number");
}else {
    console.log(isInt(num));
}

