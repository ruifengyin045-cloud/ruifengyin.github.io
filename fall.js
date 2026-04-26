const canvas = document.getElementById("fallGame");
const ctx = canvas.getContext("2d");

let player = {x:180,y:350};
let blocks = [];

document.addEventListener("keydown", e=>{
  if(e.key==="ArrowLeft") player.x-=20;
  if(e.key==="ArrowRight") player.x+=20;
});

function game(){
  ctx.clearRect(0,0,400,400);

  ctx.fillStyle="pink";
  ctx.fillRect(player.x,player.y,20,20);

  if(Math.random()<0.05){
    blocks.push({x:Math.random()*380,y:0});
  }

  blocks.forEach(b=>{
    b.y+=5;
    ctx.fillStyle="red";
    ctx.fillRect(b.x,b.y,20,20);

    if(b.y>350 && Math.abs(b.x-player.x)<20){
      alert("游戏结束！");
      blocks=[];
    }
  });
}

setInterval(game,50);
