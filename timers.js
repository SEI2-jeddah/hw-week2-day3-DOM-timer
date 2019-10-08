document.getElementById("reset").addEventListener("click", restartTime);
document.getElementById("start").addEventListener("click", updateTime);
document.getElementById("pause").addEventListener("click", pauseTime);

var seconds = 0,
  timerId,
  started = false;
var time = document.querySelector("h1");

function updateTime() {
  timerId = setInterval(function() {
    seconds += 1;
    time.innerText = "Time elapsed: " + seconds;
  }, 1000);
}

function pauseTime() {
  clearInterval(timerId);
}

function restartTime() {
  seconds = 0;
  time.innerHTML = "Stop Watch";
  clearInterval(timerId);
}
