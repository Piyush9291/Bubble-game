var timer = 5;

function getnewhit(){
      var rn = Math.floor(Math.random( )*10)
      document.querySelector("#hitval").textContent = rn;
}


function makeBubble() {
    var clutter = ""

    for (var i = 1; i <= 178; i++) {
        let rdom = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rdom}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

   function runtimer(){
      let settime = setInterval(function(){
         if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
         }
         else{
            clearInterval(settime);
         }
       },1000)
   }
runtimer();
makeBubble()
getnewhit()

