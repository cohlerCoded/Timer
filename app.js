const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const instructions = document.querySelector(".instructions");
let seconds;
stopTimer = setInterval(() => {}, 1000);
startBtn.addEventListener("click", () => {
  clearInterval(stopTimer);
  seconds = 0;
  startTimer = setInterval(() => {
    seconds++;
    instructions.innerText = `It has been\n${seconds}\nseconds since you pressed the start button!!!`;
  }, 1000);
});
stopBtn.addEventListener("click", () => {
  clearInterval(startTimer);
  seconds = 0;
  stopTimer = setInterval(() => {
    seconds++;
    instructions.innerText = `It has been\n${seconds}\nseconds since you pressed the stop button!!!`;
  }, 1000);
});
