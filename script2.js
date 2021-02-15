// Initiate eventlisteners

// Keyboard inputs
// Keydown or
// Keyup

document.addEventListener("keydown", (event) => {
  console.log(`You have pressed the key: ${event.key}`);
  handleInput(event.key);
});

// Screen inputs

const smallButtons = document.getElementsByClassName("keypad__smallbutton");
for (index = 0; index < smallButtons.length; index++) {
  document
    .getElementById(smallButtons[index].id)
    .addEventListener("click", (event) => {
      console.log(`You pressed: ${event.target.innerHTML}`);
      handleInput(event.target.innerHTML);
    });
}

// Clear displays
document.getElementById("calcDisplay__input1").value = "";
document.getElementById("calcDisplay__input2").value = "";

// Functions
const calculation = (number1, number2, operator) => {
  let result=0
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
}

// Look at me ****************************** START ***********************************
// Debugging aid
const lookingAtWindow = () => {
  document.getElementsByClassName("lookAtMe")[0].style.visibility = "hidden";
  document.getElementsByClassName("relax")[0].style.visibility = "visible";
};
const ignoringWindow = () => {
  document.getElementsByClassName("lookAtMe")[0].style.visibility = "visible";
  document.getElementsByClassName("relax")[0].style.visibility = "hidden";
};

window.addEventListener("focus", lookingAtWindow);
window.addEventListener("blur", ignoringWindow);

// Look at me ******************************  END  ***********************************

// This is called from both keyboard and screen input.
// The argument is passed as a string

const handleInput = (rawInput) => {
  // What is the input?
  let input2Element = document.getElementById("calcDisplay__input2");
  let input1Element = document.getElementById("calcDisplay__input1");

  // Is it a number or operator (/x-+ +-)?
  if (
    !isNaN(parseFloat(rawInput))
    ) {
      // It IS a number
      //Need to put it into Line2
      let input2 = input2Element.value;
      input2 = input2 + rawInput;
      input2Element.value = input2;
  
      console.log(`You pressed ${rawInput} and it's a number`);
      
    
} else if (
      rawInput == "-" ||
      rawInput == "+" ||
      rawInput == "+-" ||
      rawInput == "/" ||
      rawInput == "x"
      ) {
      // operator
      // if input1 is blank or last character of input1 is = then 
      let input2 = input2Element.value;
      let input1 = input1Element.value;
      if (input1.length > 0) {
        let input1number = input1.slice(0,input1.length-1);
        let input1operator = input1.slice(input1.length-1);
        const result = calculation(parseFloat(input1number), parseFloat(input2), input1operator);
        input1Element.value = result + rawInput;
        input2Element.value = "";

        console.log(`You pressed ${rawInput} and its an operator`);
      } else {
        // No input 1 yet so...
        input1Element.value = input2 + rawInput;
        input2Element.value = "";

      }

} else {
      // Not a number check for other options
      console.log(`You pressed ${rawInput} and its a Nan`);


  // Check number of characters
  //
}}