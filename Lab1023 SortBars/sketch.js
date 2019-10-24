//  Mona Mostafa
// 	10-23-19
// Sort Bars
var bars = [];
var numBars, barWidth;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

barWidth = 20;
numBars = width/barWidth;

loadBars(numBars);
runBars();
myBubbleSort();
}

function draw(){
  background(0)
  frameRate(1);
  runBars();
}
function loadBars(num){
  for(var i = 0; i < bars.length; i++){
    bars[i].render();
  }
}
function printRings(){
  var circLoc = createVector(width/2, height-250);
  var 1 = bar.length;
  for(var i = 0; i < bars.length; i++)
     strokeWeight(barWidth/11);
     fill(0, 0, bars[i].b)
     stroke(color(0,0, bars[i].b));
}
