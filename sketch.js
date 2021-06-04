var tom,jerry,g
var t1,t2,t3,t4,j1,j2,j3,j4;
var bg;
function preload() {
    t1=loadImage("cat1.png")
    t2=loadImage("cat2.png")
    t3=loadImage("cat3.png")
    t4=loadImage("cat4.png")
    j1=loadImage("mouse1.png")
    j2=loadImage("mouse2.png")
    j3=loadImage("mouse3.png")
    j4=loadImage("mouse4.png")
    bg=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    g=createSprite(500,400)
    g.addImage("background",bg)
    tom=createSprite(780,600);
    tom.addImage("cat",t1)
    jerry=createSprite(30,600)
    jerry.addImage("mouse",j1)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   if(tom.collided(jerry)=true){
    tom.x=780
    tom.velocityX=0;
    tom.velocityY=0
    tom.changeImage("original",t1)
       jerry.changeImage("original",j1)
   }
   if(keyDown(LEFT_ARROW)){
   keyPressed()
   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  jerry.changeAnimation(j2,j3,j4)
  tom.changeAnimation(t2,t3,t4)
  tom.velocityX=mouse.x

}
