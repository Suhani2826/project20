var bgImg
var bg
var catImage1,catImage2,catImage3,catImage4
var mouseImage1,mouseImage2,mouseImage3,mouseImage4
var cat 
var mouse 

function preload() {

    bgImg=loadImage("images/garden.png");
    catImage1=loadImage("images/cat1.png");
    catImage4=loadImage("images/cat4.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImage1=loadImage("images/mouse1.png");
    mouseImage2=loadImage("images/mouse2.png");
    mouseImage3=loadImage("images/mouse3.png");
    mouseImage4=loadImage("images/mouse4.png");


    //load the images here
}

function setup(){
    createCanvas(1000,800);

    cat=createSprite(870,640);
    cat.addImage("catimage",catImage1);
    cat.scale=0.2;


    mouse=createSprite(200,640);
    mouse.addImage("mouseimage",mouseImage1);
    mouse.scale=0.2;
    //create tom and jerry sprites here

}

function draw() {

    background(bgImg);

    if(cat.x - mouse.x < cat.width/2- mouse.width/2){
    cat.velocityX=0;   
    cat.addImage("catrunning",catImage4);
    cat.changeAnimation("catrunning");
    cat.x=300;
    mouse.addImage("theend",mouseImage3);
    mouse.changeAnimation("theend");


    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
  if(keyCode===LEFT_ARROW){
      cat.velocityX= -6;
      cat.addAnimation("catcollided",catImage2);
      cat.changeAnimation("catcollided");
      mouse.addImage("happymouse",mouseImage2);
      mouse.changeAnimation("happymouse");

  }
  //For moving and changing animation write code here


}
