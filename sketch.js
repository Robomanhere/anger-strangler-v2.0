var bgimg, bg;
var button;
var gameState = "start";
var gamebgimg, gamebg;
var gun, gunimg;


function preload(){
bgimg = loadImage ("Untitled 234.png");
gamebgimg = loadImage("background.jpg");
gunimg = loadImage("gun.png")


}





function setup() {
  createCanvas(1000,600);
  bg = createSprite(500, 300, 50, 50);
  bg.addImage(bgimg);
  bg.scale = 1.15;

  button = createSprite(375,450,370,80);
  button.visible = false;

  gamebg = createSprite(500, 300, 50, 50);
  gamebg.addImage(gamebgimg);
  gamebg.scale = 2;
  gamebg.visible = false;

  gun = createSprite(100, 300, 50, 50);
  gun.visible = false;
  
 



}

function draw() {
  background(gamebgimg); 
  if (mousePressedOver(button)){
    gameState = "play";
    
  }
  if (gameState === "play"){
  // background(gamebgimg);
   bg.destroy();
   button.destroy();
   gamebg.visible = true;
   //Gun();
   gun.visible = true;
   gun.addImage(gunimg);
   gun.y = mouseY;
  }
  drawSprites();
  

}

function Gun (){
 
  
  
}