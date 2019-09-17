//  Your Name
// 	Date or version number
var ships = [];
var mainBall;
var mainBall2;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadObjects(90);

}


function draw() {
background(5,5,5,20);
runObjects();

}

function loadObjects(x){
  mainBall = new Ball(random(width/2), random(height/2), random (-.5,.5), random(-.5,.5), 1);
  mainBall2 = new Ball(random(width/2), random(height/2), random (-.5,.5), random(-.5,.5), 2);
  for(var i = 0; i < x; i++){
    ships[i]=new Ship(random(width), random(height), random (-1, 1), random(-1,1), i+3);
  }
}

function runObjects(){
  mainBall.run();
  mainBall2.run();
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
   }
 }
