
var timer = document.getElementById('timer');
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');
 
start.addEventListener("click",startPlease );
pause.addEventListener("click",pausePlease );
reset.addEventListener("click",resetPlease );

var clockID;
var seconds = 0;

function startPlease(){
    clockID= setInterval(function(){
        seconds = seconds + 1  ;
    timer.innerText = "Time elapsed: " + seconds;
    
}, 1000);
}


function pausePlease(){
    clearInterval(clockID)
}

function resetPlease(){
    seconds = 0;
    timer.innerText = "Stop Watch";
    clearInterval(clockID)
}

