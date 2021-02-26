var airBalloon, airBalloonImg1
var database

function preload() {
  
bg=loadImage("pro-C35+images/Hot Air Ballon-01.png")
airBalloon=loadImage("pro-C35+images/Hot Air Ballon-02.png")
airBalloonImg1=loadAnimation("pro-C35+images/Hot Air Ballon-01.png","pro-C35+images/Hot Air Ballon-02.png","pro-C35+images/Hot Air Ballon-03.png","pro-C35+images/Hot Air Ballon-04.png")

}


function setup() {
  createCanvas(500,500);
  airBalloon = createSprite(250, 250, 50, 50);
  airBalloon.addImage("airBalloonImg",airBalloon)

database=fireBase.database()
}

function draw() {
  background(bg);  
  drawSprites();

  if(keyIsDown(UP_ARROW) && player.index !== null){
    
    airBalloonImg1=addAnimation("movingBalloon",airBalloonImg1)
    airBalloon.velocityY=-4
  }

  if(keyIsDown(DOWN_ARROW) && player.index !== null){
    airBalloonImg1=addAnimation("movingBalloon",airBalloonImg1) 
    airBalloon.velocityY=4
   }

  if(keyIsDown(RIGHT_ARROW) && player.index !== null){
    airBalloonImg1=addAnimation("movingBalloon",airBalloonImg1)  
    airBalloon.velocityX=4
  }


  if(keyIsDown(LEFT_ARROW) && player.index !== null){
    airBalloonImg1=addAnimation("movingBalloon",airBalloonImg1)  
    airBalloon.velocityX=-4
  }


}