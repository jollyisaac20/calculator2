// function deleteLastCharacter() {
//     var display = document.getElementById("display")
//     display.value = display.value.slice(0,1);
// }

function addDigit(digit){
    var display = document.getElementById("display");
    display.value += digit;
}
function clearDisplay(){
    var display = document.getElementById("display");
    display.value = '';
}

function deleteLastCharacter(){
    var display = document.getElementById("display");
    display.value = display.value.slice(0,-1);
}

function calculate(){
    var display = document.getElementById("display");
    display.value = eval(display.value);
}