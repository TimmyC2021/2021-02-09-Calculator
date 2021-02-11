"use strict";

var toggleRunning = function toggleRunning(event) {
  // console.log("Toggle Running Button clicked");
  var calcCase = document.getElementById('calcCase');
  var runningMagic = document.getElementById('runningMagic');
  var moreKeys = document.getElementById('moreKeys'); // created a custom data attibute attached to the runningMagic button
  // data-running can be either open or closed
  // closed == normal calculator
  // open == expanded calculator

  if (runningMagic.dataset.running == 'closed') {
    console.log('Was closed, will now open'); // code to widen case

    var widthCase = calcCase.clientWidth;
    var widthNum = parseFloat(widthCase);
    widthNum = widthNum * 1.5;
    widthCase = "".concat(widthNum, "px");
    calcCase.style.width = widthCase; // Need to wait for slideout before next instruction

    setTimeout(function () {
      moreKeys.style.visibility = 'visible';
    }, 1000);
    runningMagic.dataset.running = 'open';
  } else {
    console.log('Is open but will now close'); // code to narrow case

    moreKeys.style.visibility = 'hidden';
    var _widthCase = calcCase.clientWidth;

    var _widthNum = parseFloat(_widthCase);

    _widthNum = _widthNum / 1.5;
    _widthCase = "".concat(_widthNum, "px");
    setTimeout(function () {
      calcCase.style.width = _widthCase;
    }, 1000);
    runningMagic.dataset.running = 'closed';
  }

  ;
};