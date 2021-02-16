var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(200,200,80,30);
  rect1=createSprite(100,100,50,50);
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
  rect1.shapeColor="blue";
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(istouching(movingrect,rect1)){
    rect1.shapeColor="red";
    movingrect.shapeColor="red";
  }
  else{
    rect1.shapeColor="blue";
    movingrect.shapeColor="green";
  }
  
  drawSprites();
}

function istouching(object1,object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2
    && object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object1.height/2+object2.height/2){
  return true;
 }
 else{
   return false;
 }
}