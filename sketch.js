
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime = 0;

function preload(){
  
  
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}



function setup() {
  
  monkey = createSprite(80,315);
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  

}


function draw() {
  background("white");
 
  ground.x = ground.width/2; 
  
  if(keyDown("space")&& monkey.y >= 290) {
     monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  bananas();
  obstacles();
  
 if(monkey.isTouching(bananaGroup)) {
   bananaGroup.destroyEach();
 }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50);
  
  drawSprites();
}




function bananas() {
  
 if (frameCount % 80 === 0) {
    banana = createSprite(600,160);
    banana.y = Math.round(random(290,325));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 150;
    bananaGroup.add(banana);
 } 
}


function obstacles() {
  
 if(frameCount % 300 === 0)  {
   obstacle = createSprite(400,322,20,20)
   obstacle.addImage(obstaceImage);
   obstacle.velocityX = -5;
   obstacle.lifetime = 150;
   obstacle.scale = 0.13
   obstacleGroup.add(obstacle);
 }
}




