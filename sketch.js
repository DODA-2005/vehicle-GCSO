var car1,car2, wall
var speed1, speed2, mass2, mass1;
var div, roadImg, wallImg
var Wcar,Gcar, Rcar, Ycar, crash

function preload(){
  Wcar=loadImage("blackCar.png");
  Gcar=loadImage("greenCar.png");
  Rcar=loadImage("Red.png");
  Ycar=loadImage("yellowCar.png");
  roadImg=loadImage("road-removebg-preview.png")
  wallImg=loadImage("red-brick-wall-side-view-260nw-449775709-removebg-preview.png")
  
  crash=loadSound("237375__squareal__car-crash.wav");
}

function setup() {
  createCanvas(1700,600);
   crash.play();
  
  
 
  
  car1=createSprite(50, 200, 50, 50);
  car2=createSprite(50, 400, 50, 50);
  wall1=createSprite(1700,200,40,height/4);
  wall1.scale=1.5;
  wall2=createSprite(1700,450,40,height/4);
  wall2.scale=1.5;
  div=createSprite(850,300,1700,10);
  div.scale=7;
 
  speed1=random(70,140);
  mass1=random(700,2200);
  speed2=random(70,140);
  mass2=random(700,2200);
}


function draw() 
{
   div.addImage(roadImg);

  wall1.addImage(wallImg);
  wall2.addImage(wallImg);
  
  car1.depth=wall1.depth
  car1.depth=+10
  
  car1.addImage(Wcar);
  car2.addImage(Wcar)
  
  car1.velocityX=speed1;

  if(mass1<1200){
    car1.scale=0.45;
  }
  if(mass1>1200&&mass1<1700){
    car1.scale=0.6;
  }
  if(mass1>1700){
    car1.scale=0.75;
  }
  
  

  if(wall1.x-car1.x < (car1.width+wall1.width)/2)
  {
    car1.velocityX=0;
    var deforamtion1=0.5*mass1*speed1*speed1/22500;

    console.log( deforamtion1)
    
    if(deforamtion1>320){
      car1.addImage(Rcar)
    }
    if(deforamtion1<320&&deforamtion1>180){
      car1.addImage(Ycar)
    }
    if(deforamtion1<280){
      car1.addImage(Gcar)
    }
    
  }

  car2.depth=wall1.depth
  car2.depth=+10
  
  div.depth=wall1.depth
  wall1.depth=+2;
  
  div.depth=wall2.depth
  wall2.depth=+2;
  div.depth=-5;
  
  car2.velocityX=speed2;

  if(mass2<1200){
    car2.scale=0.45;
  }
  if(mass2>1200&&mass2<1700){
    car2.scale=0.55;
  }
  if(mass2>1700){
    car2.scale=0.75;
  }
  
  

  if(wall2.x-car2.x < (car2.width+wall2.width)/2)
  {
    car2.velocityX=0;
    var deforamtion2=0.5*mass2*speed2*speed2/22500;
    console.log(deforamtion2)
    if(deforamtion2>320){
      car2.addImage(Rcar)
    }
    if(deforamtion2<320&&deforamtion2>180){
      car2.addImage(Ycar)
    }
    if(deforamtion2<280){
      car2.addImage(Gcar)
    }
  }




  
  background(255,255,255);  
  drawSprites();
}

