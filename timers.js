

var timerId=0;
var intervalID;

let resetBtn = document.getElementById("reset").onclick= function(){
    timerId = 0

    clearInterval(intervalID);
    timer.innerText="Stop Watch";
}


let startBtn = document.getElementById("start").onclick= function(){
   


    intervalID=setInterval(function(){
 
       timer.innerText="Time elapsed:" +timerId
       timerId++
    } ,1000)



 }


 let pauseBtn = document.getElementById("pause").onclick= function(){
    clearInterval(intervalID);
 }

 