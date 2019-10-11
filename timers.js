var start = document.getElementById("start");
var timer = document.getElementById("timer");
var reset = document.getElementById("reset");
var pause = document.getElementById("pause");

var seconds = 0;
var timerID;

start.addEventListener("press", function() {
  timer.textContent = "Time Elapsed: " + seconds;
  timerID = setInterval(function() {
    seconds ++;
    timer.textContent = "Time Elapsed: " + seconds;
  }, 1000);

});
reset.addEventListener("press", function() {
  clearInterval(timerID);
  timer.textContent = "Stop Watch";
  seconds = 0;
});

pause.addEventListener("press", function() {
  clearInterval(timerID);
})
