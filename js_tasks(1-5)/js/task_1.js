
// Стар, тут 4 реалізації завдання.
// + воно мені здалося не повним, і не до кінця описаним.
//  Певно краще б я тобі пояснив в живу, але вже як є.

var point = ".";
var n = true;

var str = prompt("Give a text for the program!");
// var str = "Hello, my name. is Andrii. I'm lookin for new phone.";

var pontIndex = str.indexOf(point);
var pointCount = 0;

var str_arr = str.split(" "); // For the first two methods
// var str_arr = str.split(""); // For the third and fourth method

var new_str = "";



// The first option


// if (pontIndex != -1) {

//     for (i = 0; i<str_arr.length; i++) {

//         var i_arr = str_arr[i];
    
//         new_str = new_str.concat(i_arr + " ");
    
//         if (n) {
    
//             for(j = 0; j<i_arr.length; j++) {
    
//                 if (i_arr[j] == point) {
//                     console.log(str);
//                     console.log(new_str);
//                     console.log("here is a point");
//                     console.log("----------------------------------------------");
//                     console.log("number of spaces to the point: " + i);
//                     n = false;
//                 } 
        
//             }
    
//         }
    
//     }
    
//     console.log("----------------------------------------------");
//     console.log("total number of spaces: " + (str_arr.length - 1));
//     console.log("----------------------------------------------");

// } else {
//     console.log("There is no point in this string");
// }



// The second option

if (pontIndex != -1) {

    console.log(str);
    console.log("----------------------------------------------");

    for (i = 0; i<str_arr.length; i++) {

        var i_arr = str_arr[i];        
    
        for(j = 0; j<i_arr.length; j++) {
    
            if (i_arr[j] == point) {
                console.log(new_str.concat(i_arr + " "));
                console.log("here is a point");
                console.log("number of spaces to the point: " + i);
                console.log("----------------------------------------------");
            } 
    
        }
    
    }
    
    console.log("total number of spaces: " + (str_arr.length - 1));
    console.log("----------------------------------------------");

} else {
    console.log("There is no point in this string");
}



// The third option

// if (pontIndex != -1) {

//     for (i = 0; i < (pontIndex + 1); i++) {

//         var i_arr = str_arr[i];
//         new_str = new_str.concat(i_arr);
//     }

//     console.log(new_str);
//     console.log("Here is the first point");

// } else {
//     console.log("There is no point in this string");
// }



// The fourth option

// if (pontIndex != -1) {

//     console.log(str);
//     console.log("----------------------------------------------");

//     for (i = 0; i < str_arr.length; i++) {

//         var i_arr = str_arr[i];
        
//         if (str[i] == point) {

//             pointCount = pointCount + 1;

//         }
//     }

//     console.log("There is " + pointCount + " points in this string");

// } else {
//     console.log("There is no point in this string");
// }