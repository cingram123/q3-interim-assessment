function setup(){
  createCanvas(600,400);
}

function draw(){
  background(0);
}

function Bubble(x,y){
  this.x = x;
  this.y = y;
  this.display = function(){
    stroke(255);
    ellipse(this,x, this.y, 50, 50);
}