const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let grid = 10;
let snake = [{x:150,y:150}];
let dx = grid;
let dy = 0;
let food = randomFood();
let score = 0;

function randomFood(){
  return {
    x: Math.floor(Math.random()*30)*grid,
    y: Math.floor(Math.random()*30)*grid
  };
}

// 方向控制（按钮）
function setDir(x,y){
  dx = x;
  dy = y;
}

// 键盘（电脑也能玩）
document.addEventListener("keydown", e=>{
  if(e.key==="ArrowUp"){dx=0;dy=-grid;}
  if(e.key==="ArrowDown"){dx=0;dy=grid;}
  if(e.key==="ArrowLeft"){dx=-grid;dy=0;}
  if(e.key==="ArrowRight"){dx=grid;dy=0;}
});

// 滑动控制（手机高级版）
let startX, startY;

canvas.addEventListener("touchstart", e=>{
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

canvas.addEventListener("touchend", e=>{
  let endX = e.changedTouches[0].clientX;
  let endY = e.changedTouches[0].clientY;

  let dxSwipe = endX - startX;
  let dySwipe = endY - startY;

  if(Math.abs(dxSwipe) > Math.abs(dySwipe)){
    if(dxSwipe > 0) setDir(grid,0);
    else setDir(-grid,0);
  } else {
    if(dySwipe > 0) setDir(0,grid);
    else setDir(0,-grid);
  }
});

function game(){
  ctx.clearRect(0,0,300,300);

  let head = {x: snake[0].x + dx, y: snake[0].y + dy};

  // 撞墙死亡
  if(head.x<0 || head.x>=300 || head.y<0 || head.y>=300){
    return gameOver();
  }

  // 撞自己死亡
  for(let s of snake){
    if(head.x===s.x && head.y===s.y){
      return gameOver();
    }
  }

  snake.unshift(head);

  // 吃食物
  if(head.x===food.x && head.y===food.y){
    score++;
    document.getElementById("score").innerText = "得分：" + score;
    food = randomFood();
  } else {
    snake.pop();
  }

  // 画蛇
  ctx.fillStyle = "pink";
  snake.forEach(s=>{
    ctx.fillRect(s.x,s.y,grid,grid);
  });

  // 画食物
  ctx.fillStyle = "red";
  ctx.fillRect(food.x,food.y,grid,grid);
}

function gameOver(){
  alert("游戏结束！得分：" + score);
  snake = [{x:150,y:150}];
  dx = grid;
  dy = 0;
  score = 0;
  document.getElementById("score").innerText = "得分：0";
}

setInterval(game,120);
