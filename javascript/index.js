const Chronometer = require("./chronometer");

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
printMinutes();
printSeconds()
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes)
  minDecElement.textContent = minutes[0]
  minUniElement.textContent = minutes[1]
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove("start");
  btnLeftElement.classList.add("stop");
  // chronometer.start();
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove("stop");
  btnLeftElement.classList.add("start");
  chronometer.stop();
}

function setResetBtn() {
  // ... your code goes here

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
if (btnLeftElement.classList.contains('start'))setStopBtn();
else if (btnLeftElement.classList.contains('stop'))setStartBtn();
})

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('reset'))setResetBtn();
  else if (btnRightElement.classList.contains('split'))setSplitBtn();
});
  
// After adding buttons properties, only the
// color of the start button changed from green to red.
// then after adding some codes, nothing 
// worked anymore !!