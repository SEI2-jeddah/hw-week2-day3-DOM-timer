
var timer = document.querySelector("#timer")
var controls = document.querySelector(".controls")
var reset = document.querySelector("#reset");
var start = document.querySelector("#start");
var pause = document.querySelector("#pause");

reset.addEventListener("click", "reset");
start.addEventListener("click", "start");
pause.addEventListener("click", "pause");

var seconds;
var timerId;

function updateTime(){
    timer.innerHTML = ("Time Elapsed: " + seconds)
}
function start(){
    timer.innerHTML = ("Time Elapsed: " + seconds)
    timeId = setInterval(updatetime, 1000)
}
function pause(){
    clearInterval(timeId)
}
function reset(){
    clearInterval(timeId)
    timer.innerHTML = ("Stop Watch")
}
