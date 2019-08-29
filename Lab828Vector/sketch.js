//  Your Name
// 	Date or version number
var balls = []
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20, 50);//  back ground color
  // ball1 = new Ball(random(width), random(height), random(-3, 3), random(-3, 3));
 // ball2 = new Ball(random(width), random(height), random(-3, 3), random(-3, 3));
 loadBalls(30);
}
// Draw runs 30 times each second
function draw() {
  // put drawing code here
  background(20, 20, 20);
  runBalls();
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-8, 8), random(-8, 8));
  }
}

 function runBalls(){
   for(var i = 0; i < balls.length; i++){
     balls[i].run();
   }
 }
