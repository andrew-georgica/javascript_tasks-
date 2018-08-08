
var sound_ft = 1100;
var sound_meters = sound_ft*0.3048;
var sound_kilometers = sound_meters/1000;
var interval = prompt("Please enter the number of seconds");

if(isNaN(interval)) {
    console.log("Please enter the number of seconds only by numbers");
} else {
    console.log("The distance to the lightning strike " + sound_ft*interval + " in feet");
    console.log("The distance to the lightning strike " + interval*sound_meters + " in meters");
    console.log("The distance to the lightning strike " + interval*sound_kilometers + " in kilometers");
}

