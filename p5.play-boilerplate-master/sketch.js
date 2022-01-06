var rocket,rocketImg;
var ufo1Img;
var ufo2Img;
var ufo3Img;
var ufo4Img
var bg,bgImg,bgSound,explosionSound,explosionImg,explosion;
var obstacle;
var laser,laserImg;
var obstacleGroup;

function preload() {
  explosionSound=loadSound("explosionSound.wav");
  bgSound=loadSound("backgroundSound.mp3");
  ufo1Img=loadImage("UFO1.png");
  ufo4Img=loadImage("UFO4.png");
  ufo3Img=loadImage("UFO3.png");
  ufo2Img=loadImage("UFO2.png");
  laserImg=loadImage("laser.png");
  bgImg=loadImage("spaceImg.jpg");
  rocketImg=loadImage("Rocket.png");
  explosionImg=loadImage("explosion.png");
}
function setup() {  
  createCanvas(800,600);

  bg=createSprite(500,500,500,500)
  bg.addImage(bgImg);
  bg.scale=1.7;

  rocket=createSprite(500,500);
  rocket.addImage(rocketImg);
  rocket.scale=0.1;

  laser=createSprite(500,1000)
  laser.addImage(laserImg);
  laser.scale=0.07;
  laser.visible=false;

  //obstacleGroup=new Group();
}

function draw() {
 // background("red");
  bg.velocityY=3;
  laser.x=rocket.x;

  if(keyDown("RIGHT_ARROW")){
    rocket.x=rocket.x+6
  }
  if(keyDown("LEFT_ARROW")){
    rocket.x=rocket.x-6
  }
  if(bg.y>700){
    bg.y=height/2;
  }
  if(keyDown("space")){
    laser.visible=true;
    laser.velocityY=-5;
  }

  spawnObstacles();
  drawSprites();
}
function spawnObstacles(){
  if(frameCount%60===0){
  obstacle=createSprite(random(100,600),100,10,40)
  var rand=Math.round(random(1,4))
  switch(rand){
    case 1:obstacle.addImage(ufo1Img);
    break;
    case 2:obstacle.addImage(ufo2Img);
    break;
    case 3:obstacle.addImage(ufo3Img);
    break;
    case 4:obstacle.addImage(ufo4Img);
    break;
    default:break;
  }
 // obstacleGroup.add(ufo1Img,ufo2Img,ufo3Img,ufo4Img);
  obstacle.scale=0.08
  obstacle.lifetime=50;
}}
/*function UFO1() {
  ufo1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  ufo1.addImage(ufo1Img);
  ufo1.velocityY = 3;
  ufo1.lifetime = 150;
  ufo1.scale = 0.1;
}

function UFO2() {
  var ufo2 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  ufo2.addImage(ufo2Img);
  ufo2.velocityY = 3;
  ufo2.lifetime = 150;
  ufo2.scale = 0.1;
}

function UFO3() {
  var ufo3 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  ufo3.addImage(ufo3Img);
  ufo3.velocityY = 3;
  ufo3.lifetime = 150;
  ufo3.scale = 0.1;
}

function UFO4() {
  var ufo4 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  ufo4.addImage(ufo4Img);
  ufo4.velocityY = 3;
  ufo4.lifetime = 150;
  ufo4.scale = 1
}*/