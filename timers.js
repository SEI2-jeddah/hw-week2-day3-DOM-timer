

let seconds = 0
var timerId;

let heading = document.getElementById("timer")

let startBtn = document.getElementById("start").addEventListener("click", updateTime);

let pauseBtn = document.getElementById("pause").addEventListener("click", pauseTime);

let resetBtn = document.getElementById("reset").addEventListener("click", resetTime);


function updateTime() {
    timerId = setInterval(function () {
        seconds += 1
        heading.innerText = "Time elapsed: " + seconds
    }, 1000)
}

function pauseTime() {
    clearInterval(timerId)
}

function resetTime() {
    heading.innerText = "Stop Watch"
    seconds = 0
    clearInterval(timerId)
}