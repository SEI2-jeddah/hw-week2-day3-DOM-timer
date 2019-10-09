// let $reset = document.querySelector("#reset")
// let $start = document.querySelector("#start")
// let $pause = document.querySelector("#pause")
// let $timer = document.querySelector("#timer")

let $reset = document.getElementById("reset").addEventListener("click",reset)
let $start = document.getElementById("start").addEventListener("click",start)
let $pause = document.getElementById("pause").addEventListener("click",pause)
let $timer = document.getElementById("timer")
let seconds = 0
let timerId = 0
let bool = false


function updateTime() {
    seconds += 1;
    $timer.innerText= 'Time elapsed: ' + seconds
}

 function start () {
   if (bool === false) {
        timerId = setInterval(function () {
            seconds += 1;
            $timer.innerText= 'Time elapsed: ' + seconds
        }, 1000);
        bool = true;
    }
}

function reset () {
    $timer.innerText = 'Stop Watch ';
    seconds = 0
}

function pause () {
    clearInterval(timerId);
    bool = false;
}

//....

// $start.setAttribute("onclick", function start () {
//     $timer.textContent='Time elapsed: ' + seconds;
//     if (bool === false) {
//         timerId = setInterval(updateTime(), 1000);
//         bool = true;
//     }
// })

// $reset.setAttribute("onclick", function reset () {
//     $timer.textContent='Time elapsed: ' + seconds;
//     if (bool === false) {
//         timerId = setInterval(updateTime(), 1000);
//         bool = true;
//     }
// })

// $pause.setAttribute("onclick", function pause () {
//     clearInterval(timerId);
//     bool = false;
// })

/////..... 

// $start.onclick = (function () {
//     $timer.textContent='Time elapsed: ' + seconds;
//     if (bool === false) {
//         timerId = setInterval(updateTime(), 1000);
//         bool = true;
//     }
// })()

// $reset.onclick = (function () {
//     seconds = 0;
//     clearInterval(timerId);
//     bool = false;
//     $timer.textContent='Stop Watch'
// }
// )

// $pause.onclick = (function () {
//     clearInterval(timerId);
//     bool = false;
// } )()






