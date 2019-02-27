var spot = [

 500,
  400,
  100
]
var c=1;
var col = {
  r: 255,
  g: 255,
  b: 0
}

function setup () {
  createCanvas(192, 157, WEBGL);
  background(0);
}

function draw() {
  
  background(0);
  translate(0,0,20);
  push();
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  translate(0,0,0);
  box(60,60,60);
  stroke(255,0,0);
  noFill();
    rotateX(frameCount * -0.02);
    rotateY(frameCount * -0.02);
    box(40,40,40);
    stroke(255,0,0);
    noFill();
    c=c+0.05;
  spot.x = (300, width);
  spot.y =(300, height);
  spot.z =(300, height);
  fill(255,255,0,0);
  pop();
  translate(0,-80,-80);
  push();
  rotateY(radians(45));
  rotateX(radians(90));
  rotateZ(sin(frameCount)*-0.005+c );
  translate(-80,-80,-80);
  sphere(40);
  pop();

}