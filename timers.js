

/*When "Start" is clicked, the text "Stop Watch" should be replaced by "Time elapsed: 0", and the count should increment every second.
When "Reset" is clicked, the text should return to "Stop Watch"
When "Pause" is clicked, the text should say "Time elapsed: 1", but stop incrementing.*/


var  timer;
let se = 0
let head
let sb
 let pb 
 let rb


rb =   document.getElementById("reset").addEventListener("click" , resett);
sb =   document.getElementById("start").addEventListener("click" , startt);
pb =   document.getElementById("pause").addEventListener("click" , pausee);

head=  document.getElementById("timer")





function resett() 
 {
    head.innerText = "Stop Watch"
    se = 0
    clearInterval(timer)

}


function startt() {

    timer = setInterval(function () 
    {
        se += 1
        head.innerText = "Time elapsed: " + se
    }, 1000)
}


function pausee()
 {
    clearInterval(timer)
}