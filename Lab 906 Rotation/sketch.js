//  Your Name
// 	Date or version number
<<<<<<< HEAD
var ships = [];
var mainBall;
var mainBall2;

=======
var ships = []
var atractor, repeller;
>>>>>>> b2bbf80ef2078f8107a687c0f6fce37c34f7db39
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
<<<<<<< HEAD
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
=======
  loadObjects(random(80, 120));//  back ground color

}

function draw() {
  background(20, 20, 20, 3);
  runBalls();
}

function loadObjects(n){
  atractor = new Ball(random(width), random(height), random(-4, 4), random(-4, 4), -1);
  repeller = new Ball(random(width), random(height), random(-8, 8), random(-8, 8), i);
  for(var i = 0; i < n; i++){
    ships[i] = new Ship(random(width, random(height), random(-2, 2), random(-2, 2), i)
>>>>>>> b2bbf80ef2078f8107a687c0f6fce37c34f7db39
  }
}

<<<<<<< HEAD
function runObjects(){
  mainBall.run();
  mainBall2.run();
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
=======
 function runBalls(){
   atractor.run();
   repeller.run();
   for(var i = 0; i < ships.length; i++){
     ships[i].run();
>>>>>>> b2bbf80ef2078f8107a687c0f6fce37c34f7db39
   }
 }
