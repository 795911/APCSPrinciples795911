//Mona Mostafa
// 	December 9 2019
//  This is a comment
//  The setup function function is called once when your program begins
var numBalls = 30;
var balls = [];
var colors = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  fill(255);
  createBalls();
  bubbleSort();
  renderBalls();
}

function createBalls(){
  for(var i=0; i < numBalls; i++){
    if(i===0){
      balls[i] = new Ball(20,100);
    }
    else{
      balls[i] = new Ball((i+1)*20,100);
    }
  }
}

function bubbleSort(){
  for (j=0; j<numBalls-1; j++){
    for (i=0; i<numBalls-1-j; i++){
      if (balls[i+1].redClr < balls[i].redClr) {
        var tmp = balls[i].redClr;
        balls[i].redClr = balls[i+1].redClr;
        balls[i+1].redClr = tmp;
      }
    }
  }
}

function renderBalls(){
  for(var i=0; i < numBalls; i++){
    balls[i].render();
    }
}
