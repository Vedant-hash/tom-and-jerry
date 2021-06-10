var bgImg;
var cat;
var cat1,cat2,cat3;
var mouse;
var mouse1,mouse2,mouse3;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    cat1=loadImage("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat3=loadAnimation("images/cat4.png");

    mouse1=loadImage("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3=loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(870, 600,20,20);
    tom.addAnimation("tom",cat1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600,20,20);
    jerry.addAnimation("jerry",mouse1);
    jerry.scale = 0.15;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", cat3);
        tom.changeAnimation("tomLastImage",cat3);
        tom.x =300;
        tom.scale=0.2;
        
        jerry.addAnimation("jerryLastImage",mouse3);
        jerry.changeAnimation("jerryLastImage",mouse3);
        jerry.scale=0.15;       
    } 


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5; 
    tom.addAnimation("tomRunning",cat2);
    tom.changeAnimation("tomRunning",cat2);
    
   jerry.addAnimation("jerryTeasing",mouse2);
   jerry.changeAnimation("jerryTeasing",mouse2);
}

}
