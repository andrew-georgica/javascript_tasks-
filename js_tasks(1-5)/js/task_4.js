
var str = prompt("Please enter a string").toLowerCase();
var word = prompt("Please enter a censorship word").toLowerCase();

function censore() {

    var arr = str.split(" ");
    var censore = "censore";

    if (arr.indexOf(word) < 0) {
        console.log("There is no censorship in this line");
    }

    for (i = 0; i <= arr.length; i++) {

        if (arr[i] == word) {
            arr[i] = censore;
            console.log(arr.join(" "));
        } 
    }

}

censore(str);