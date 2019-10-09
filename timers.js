
let $h1=document.getElementById("timer");
let $h2=document.getElementById("increment");
let $start1=document.getElementById("start");

console.log($h1);
let second=0;

 function changeText(){
   
    $h1.innerHTML = "Time elapsed:";
    
    
    let time= setInterval(updateTime(),1000)}

   function Reset(){
   
      $h1.innerHTML = "Stop Watch";
      $h2.innerHTML = '';
   }
   
   function updateTime(){
      // let date=new Date();
      // let sec= date.getSeconds();
     
      for(let i=0;i<3;i++)
      {
         second+=1
      $h2.innerHTML = second;}
   }