var second = 0
var startTime = 0


let h = document.getElementById("timer");
let rest = document.getElementById("rest") .addEventListener("click", rset time);
let start = document.getElementById("start") .addEventListener("click" start time);
let pause = document.getElementById("pause") .addEventListener("click" pause time);

    
        updateTime: function updateTime(){
            document.getElementById(".start").innerHTML = h+ ":" + m + ":" + s;
            start = setInterval()(function(){ startTime() }, 1000);
        },
        
        else (document.getElementById(".pause").innerHTML = h+ ":" + m + ":" + s;
        pause = setTimeout(function(){ startTime() }, 1000););
      
        eles (document.getElementById(".rest").innerHTML = h+ ":" + m + ":" + s;
        rest = setTimeout(function(){ startTime() }, ! = 1000););

        return false ;