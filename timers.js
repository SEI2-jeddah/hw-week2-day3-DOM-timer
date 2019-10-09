let secondsCounter = 0
let minsCounter = 0
let hoursCounter = 0
let printSeconds = ""
let printMins = ""
let printHours = ""
let flagToStop ="pause"
var flag = null

 function Timer(){

    secondsCounter ++
    
    if(secondsCounter < 10){
        printSeconds = "0" + secondsCounter
    }else{
        printSeconds = secondsCounter
    }
    if (minsCounter < 10){
        printMins = "0" + minsCounter 
    }else{
        printMins = secondsCounter
    }
    if (hoursCounter < 10){
        printHours = "0" +  hoursCounter 
    }else{
        printHours = printHours
    }
         
    if(secondsCounter === 60){
        secondsCounter = 0
        minsCounter++;
        if(minsCounter === 60){
            hoursCounter++
        }
    }

    document.querySelector(".secode").innerHTML =printHours+":"+printMins+":"+printSeconds;
    var target = event.target.textContent
    if(target === "Start" || target === "Pause"){
        if(flagToStop === "pause"){
            document.getElementById('timer').innerHTML = "Time elapsed"
            flag = setInterval(Timer,1000)
            flagToStop = "start"
        }else{
            clearInterval(flag)
            document.getElementById('timer').innerHTML = "Stop Watch"
            document.querySelector(".secode").innerHTML = document.querySelector(".secode").textContent
            flagToStop = "pause"
        }
    }else{
        secondsCounter = 0
        minsCounter = 0
        hoursCounter = 0
        document.querySelector(".secode").innerHTML = "00:00:00"
    }   
}



