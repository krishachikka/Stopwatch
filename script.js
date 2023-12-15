let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCounter = 1;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").innerText = "Start";
  } else {
    timer = setInterval(updateDisplay, 1000);
    document.getElementById("startStop").innerText = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  lapCounter = 1;
  updateDisplay();
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("startStop").innerText = "Start";
  document.getElementById("lapList").innerHTML = ""; }

function recordLap() {
  const lapTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  const lapItem = document.createElement("li");
  lapItem.innerText = `Lap ${lapCounter}: ${lapTime}`;
  document.getElementById("lapList").appendChild(lapItem);
  lapCounter++;
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  const formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  document.getElementById("display").innerText = formattedTime;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
