var car, wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500, 200, 60, 380);
  car = createSprite(10, 200, 30, 30);
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  car.shapeColor = "black";
}

function draw() {
  background(255,255,255);
  
  car.velocityX = speed


  if(car.isTouching(wall)){
     car.velocityX = 0;
  var deformation = 0.5 *  weight * speed * speed/22500

    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }

    if(deformation>100  && deformation<180){
      car.shapeColor = color(230,230,0);
    }

    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }


 }
 drawSprites();
}