// // create selector for the timer buttons
// let resetButton = document.getElementById("#reset")

// let pauseButton = document.getElementById("#pause")

// let timerId;
// let timerId = 1
// let seconds = 0

// function incerement() {
//    timerId = setInterval(start, 1000)
// }

// function startTimer(){
//     let startButton = document.getElementById("start");


// }



// // create click handlers for the timer buttons
// // resetButton = 
// // startButton = updateTime();
// // pauseButton = 

// // create variables for seconds and timerId


// // create incremental function for seconds counter & insert the value to <h1 id="timer"> 
// // function updateTime() {
 
// //      document.getElementById("timer").innerHTML = "Time elapsed: " 
// // } 
// // updateTime()


// // // using setInterval() function to update timer frequently
// // setInterval(function () {
// //     seconds++
// //     document.getElementById("timer").innerHTML = "Time elapsed: " + seconds

// //     },100);
// // function increment(){
// // let seconds = 0
// // let timer = 1
// // let seconds = timer + seconds
// // document.getElementById("timer").innerHTML = seconds
// // }increment()










// ////////////////////// other solution//////////////////////
// // var time = 0;
// // var run = 0;

// // function start() {
// //   if (run == 0) {
// //       run = 1;
// //       increment();
// //       document.getElementById("#start").innerHTML = "bbb"
// //   }  else {
// //       run = 0;
// //       document.getElementById("#stop").innerHTML = "Stop"
// //   }
// // }
// // function reset() {
// //       run = 0;
// //       document.getElementById("#reset").innerHTML = "Reset"
// //   }

// //   function increment() {
      
// //   }

var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    pause = document.getElementById('pause'),
    reset = document.getElementById('reset'),
    seconds = 0, 
    timerId;

function add() {
    seconds++;
    h1.textContent =  "Time elpapsed " + seconds;
    incerement();
}

function incerement() {
    timerId = setTimeout(add, 1000);
}
incerement();


/* Start button */
start.onclick = incerement;

/* Stop button */
pause.onclick = function() {
    clearTimeout(timerId);
}

/* Reset button */
reset.onclick = function() {
    h1.textContent = "Stop Watch";
    clearTimeout(timerId);
    seconds = 0;
    
}