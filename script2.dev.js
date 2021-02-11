"use strict";

// Initiate eventlisteners
// Keyboard inputs
// Keydown or
// Keyup
document.addEventListener('keydown', function (event) {
  console.log("You have pressed the key: ".concat(event.key));
  handleInput(event.key);
}); // Screen inputs

var smallButtons = document.getElementsByClassName('keypad__smallbutton');

for (index = 0; index < smallButtons.length; index++) {
  document.getElementById(smallButtons[index].id).addEventListener('click', function (event) {
    console.log("You pressed: ".concat(event.target.innerHTML));
    handleInput(event.target.innerHTML);
  });
}

; // Clear displays

document.getElementById('calcDisplay__input1').value = "";
document.getElementById('calcDisplay__input2').value = ""; // Look at me ****************************** START ***********************************
// Debugging aid

var lookingAtWindow = function lookingAtWindow() {
  document.getElementsByClassName('lookAtMe')[0].style.visibility = 'hidden';
  document.getElementsByClassName('relax')[0].style.visibility = 'visible';
};

var ignoringWindow = function ignoringWindow() {
  document.getElementsByClassName('lookAtMe')[0].style.visibility = 'visible';
  document.getElementsByClassName('relax')[0].style.visibility = 'hidden';
};

window.addEventListener('focus', lookingAtWindow);
window.addEventListener('blur', ignoringWindow); // Look at me ******************************  END  ***********************************
// This is called from both keyboard and screen input.
// The argument is passed as a string

var handleInput = function handleInput(rawInput) {
  // What is the input?
  var input2Element = document.getElementById('calcDisplay__input2'); // Is it a number?

  if (isNaN(parseFloat(rawInput))) {
    // Not a number check for other options
    console.log("You pressed ".concat(rawInput, " and its a Nan"));
  } else {
    // It IS a number
    //Need to put it into Line2
    var input2 = input2Element.value;
    input2 = input2 + rawInput;
    input2Element.value = input2;
    console.log("You pressed ".concat(rawInput, " and it's a number"));
  }

  ; // Check number of characters
  // 
};