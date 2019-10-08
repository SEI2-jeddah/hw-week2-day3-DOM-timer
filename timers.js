let seconds = 0 
let timerId

let  head = document.getElementById("timer")
let startButton = document.getElementById("start").addEventListener("click",updateTime)
let resetButton = document.getElementById("reset").addEventListener("click",reset)
let pauseButton = document.getElementById("pause").addEventListener("click",pause)

function updateTime ()
{
    timerId = setInterval(function (){
     seconds ++
        head.innerText = "Time elapsed: " + seconds
    },1000)
}

function pause (){
    clearInterval(timerId)
}

function reset(){
    head.innerText = "Stop Watch"
    seconds = 0 
    clearInterval(timerId)
}