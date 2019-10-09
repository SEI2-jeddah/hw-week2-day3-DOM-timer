let $timer = document.querySelector("#timer")
let $reset = document.querySelector("#reset")
let $start = document.querySelector("#start")
let $pause = document.querySelector("#pause")
let timerId=0
let seconds=0

$reset.addEventListener("click", reset)
  $start.addEventListener("click", start)
  $pause.addEventListener("click", pause)

function updateTime() {
  seconds ++
  $timer.innerText= 'Time Elapsed : ' + seconds
}
function start(){
  timerId = setInterval(updateTime,1000)
}
function pause () {
  clearInterval(timerId)
}
function reset () {
  clearInterval(timerId)
  seconds = 0
  $timer.innerHTML = 'Stop Watch'
}
