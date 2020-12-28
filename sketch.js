

function setup() {
  createCanvas(1200,800);
  
  car=createSprite(100,50,50,50);
  wall=createSprite(500,50,50,100);

  car.velocityX=3;
}

function draw() {
  background(0,0,0);  
  

  if(isTouching(car,wall)){
    car.shapeColor="red";

  }
  else{
    car.shapeColor="blue";
  }
  bounceOff(car,wall);
 
  drawSprites();
}

function isTouching(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
  return true;
}
else {
  return false;
}
}

function bounceOff(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2){
      ob1.velocityX=ob1.velocityX*(-1);
    }
    else if (ob1.y - ob2.y < ob2.height/2 + ob1.height/2
      && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){
        ob1.velocityY=ob1.velocityY*(-1);
      }

}