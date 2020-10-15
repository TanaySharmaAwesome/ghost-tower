var tower, tower_Image;
var door, doorImage, doorsGroup;
var climber, climberImage, climbersGroup;
var ghost, ghostImage;

function preload(){
  tower_Image=loadImage("tower.png");
  
  doorImage=loadImage("door.png") ;
  
  climberImage = loadImage("climber.png");
  
  ghostImage=loadImage("ghost-standing.png")
  
}

function setup(){
  createCanvas(500,470);
  
  tower = createSprite(250,235,500,470);
  tower.addImage(tower_Image);
  tower.velocityY=2;
  
  doorsGroup=new Group();
  climbersGroup=new Group();
  
  ghost = createSprite(250,235);
  ghost.addImage(ghostImage);
  ghost.scale=0.35;
  
}

function draw(){
  background("white");
 // createEdgeSprites();
  
  if(tower.y>400){
    tower.y=200;
  }
  
  if (keyDown("space")){
    ghost.velocityY=-3;
  }
  else{
    ghost.velocityY=5
  }
  
  if(keyDown("right")){
    ghost.x=ghost.x+5;
  }
  
    if(keyDown("left")){
    ghost.x=ghost.x-5;
  }
  spawnDoor()
  
  
  
  drawSprites();
}

function spawnDoor(){
  if (frameCount % 200 === 0){
  door = createSprite(250,50);
  door.addImage(doorImage);  
  door.velocityY=2;
  door.x=Math.round(random(100,410));
  door.lifetime=600;
  doorsGroup.add(door);  
  
  climber = createSprite(250,50);
  climber.addImage(climberImage);  
  climber.velocityY=2;
  climber.x=door.x;
  climber.y=door.y+65;  
  climber.lifetime=600;
  climbersGroup.add(climber);  
  ghost.depth=climber.depth+1;
  }
  }
