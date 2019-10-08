let $hour_hand = document.getElementById("hour_hand");
let $minute_hand = document.getElementById("minute_hand");
let $second_hand = document.getElementById("second_hand");
let $timer = document.getElementById("timer");
function startClock() {
    let date = new Date();
    let angle = 360/60;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let counter = 0;
    if(hour > 12) {
        hour -= 12;
      }
    let hourAngle = (360/12)*hour + (360/(12*60))*minute;
    $hour_hand.setAttribute("style",'transform: rotate('+hourAngle+'deg);')
    $minute_hand.setAttribute("style",'transform: rotate('+angle*minute+'deg);')
    $second_hand.setAttribute("style",'transform: rotate('+angle*second+'deg);');
    $timer.innerText = "time elpased "+  setInterval(counter,1000);
  }
  

  function clear() {

    clearInterval(startClock());
      
  }
