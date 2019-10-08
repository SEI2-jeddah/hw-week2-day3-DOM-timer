document.getElementById("start").addEventListener("click", timeFunc);
 function timeFunc() {
 document.getElementById("timer").innerHTML = "Time elapsed!";
 }

 document.getElementById("pause").addEventListener("click", timeFunc1);
 function timeFunc1() {
 document.getElementById("timer").innerHTML = "Time Paused!";
 }

 document.getElementById("reset").addEventListener("click", timeFunc2);
 function timeFunc2() {
 document.getElementById("timer").innerHTML = "Stop Watch";
 }
   setInterval(function(){
    let $digitalClock = document.querySelector(".digital_clock")
    
    let date = new Date()
    let hours = (date.getHours() - 12 < 12) ? date.getHours() - 12 : date.getHours()
    let minutes = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes()
    let seconds = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds()
    let AmOrPm = date.getHours() >= 12 ? 'pm' : 'am';
    
    // var hours = date.getHours() ; 
    

    
    $digitalClock.innerText = hours + ":" + minutes + ":" + seconds + " " + AmOrPm
    
    },1000)