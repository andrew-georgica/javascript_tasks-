
// У вас есть двухмерный массив [n][n], придумайте способ поменять столбцы и строки
// местами.

// Стар, от чесно, стільки, скіль сидів над цією задачею, не сидів над жодою. Хз як її рішити,
// але точно не так як я. Гуглити я не хочу. Може ти допоможеш.


// Input data

// var new_arr = [
//     arr1 = [12,65,59,10],
//     arr2 = [30,14,38,44],
//     arr3 = [51,40,25,29],
//     arr4 = [23,32,42,19],
//     arr5 = [16,28,39,72]
// ];

var arr = [
    arr1 = [12,30,51,23,16],
    arr2 = [65,14,40,32,28],
    arr3 = [59,38,25,42,39],
    arr4 = [10,44,29,19,72]
];

var count = 5;
var delta = 4;  
var checkArrayElement;

var mainArr =[];

var newArr = [];
var newArr2 =[];
var newArr3 =[];
var newArr4 =[];
var newArr5 =[];

// ------------------------------------------


// Functions

// ------------------------------------------


// Implementation of the program

for(i = 0; i < arr.length; i++) {

    var checkArrayElement = arr[i];
    
    newArr.push(checkArrayElement[0]);
    newArr2.push(checkArrayElement[1]);
    newArr3.push(checkArrayElement[2]);
    newArr4.push(checkArrayElement[3]);
    newArr5.push(checkArrayElement[4]);

}


mainArr.push(newArr, newArr2, newArr3, newArr4, newArr5);
console.log(mainArr);


// ------------------------------------------



