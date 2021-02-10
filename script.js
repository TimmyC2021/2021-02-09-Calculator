const toggleRunning = (event) => {
   // console.log("Toggle Running Button clicked");

    const calcCase = document.getElementById('calcCase');
    const runningMagic = document.getElementById('runningMagic');
    const moreKeys = document.getElementById('moreKeys');

    // created a custom data attibute attached to the runningMagic button
    // data-running can be either open or closed
    // closed == normal calculator
    // open == expanded calculator

    if (runningMagic.dataset.running == 'closed') {
        console.log('Was closed, will now open');

        // code to widen case
        

        let widthCase = calcCase.clientWidth;
        let widthNum = parseFloat(widthCase);
        widthNum = widthNum * 1.5;
        widthCase = `${widthNum}px`;
        calcCase.style.width = widthCase;

        // Need to wait for slideout before next instruction


        setTimeout(() => {
            moreKeys.style.visibility = 'visible'
        }, 1000); 


        runningMagic.dataset.running = 'open';
    } else {
        
        console.log('Is open but will now close')

        // code to narrow case

        moreKeys.style.visibility = 'hidden';

        let widthCase = calcCase.clientWidth;
        let widthNum = parseFloat(widthCase);
        widthNum = widthNum / 1.5;
        widthCase = `${widthNum}px`;
        setTimeout(() => {
            calcCase.style.width = widthCase;            
        }, 1000);



        runningMagic.dataset.running = 'closed';
    };

    //console.log("End of call");

}