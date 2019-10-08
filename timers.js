let $start = document.getElementById("start");
let $pause = document.getElementById("pause");
let $reset = document.getElementById("reset");
let $timer = document.getElementById("timer");

var intervalID;
var seconds = 0;

$start.addEventListener("click", () =>{
	intervalID = setInterval(() =>{
		$timer.innerText = "Time elapsed: "+ seconds++;
}, 1000)})

$pause.addEventListener("click", () =>{
	clearInterval(intervalID);
});

$reset.addEventListener("click", () =>{
	seconds = 0;
	$timer.innerText = "Stop Watch";
	clearInterval(intervalID);
})