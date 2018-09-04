
// Напишите рекурсивный метод отображающий строку задом на перед.


// ----------------------------------------


// function reverse(str){
//     return str.split("").reverse().join("");
// }

// console.log(reverse("ghj"));


// ----------------------------------------


function reverse(str) {

    if ( str.length <= 1 ) {
        return str;
    }
    
    return reverse(str.substr(1)) + str[0];
}

console.log(reverse("bar"));


// ----------------------------------------


// var arr = [1, 2, 3];

// function reverse_arr(arr) {

//     if (arr.length <= 1) {
//         return arr;
//     }

//     return reverse_arr(arr.slice(1)) + arr[0];
// }

// console.log(reverse_arr(arr));

