
// Определить является ли символ введенный с клавиатуры цифрой, буквой или
// знаком пунктуации.


// Input data

var num = prompt("Enter the number please");

// ------------------------------------------


// Functions

function check(num) {

    if (isNaN(num)) {
        if (!!num.match(/^[.,:!?]/)) {
            return "Punctuation mark";
        } else {
            return "String";
        }
    } else {
        return "Number";
    } 

}

// ------------------------------------------


// Implementation of the program

console.log(check(num));

// ------------------------------------------
