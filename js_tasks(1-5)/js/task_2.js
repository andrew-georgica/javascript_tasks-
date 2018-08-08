
var mass = prompt("Please enter your weight in kilograms");
// var mass = 70;

if(isNaN(mass)) {
    console.log("Please enter your weight only by number");
} else {
    console.log("Your weight in the month is " + mass*0.17 + "kg");
}


