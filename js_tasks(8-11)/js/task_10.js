
// Вивести послідовсність фібоначі з першого по N елемент, елементи виводити через кому.  
// Число N задається користувачем (не важливо де і як) після того як закінчиться розробка,
// перевірити яке максимальне число фібоначі може вивсети  машина (браузер).



// Input data

var num = prompt("Enter a number please:");
var arr = [];

arr[0] = 0;
arr[1] = 1;

// ------------------------------------------


// Functions

function checkArray(arr) {
    for(i = 2; i <= num; i++) {
        arr[i] = arr[i-2] + arr[i-1];
    }
    return arr.slice(2);
}

function toString() {
    return checkArray(arr).join(", ");
}


// ------------------------------------------


// Implementation of the program

if(isNaN(num)) {
    console.log("Please enter a number");
}else {
    console.log(toString());
}






