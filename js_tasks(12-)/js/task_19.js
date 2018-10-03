

// Напишите программу, которая будет считать количество часов, минут и секунд в
// n-ном количестве суток.


// Input data

var num = prompt("Enter the number please");

// ------------------------------------------


// Functions

function check(num) {

    if (isNaN(num)) {
        return false;
    } else {
        return true;
    }

}

function countData(num) {

    if(check(num)) {
        return "In " + num + " day(s): " +  num*24 + " hours, " + num*24*60 + " minutes, and " 
        + num*24*60*60 + " seconds";
    } else {
        return "Please enter a variable";
    }

}

// ------------------------------------------


// Implementation of the program

console.log(countData(num));

// ------------------------------------------


