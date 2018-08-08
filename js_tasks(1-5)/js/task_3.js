
var user_arr = prompt("Enter an array");
var arr = user_arr.split(" ");
// var arr = [1, 4, 3];

var num = prompt("Enter the number of the array element");


function check_arr() {
    
    for (i = 0; i < user_arr.length; i++) {
        if (isNaN(user_arr[i])) {
            // console.log("Please enter an array of numbers");
            return true;
        }
    }

    return false;
}


function arr_element(num) {
    
    // console.log(arr);

    if(num == 0) {
        num = 1;
    }

    num = num - 1;
    // console.log(num);

    if (check_arr()) {
        console.log("Please enter an array of numbers");
    }else if (isNaN(num)) {
        console.log("Please enter a number");
    }else if (num > arr.length) {
        console.log("This number goes beyond the array. Enter a smaller number or a larger array.");
    }else if(num < 0) {
        console.log("The element of the array can not be less than zero");
    }
     else {

        for (i = 0; i < arr.length; i++) {

            if(i == num) {
                console.log("Entered array");
                console.log(arr);

                arr[i] = Number(arr[i])*0.1 + Number(arr[i]);
                // console.log(typeof arr[i]);
                // console.log(isNaN(arr[i]));
                console.log(arr[i]);

                console.log("Array after increasing the " + (i+1) + " element by 10%");
                console.log(arr);
                
            }
            
        }

    }

}

arr_element(num);




