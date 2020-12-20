var thickness, wall;
var speed, weight, bullet;

function setup() {
  createCanvas(1600,400);

  weight = random(30, 52);
  speed = random(223, 321);

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);
  bullet = random(22, 83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

}

function draw() {
  background(0);

 if(hasColided(bullet, wall))
 {
   bullet.velocityX = 0;
   var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

   if(damage > 10)
   {
     wall.shapeColor = color(255, 0, 0);
   }

   if(damage < 10)
   {
     wall.shapeColor = color(0, 255, 0);
   }
 }
 
  drawSprites();
}

function hasColided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallRightEdge = lwall.x

  if(bulletLeftEdge >= wallLeftEdge){
    return true
  }

  return false;
}