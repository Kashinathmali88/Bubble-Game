var timer = 60;
var score = 0;
var rn = 0;

function createBubble(){
   var clutter ='';

for(var i=1; i<=150;i++)
{
   var rn = Math.floor(Math.random()*10);
   clutter += `<div class="bubble"><h5>${rn}</h5></div>`;
    
}

document.querySelector('.pbtm').innerHTML = clutter;
}

function runTimer(){
   var timerint =setInterval(function(){
      if(timer > 0){
         timer--;
         document.querySelector("#timerval").textContent = timer;
      } else{
         clearInterval(timerint);
         document.querySelector(".pbtm").innerHTML = `<h1>Game Over!!!!</h1>`;
      }
     
   },1000)
}

function newHit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}

function newScore(){
   score += 10;
   document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".pbtm").addEventListener("click",function (details){
   var clickedNUm = (Number(details.target.textContent));
   if(clickedNUm === rn)
   {
      newScore();
      createBubble();
      newHit();
   }
});

newHit();
runTimer();
createBubble();
