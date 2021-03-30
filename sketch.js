var backImage,backgr;
var player, player_running;
var ground,ground_img;

var END =0;
var PLAY =1;
var score=0;
var gameState = PLAY;
var bananaImg,banana
function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImg=loadImage("banana.png")
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
   
  bananaGroup=new Group();
}

function draw() { 
  background(0);
 // stroke("green");
  //textSize(15); 
  //fill("red");
  //text("Score:");

 

  if(bananaGroup.isTouching(player)){
    bananaGroup.destroyEach();
    score = score + 2;
  }
  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }
 spawnBananas()
  drawSprites();
  textSize(18);
  fill("yellow");
  text("Score : "+score,720,40);
 
}
function spawnBananas(){
  if(World.frameCount%80 == 0){
    banana = createSprite(600,Math.round(random(120,200)),20,40);
    banana.addImage(bananaImg);
    banana.scale = 0.05;
    banana.velocityX = -8;
    banana.lifetime = 80;
    bananaGroup.add(banana);
  }
}

