//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x, y;
var speedx, speedy;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
x=200;
y=400;
}

//  The draw function is called @ 30 fps
function draw() {
  if (x>width)
  speedx=-speedx
x=x+1;
y=y+1;
  x=x+5
fill (300,200, 200);
ellipse (x, y, 50 );
fill (40, 100, 250);
ellipse (x+100, y+100, 50);
fill (30, 240, 100);
ellipse (x-100, y-100, 50);
}
