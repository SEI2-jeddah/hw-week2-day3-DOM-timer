var reset=document.getElementById('reset');
reset.addEventListener('click',resetClock);
var start=document.getElementById('start');
start.addEventListener('click',startClock);
var pause=document.getElementById('pause');
pause.addEventListener('click',pauseClock);
var timer=document.getElementById('timer');
var i=0;
let t;
function resetClock(){
i=0;
timer.innerText="Stop Watch";
clearInterval(t);
}
function startClock(){
t=setInterval(function(){
timer.innerText="Time Elapsed: "+i
i++;
},1000)
}
function pauseClock(){
clearInterval(t);
}
function updateTime(){
}
