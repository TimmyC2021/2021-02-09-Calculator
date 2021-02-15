"use strict";

// Initiate eventlisteners
// Keyboard inputs
// Keydown or
// Keyup
document.addEventListener("keydown", function (event) {
  console.log("You have pressed the key: ".concat(event.key));
  handleInput(event.key);
}); // Screen inputs

var smallButtons = document.getElementsByClassName("keypad__smallbutton");

for (index = 0; index < smallButtons.length; index++) {
  document.getElementById(smallButtons[index].id).addEventListener("click", function (event) {
    console.log("You pressed: ".concat(event.target.innerHTML));
    handleInput(event.target.innerHTML);
  });
} // Clear displays


document.getElementById("calcDisplay__input1").value = "";
document.getElementById("calcDisplay__input2").value = ""; // Functions

var calculation = function calculation(number1, number2, operator) {
  var result = 0;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;

    case '-':
      result = number1 - number2;
      break;

    case '/':
      result = number1 / number2;
      break;

    case 'x':
      result = number1 * number2;
      break;

    default:
      result = 0;
      break;
  }

  return result.toFixed(4);
}; // Look at me ****************************** START ***********************************
// Debugging aid


var lookingAtWindow = function lookingAtWindow() {
  document.getElementsByClassName("lookAtMe")[0].style.visibility = "hidden";
  document.getElementsByClassName("relax")[0].style.visibility = "visible";
};

var ignoringWindow = function ignoringWindow() {
  document.getElementsByClassName("lookAtMe")[0].style.visibility = "visible";
  document.getElementsByClassName("relax")[0].style.visibility = "hidden";
};

window.addEventListener("focus", lookingAtWindow);
window.addEventListener("blur", ignoringWindow); // Look at me ******************************  END  ***********************************
// This is called from both keyboard and screen input.
// The argument is passed as a string

var handleInput = function handleInput(rawInput) {
  // What is the input?
  var input2Element = document.getElementById("calcDisplay__input2");
  var input1Element = document.getElementById("calcDisplay__input1"); // Is it a number or operator (/x-+ +-)?

  if (!isNaN(parseFloat(rawInput))) {
    // It IS a number
    //Need to put it into Line2
    var input2 = input2Element.value;
    input2 = input2 + rawInput;
    input2Element.value = input2;
    console.log("You pressed ".concat(rawInput, " and it's a number"));
  } else if (rawInput == "-" || rawInput == "+" || rawInput == "+-" || rawInput == "/" || rawInput == "x") {
    // operator
    // if input1 is blank or last character of input1 is = then 
    var _input = input2Element.value;
    var input1 = input1Element.value;

    if (input1.length > 0) {
      var input1number = input1.slice(0, input1.length - 1);
      var input1operator = input1.slice(input1.length - 1);
      var result = calculation(parseFloat(input1number), parseFloat(_input), input1operator);
      input1Element.value = result + rawInput;
      input2Element.value = "";
      console.log("You pressed ".concat(rawInput, " and its an operator"));
    } else {
      // No input 1 yet so...
      input1Element.value = _input + rawInput;
      input2Element.value = "";
    }
  } else {
    // Not a number check for other options
    console.log("You pressed ".concat(rawInput, " and its a Nan")); // Check number of characters
    //
  }
};