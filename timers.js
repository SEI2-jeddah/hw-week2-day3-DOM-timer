let reset = document.getElementById('reset')
let start = document.getElementById('start')
let pause = document.getElementById('pause')

reset.addEventListener('click', funreset)
start.addEventListener('click', funstart)
pause.addEventListener('click', funpause)

let seconds = 0
let timerId = document.getElementById('timer')
let update;
function funstart(){
    update = setInterval(function() {
        timerId.innerText = "Time Elapsed " + seconds
             seconds++
     }, 1000);

}

function funreset(){
timerId.innerText = "Stop Watch"
clearInterval(update);
seconds=0;
}

function funpause(){
    clearInterval(update);
}




