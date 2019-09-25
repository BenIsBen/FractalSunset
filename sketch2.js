var angle = 91.1;
var cirqpo = 200;
var redco = 100;
var blueco = 255;
var greenco = 100;
var treeco = 0;
var isnight = false;
var starsx = [];
var starsy = [];
var starcount = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(redco,greenco,blueco);
  fill(255,255,0);
  stroke(255,255,0);
  ellipse(200, cirqpo, 300,300);
  angle = angle + .001;
  cirqpo+=.105;
  if(redco > 255){
    isnight = true;
    redco = 150;
  }
  if(isnight == false){
    redco+=.05;
    blueco-=.05;
  }else{
    if(redco != 0){
    redco-=1;
    }
    if(blueco != 0){
    blueco-=1;
    }
    if(greenco != 0){
    greenco-=1;
    }
    if(treeco != 255){
    treeco+=1;
    }
    if(starcount % 5 == 0 && starcount < 2500){
    makeStar();
    }
    starcount++;
  }
  stroke(treeco);
  translate(200, height);
  branch(100);
  fill(255);
  for(let i = 0; i < starsx.length; i++){
    star(starsx[i], starsy[i], .3, .7, 5);
  }
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function makeRandom(x){
  if(x == "x"){
    return random(-600, 300);
  }
  if(x == "y"){
    return random(-300, -150);
  }
}
function makeStar(){
  let x = makeRandom("x");
  let y = makeRandom("y");
  starsx[starsx.length] = x;
  starsy[starsy.length] = y;
}
