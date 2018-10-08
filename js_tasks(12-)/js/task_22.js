
// Пользователь вводит задает расстояние до места назначения (N) и время, за
// которое нужно доехать (T). Вычислить скорость (км/ч), с которой нужно ехать.


// Input data

var distance = prompt("Enter the distance please");
var time = prompt("Enter the timme please");

// ------------------------------------------


// Functions

function check(num) {

    if (isNaN(num)) {
        return false;
    } else {
        return true;
    }

}

function calculateSpeed(distance, time) {
    if (check(distance) && check(time)) {
        return "The required speed -" + distance / time;
    } else {
        return "Data was entered incorrectly. Please retype data entry.";
    }
}

// ------------------------------------------


// Implementation of the program

console.log(calculateSpeed(distance, time));

// ------------------------------------------