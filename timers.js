let $timer = document.getElementById("timer");
let interval = null; // to use clear interval
let counter = 0;
let startCounter = function() {
    let counter = 0;
    timeElpased = setInterval(counter,1000);
    $timer.innerText = "Time Elpased "+  timeElpased;
  }
  function start() {
    interval = setInterval(startCounter,1000) 
  }
  function clearInt() {
    clearInterval(interval); 
  }
  function resetInt()
  {
    location.reload();
  }