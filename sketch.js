var bgImg
var iss,issImg
var spacecraft,craftImg1,craftImg2,craftImg3,craftImg4
var spaceAnimation
var hasDocked
var random1, random2,random3

function setup() {
  createCanvas(800,400);
  
  iss = createSprite(400, 200, 50, 50)
  iss.addImage(issImg)

  hasDocked = false

  random1 = createSprite(330, 230, 1, 1)
  random1.debug-49
  spacecraft = createSprite(30,300,30,30)
  spacecraft.addAnimation("flying",craftImg1)
  spacecraft.scale=0.2

}

function preload(){
  bgImg = loadImage("spacebg.jpg")
  issImg = loadImage("iss.png")
  craftImg1 = loadImage("spacecraft1.png")
  craftImg2 = loadImage("spacecraft2.png")
  craftImg3 = loadImage("spacecraft3.png")
  craftImg4 = loadImage("spacecraft4.png")

}

function draw() {
  background(bgImg);  
  // background("white");  
  
  spacecraft.addAnimation("flying1",craftImg1)
  spacecraft.addAnimation("flying2",craftImg2)
  spacecraft.addAnimation("flying3",craftImg3)
  spacecraft.addAnimation("flying4",craftImg4)

  random3 = createSprite(240,230,50,5)
  spacecraft.bounceOff(random3)
  random3.visible = false
  random3.debug = true

  
  if(keyIsDown(UP_ARROW)){
    spacecraft.velocityY = -3
    spacecraft.changeAnimation("flying2",craftImg2)
  }else if(keyIsDown(DOWN_ARROW)){
    spacecraft.velocityY = 3
    spacecraft.changeAnimation("flying1",craftImg1)
  }else if(keyIsDown(LEFT_ARROW)){
    spacecraft.velocityX = -3
    spacecraft.changeAnimation("flying3",craftImg3)
  }else if(keyIsDown(RIGHT_ARROW)){
    spacecraft.velocityX = 3
    spacecraft.changeAnimation("flying4",craftImg4)
  }else{
    spacecraft.velocityX = 0
    spacecraft.velocityY = 0
    spacecraft.changeAnimation("flying1",craftImg1)
    
  }

  if(spacecraft.isTouching(random1)){
    hasDocked = true

    if(hasDocked=true){
      fill("green")
      textSize(20)
      text("Docking Successful",600,200)
      
      spacecraft.velocityX=0
      spacecraft.velocityY=0

      random2 = createSprite(315,365,30,30)
      random2.visible=0
      spacecraft.bounceOff(random2)

    }
  }
  // console.log(spacecraft.y)
   

  drawSprites();
}