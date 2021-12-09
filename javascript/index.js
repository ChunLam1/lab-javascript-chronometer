// const Chronometer = require("./chronometer");

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
printSeconds();
// setInterval(() => {
  
// }, interval);
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  const secondes = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
 secDecElement.textContent = secondes[0];
 secUniElement.textContent = secondes[1];
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
  btnLeftElement.textContent="STOP";
  chronometer.start(printTime);
}

function setSplitBtn() {
  // ... your code goes here
btnRightElement.classList.remove("reset");
btnRightElement.classList.add("split");
btnRightElement.textContent ="SPLIT";
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.classList.remove("stop");
  btnLeftElement.classList.add("start");
  btnLeftElement.textContent="START";
  chronometer.stop();
}

function setResetBtn() {
  // ... your code goes here
btnRightElement.classList.remove("split");
btnRightElement.classList.add("reset");
btnRightElement.textContent ="RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
if (btnLeftElement.classList.contains('start')){
  setStopBtn();
  setSplitBtn();
} else {
  setStartBtn();
  setResetBtn();
}
})

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  // if (btnRightElement.classList.contains('reset'))
  // else if (btnRightElement.classList.contains('split'))
});
