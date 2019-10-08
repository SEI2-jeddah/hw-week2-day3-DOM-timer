reset = document.getElementById("reset");
start = document.getElementById("start");
pause = document.getElementById("pause");

timer = document.getElementById("timer");
let seconds = 0;
let timerId = "";

reset.onclick = function(){
    clearInterval(timerId);
    timer.innerHTML = "Stop Watch"
    seconds = 0;
};


start.onclick = function updatetime(){
     timerId = setInterval(function(){
        seconds++;
        timer.innerHTML = "Time elapsed: " + seconds;
    },1000);
    
};

pause.onclick = function(){
    clearInterval(timerId);
};



