//  Mona
// 	8/20/19
var b1, b2, b3;
//  The setup function led once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);// back ground color
  b1 = new ball(random(width), random(height), random(-5.0, 5.0), random(-5.0, 5.0));
  b2 = new ball(random(width), random(height), random(-5.0, 5.0), random(-5.0, 5.0));
  b3 = new ball(random(width), random(height), random(-5.0, 5.0), random(-5.0, 5.0));
}

//  Draw runs 30 times times each second
function draw() {
 // put drawing code here
  b1.run();
  b2.run();
  b3.run();
}
