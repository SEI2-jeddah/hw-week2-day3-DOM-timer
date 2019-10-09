
var timer = document.getElementById("#timer")
var reset = document.getElementById("#reset");
var start = document.getElementById("#start");
var pause = document.getElementById("#pause");
reset.addEventListener("click", "resetClick");
start.addEventListener("click", "startClick");
pause.addEventListener("click", "pauseClick");
timer.addEventListener("click", "timerClick");

var seconds;
var timerId;

function updateTime(){
    
// imer.innerText = ( "Time Elapsed: " + seconds)
}
function startClick(){
    
    seconds += 1
    timeId = setInterval(function(){
        timer.innerText = "Time Elapsed: " + seconds 
        seconds++;
    }, 1000)
    }
function pauseClick(){
    clearInterval(timeId);
}
function resetClick(){
    seconds = 0
    timer.innerText = "Stop Watch";
    clearInterval(timeId);
  }
