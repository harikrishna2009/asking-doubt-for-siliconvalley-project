var boy,boyImage,boy_Running,boy_jump,boy_die,boy_happy
var bg1,bg2,bg3,bg4
var ground1,ground1IMg,ground2,ground3,ground4
var startSound
var playbutton,playImage
var gameState = "START"


function preload(){
  boyImage = loadImage("pictures/boy1.png");
  boy_Running = loadAnimation("pictures/boy1.png","pictures/boy2.png","pictures/boy3.png","pictures/boy4.png","pictures/boy5.png","pictures/boy6.png","pictures/boy7.png","pictures/boy8.png")
  bg1 = loadImage("pictures/coronalevel1bgIMG.jpg")
  ground1IMg = loadImage("pictures/ground4.png")
  startSound = loadSound("sounds/gameStartSound.wav")
  playImage = loadImage("pictures/playbutton.png")
}
function setup() {
  createCanvas(1230,567);
  boy = createSprite(100,410);
  boy.addAnimation("boy",boyImage);
  boy.scale = 1.4

  ground1 = createSprite(615,580)
  ground1.velocityX = -1
  ground1.addImage("ground1",ground1IMg)
  ground1.scale = 5

  playbutton = createSprite(1130,367)
  playbutton.addImage(playImage)
  playbutton.scale = 0.5
  
}

function draw() {
  background(bg1);  
  if(gameState === "Start"){
    startSound.play()
    fill(0)
    textSize(40)
    text("Lets Beat corona",565,200)
    if(mousePressedOver(playbutton)){
      console.log("stop the sound")
      startSound.stop()
    }
  }
  if(ground1.x < 0){
    ground1.x = ground1.width/2
  }
 
  drawSprites();
}