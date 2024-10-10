var timer = 3;
var score = 0;
var rndnum = 0;



increasescore = () =>{
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}



 hitscore = () =>{
   rndnum = Math.floor(Math.random( ) * 10);
   document.querySelector("#hitval").textContent = rndnum;
 }

function makeBubble(){
var clutter = " ";

 for(let i=1; i<=170; i++){
   const rdom = Math.floor(Math.random( )*10)
   clutter += `<div class="bubble">${rdom}</div>`
 }

 document.querySelector("#pbtm").innerHTML = clutter;
}


 runtimer = () => {
  let set = setInterval(() => {
      if(timer > 0){
         timer -- ;
         document.querySelector("#timerval").textContent = timer
      }
      else{
         clearInterval(set);
         document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
      }
   },1000)
 }

 document.querySelector("#pbtm").addEventListener("click" , (ele) =>{
   let clicknum = Number(ele.target.textContent);
     if(clicknum === rndnum){
       increasescore();
       makeBubble();
      hitscore();
     }
})

makeBubble();
runtimer();
hitscore();
