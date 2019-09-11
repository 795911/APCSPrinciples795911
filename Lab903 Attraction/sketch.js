//  Your Name
// 	Date or version number
var balls = []
var mainBall = []
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  loadBalls(random(80, 120));//  back ground color
  // ball1 = new Ball(random(width), random(height), random(-3, 3), random(-3, 3));
 // ball2 = new Ball(random(width), random(height), random(-3, 3), random(-3, 3));
 quizcheck()
}
// Draw runs 30 times each second
function draw() {
  background(20, 20, 20);
  runBalls();
}

function loadBalls(n){
  mainBall = new Ball(random(width), random(height), random(-4, 4), random(-4, 4), -1);
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-8, 8), random(-8, 8), i);
  }

}

 function runBalls(){
   mainBall.run()
   for(var i = 0; i < balls.length; i++){
     balls[i].run();
   }
 }
