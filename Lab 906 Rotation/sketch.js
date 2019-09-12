//  Your Name
// 	Date or version number
var ships = []
var atractor, repeller;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
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
  }

}

 function runBalls(){
   atractor.run();
   repeller.run();
   for(var i = 0; i < ships.length; i++){
     ships[i].run();
   }
 }
