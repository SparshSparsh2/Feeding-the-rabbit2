var garden,rabbit;
var gardenImg,rabbitImg;
var apples,applesImg;
var orangeLeaf,oragneLeafImg;
var leaves, leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);




}





function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  drawSprites();

var select_sprites = Math.round(random(1,3))

if (frameCount % 80 == 0) {
  if(select_sprites == 1) {
    spawnApples();
  }
  else if(select_sprites == 2) {
    spawnLeaves();
  }
  else(select_sprites == 2) 
  {
    spawn_orangeLeaf();
  }
}
}
function spawnApples() {
  apples = createSprite(random(50,350),40, 10, 10);
  apples.addImage(applesImg);
  apples.scale = 0.2;
  apples.lifetime = 150;
  apples.velocityY = 5;




}
function spawn_orangeLeaf() {
  orangeLeaf = createSprite(random(25,350),40, 10, 10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = 0.2;
  orangeLeaf.lifetime = 150;
  orangeLeaf.velocityY = 2;
}

function spawnLeaves() {
  leaves = createSprite(random(10, 350), 40, 10, 10)
  leaves.addImage(leavesImg);
  leaves.scale = 0.2;
  leaves.lifetime = 150;
  leaves.velocityY = 10;
  
}