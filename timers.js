
document.getElementById("start").addEventListener("click", myFunction);
function myFunction() {
document.getElementById("timer").innerHTML = "Time elapsed!";
}

document.getElementById("reset").addEventListener("click", myFunction2);
function myFunction2() {
document.getElementById("timer").innerHTML = "Stop Watch";
}
var watch = (function(){
  var time = document.getElementById("time");
  var pause = document.getElementById("pause");
  var reset = document.getElementById("reset");
  var time1 = "0"
  var seconds = 0;
  var t;

  time.textContent = time1;

  function buildTimer () {
    seconds++;
 
    time.textContent =  (seconds < 10 ? " " + seconds.toString(): seconds);
  }
  function stopTimer () {
    pause.addEventListener("click", function(){
      clearTimeout(t);
    })
  }
  function startTimer () {
    start.addEventListener("click", function(){
      clearTimeout(t);
      t = setInterval(buildTimer,1000);
    });
  }
  function resetTimer () {
    reset.addEventListener("click", function(){
      clearTimeout(t);
      time.textContent = time1;
      seconds = 0;
    });
  }
  return {
    start: startTimer(),
    pause: stopTimer(),
    reset: resetTimer()
  };
})()