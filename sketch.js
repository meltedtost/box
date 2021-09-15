var box;
function setup() {
  createCanvas(1000,1000);
  box=createSprite(100,249,90,55)
}

function draw() 
{
  background("red");
drawSprites()
if (keyDown("down")){
  box.y+=2
}
if (keyDown("up")){
  box.y-=2
}
if (keyDown("left")){
  box.x-=2
}
if (keyDown("right")){
  box.x+=2
}
}




