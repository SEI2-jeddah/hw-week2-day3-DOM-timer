let reset = document.getElementById('reset')
let start = document.getElementById('start')
let pause = document.getElementById('pause')
let display = document.getElementById('timer')
let timerId = 0
let sec = 0


reset.addEventListener('click', resetT)
start.addEventListener('click', startT)
pause.addEventListener('click', pauseT)

function startT() {
    timerId = setInterval(update, 1000)
    function update() {
        sec++
        display.innerHTML = 'Time Elapsed: ' + sec
    }

}

function pauseT() {
    clearInterval(timerId)
}

function resetT() {
    clearInterval(timerId)
    sec = 0
    display.innerHTML = 'Stop Watch'
}

