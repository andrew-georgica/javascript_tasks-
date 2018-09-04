
// Найдите среднее арифметическое массива из 10 элементов типа double.


// Input data

var arr = [];

// -------------------


// Functions

function check(num) {

    if (isNaN(num)) {
        return false;
    } else {
        return true;
    }

}

function checkArr(arr) {

    if (arr.length < 10) {
        console.log("Enter the number of type double");
    } else {
        console.log("Sum of array numbers is " + toInt(arr));
        console.log("Arithmetic mean is " + calc(arr));
    }

}

function getSum(total, num) {
    return total + num;
}

function toInt(arr) {

    for (i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }

    return arr.reduce(getSum);

}

function calc(arr) {
    return toInt(arr)/arr.length;
}

// -------------------


// Implementation of the program

for (i = 0; i < 10; i++) {

    var num = prompt("Enter the number of type double");

    if (check(num)) {

        arr.push(num);

    } else {
        break;
    }

}

checkArr(arr);

