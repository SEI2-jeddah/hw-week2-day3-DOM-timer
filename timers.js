$( "#reset" ).click(Reset());
$( "#start" ).click(Start());
$( "#pause" ).click(Pause());

let seconds = 0;
let timerId;
$h = document.querySelector('h1')

function UpdateText( seconds ) { 
    timerId = setInterval(function () {
        seconds += 1 
    $h.innerText = "Time elapsed: " + seconds
    }, 1000)
}


function UpdateTime() {
  seconds =0;
  UpdateText(seconds);
}

function Reset() {
  console.log("Reset Clicked");
  seconds += 1;
  UpdateText(seconds)

}

function Start() {
  console.log("Start Clicked");
  window.clearInterval(timerId);
  timerId = window.setInterval(UpdateText, 1000);
}

function Pause() {
  console.log("Pause Clicked");
  window.clearInterval(timerId);
  UpdateText(seconds)
}
