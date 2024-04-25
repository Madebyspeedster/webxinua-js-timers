const timeInput = document.querySelector("input");
const list = document.querySelector("ul");
let intervalTime = 2000;

function listenInputChange() {
  timeInput.addEventListener("blur", () => {
    intervalTime = timeInput.value;
  });
}

function logIntervalTime(time) {
  const li = document.createElement("li");
  li.textContent = `Час інтервалу ${time} мс`;
  list.appendChild(li);
}

function runInterval() {
  setTimeout(function recursive() {
    logIntervalTime(intervalTime);
    setTimeout(recursive, intervalTime);
  }, intervalTime);
}

function init() {
  timeInput.value = intervalTime;
  listenInputChange();
  runInterval();
}

init();
