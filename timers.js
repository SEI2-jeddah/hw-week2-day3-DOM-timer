
var timer = document.querySelector("#timer")
var controls = document.querySelector(".controls")
var reset = document.querySelector("#reset");
var start = document.querySelector("#start");
var pause = document.querySelector("#pause");

reset.addEventListener("click", "resetClick");
start.addEventListener("click", "startClick");
pause.addEventListener("click", "pauseClick");

var seconds;
var timerId;

function updateTime(){
    
    timer.innerHTML = ( increments + seconds)
}
function startClick(){
    
    seconds += 1
    timeId = setInterval(updatetime, 1000)
    timer.innerHTML = (seconds)
}
function pauseClick(){
    clearInterval(timeId)
}
function resetClick(){
    clearInterval(timeId)
    timer.innerHTML = ("Stop Watch")
}
