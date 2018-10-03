
// Придумайте способ превращения числа, в массив из его разрядов. Пример: 562
// -> [5,6,2].


// Input data

var num = prompt("Enter the number please");
var arr;
// var num = 589;

// ------------------------------------------


// Functions

function check(num) {

    if (isNaN(num)) {
        return false;
    } else {
        return true;
    }

}

function toArray(num) {
    if (check(num)) {
        arr = num.split("");
        for(i = 0; i < arr.length; i++) {
            arr[i] = parseInt(arr[i]);
        }
        return arr;
    } else {
        return "Please enter a number";
    }
}

// ------------------------------------------


// Implementation of the program

console.log(toArray(num));

// ------------------------------------------
