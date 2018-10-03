
// var arr = [1, 2, 3, 4, 5];
// var new_arr = [];

// for(i=0; i<arr.length; i++) {
//     new_arr.push(arr[i]);
// }

// console.log(new_arr);

// function check(new_arr) {
//     new_arr.push(6);
//     return new_arr;
// }

// console.log(check(new_arr));
// console.log(arr);


// У вас есть двухмерный массив наполненный случайными числами, в той же
// последовательности перенесите эти числа в одномерный массив.


// Input data

var arr = [];
var new_arr = [];

arr.push([0,1]);
arr.push([2,3,4]);

// ------------------------------------------


// Functions

function checkArray(arr) {

    for(i = 0; i < arr.length; i++) {
        var num = arr[i];
        for(j = 0; j < num.length; j++) {
            new_arr.splice(0,0, num[j]);
        }
    }
    
    return new_arr.reverse();
}

// ------------------------------------------


// Implementation of the program

// for(i = 0; i < arr.length; i++) {
//     var num = arr[i];
//     for(j = 0; j < num.length; j++) {
//         new_arr.splice(0,0, num[j]);
//     }
// }

// console.log(new_arr.reverse());

console.log(checkArray(arr));

// ------------------------------------------


