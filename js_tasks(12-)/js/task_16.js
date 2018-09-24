
// Найдите победителя марафона.
// Группа людей участвует в марафоне, их имена и время за которое они пробежали
// марафон вы можете увидеть ниже.Ваша задача найти человека, который быстрее всех пробежал дистанцию и 
// вывести его имя и счет.
// (Опционально) Найдите человека, который прибежал вторым.


// Input data

var names = ["Elena", "Thomas", "Hamilton", "Suzie", "Phil", "Matt",
"Alex", "Emma", "John", "James", "Jane", "Emily", "Daniel", "Neda", "Aaron",
"Kate"];

var times = [341, 273, 278, 329, 445, 402, 388, 275, 243, 334, 412, 393,
    299, 343, 317, 265];

// ------------------------------------------


// Functions

function checkMinTime(times) {
    return Math.min(...times);
}

function checkWinner(names) {
   return names[times.indexOf(checkMinTime(times))] + "is the winner. He/She ran a marathon for " + 
   checkMinTime(times) + " seconds";
}

function checkSecond() {
    times.splice(times.indexOf(checkMinTime(times)), 1);
    names.splice(times.indexOf(checkMinTime(times)), 1);
    return names[times.indexOf(Math.min(...times))] + " ran second. He/She ran a marathon for " + 
    Math.min(...times) + " seconds";
}

// ------------------------------------------


// Implementation of the program

console.log(checkWinner(names));
console.log(checkSecond());

// ------------------------------------------