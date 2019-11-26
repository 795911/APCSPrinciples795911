//  Mona Mostafa
// 	October 30, 2019
//  This is a comment
//  The setup function function is called once when your program begins


numberFood=0;
score=0;
gameState=1;
segments=[];
var btnPlay;
food=[];
function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 192, 203);
  endGame='no';
  hitFood='no';
  loadHead();
  loadFood();
  frameRate(10);
}

function draw() { //setting the different game states
  if(gameState===1){
    startScreen();
  }
  if(gameState===2){
    playGame();
  }
  if(gameState===3){
    finalScreen();
  }
}

function startScreen(){ //the cover page
  textSize(80);
  fill(106, 13, 170);
  textAlign(RIGHT);
  text ("SNAKE GAME!", 680, 230); //title
  textAlign(CENTER);
  fill(106, 13, 170)
  text('PLAY',373,500);
  rect(270,510,200,200);
  fill(106, 13, 170);


  if(mouseIsPressed&&
      mouseX>270&&
      mouseX<425&&
      mouseY>510&&
      mouseY<625){
        clear();
        gameState=2;
      }
}

function finalScreen(){
  background(0);
  textSize(100);
  textAlign(RIGHT);
  fill(106, 13, 170);
  text('YOU LOST:(', 670, 430);
}

function playGame(){ //the play game screen
  runSnake();
  runFood();
  if(hitFood==='yes'){
    numberFood=numberFood+1;
    hitFood='no';
  }
if (endGame==='yes'){
  clear();
  gameState=3;
}
}

function loadHead(){ //loading head
  head= new Snake(0,0,0,0,20,color(255, 0, 70));
}

function runSnake(){
  background(0);
  head.run();
}

function runFood(){
  food[0].run();
}

function loadFood(){ //making food
  food[0]= new Food(int(random(40)),int(random(40)),20,0);
}
