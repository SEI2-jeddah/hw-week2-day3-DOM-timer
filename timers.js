
reset.addEventListener('click', Wreset)
start.addEventListener('click', Wstart)
pause.addEventListener('click', Wpause)
let mint = 0;
let seconds = 0;
let timer = document.getElementById('timer')
let time;
function Wstart() {
  time = setInterval(function () {

    for (i = 0; i < 60; i++) {
      if (seconds > 60) {
        mint++
        seconds = 0;
        timer.innerText = "Seconds  :" + mint 
        seconds++
      }
      else {
        
        timer.innerText = "Seconds : " + mint 
        seconds++
      }

    }

  }, 1000);

}

function Wreset() {
  timer.innerText = "Stop Watch"
  clearInterval(time);
  mint = 0;


}

function Wpause() {
  clearInterval(time);
}

