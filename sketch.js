var fixedRect, movingRect, fRect, mRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fRect = createSprite(100, 400, 50, 80);
  fRect.shapeColor = "green";
  fRect.debug = true;
  mRect = createSprite(800, 400,80,30);
  mRect.shapeColor = "green";
  mRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  mRect.velocityX = -5;
  fRect.velocityX = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  bounceOff(mRect, fRect)
  
  drawSprites();
  }
  
  
  

  

  

  

  

  

  

  

  

  
