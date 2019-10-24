var reset=document.getElementById('res');
reset.addEventListener('click',resetClock);
var start=document.getElementById('st');
start.addEventListener('click',startClock);
var pause=document.getElementById('pa');
pause.addEventListener('click',pauseClock);
var timer=document.getElementById('Timer');
var i=0;
let t;
function resetClock(){
i=0;
timer.innerText="Watch is Reseting";
clearInterval(t);
}
function startClock(){
t=setInterval(function(){
timer.innerText="Watch Started "+i
i++;
},1000)
}
function pauseClock(){
    timer.innerText="Watch Paused";
clearInterval(t);
}
function updateTime(){
}