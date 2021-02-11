
// Initiate eventlisteners

// Keyboard inputs
    // Keydown or
    // Keyup

document.addEventListener('keydown', (event) => {
    console.log(`You have pressed the key: ${event.key}`);
    handleInput(event.key);
});

// Screen inputs


const smallButtons = document.getElementsByClassName('keypad__smallbutton');
for (index = 0; index < smallButtons.length; index++) {
     document.getElementById(smallButtons[index].id).addEventListener('click', (event) => {
         console.log(`You pressed: ${event.target.innerHTML}`)
         handleInput(event.target.innerHTML);
    })
};

// Clear displays
document.getElementById('calcDisplay__input1').value = "";
document.getElementById('calcDisplay__input2').value = "";

// Look at me ****************************** START ***********************************
    // Debugging aid
    const lookingAtWindow = () => {
        document.getElementsByClassName('lookAtMe')[0].style.visibility = 'hidden';
        document.getElementsByClassName('relax')[0].style.visibility = 'visible';
    };
    const ignoringWindow = () => {
        document.getElementsByClassName('lookAtMe')[0].style.visibility = 'visible';
        document.getElementsByClassName('relax')[0].style.visibility = 'hidden';   
    };


    window.addEventListener('focus', lookingAtWindow);
    window.addEventListener('blur', ignoringWindow);

    // Look at me ******************************  END  ***********************************


// This is called from both keyboard and screen input.
// The argument is passed as a string

const handleInput = (rawInput) => {
    // What is the input?
    let input2Element = document.getElementById('calcDisplay__input2')

    // Is it a number?
    if (isNaN(parseFloat(rawInput))) {
        // Not a number check for other options
        console.log(`You pressed ${rawInput} and its a Nan` );


    } else {
        // It IS a number
        //Need to put it into Line2
        let input2 = input2Element.value;
        input2 = input2 + rawInput;
        input2Element.value = input2;

        console.log(`You pressed ${rawInput} and it's a number`);
    };

    // Check number of characters
    // 
}