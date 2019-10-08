var sec = -1
var starting = 0
function start(){
   starting = 1  
}
setInterval(function(){
   let $digitalClock = document.querySelector('#timer') 
    if(starting){
       sec++ 
   $digitalClock.innerText = 'Time elapsed: '+sec
    } 
   }, 1000)
function reset(){
    location.reload(true);
}
function pause(){
 starting = 0
}