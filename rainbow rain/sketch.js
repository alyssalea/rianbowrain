function setup() {
  createCanvas (windowWidth,windowHeight);
  background (255, 0, 200);
  frameRate(100);
}

function draw() {

  strokeWeight(0);
  fill (random (1, 255), random (1,255), random (1,255), random (90, 100));
  ellipse (random (1,2000), random (1,2000), random (30,30));
}