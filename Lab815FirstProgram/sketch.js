//  Mona
// 	8/15/19
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  fill(700,70,100,70);
  rect(200,200,500,500);
  fill(255,255,255);
  ellipse(450,450,500,500);
  fill(30,20,500,70);
  triangle(450,450,500,500,300,300);

}
