//  Mona Mostafa
// 	October 30, 2019
//  This is a comment
//  The setup function function is called once when your program begins

segments=[];
numberFood=0;
food=[];
score=0;
gameState=1;
var btnPlay;
function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  endGame='no';
  hitFood='no';
  loadHead();
  loadFood();
  frameRate(14);
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
function newButton(){
  btnPlay = new Button(300, 450, 200, 200, color (100, 21, 100));
}

function startScreen(){ //the cover page
  textSize(80);
  fill(255);
  textAlign(RIGHT);
  text ("SNAKE GAME!!", 680, 230); //title
  textAlign(CENTER);

  btnPlay.render();

  textSize (60); //text for buttons
  fill(255);
  textSize(45);
  text ("Play", 305, 530, 200, 200);



  if(mouseIsPressed&&
      mouseX>375&&
      mouseX<425&&
      mouseY>575&&
      mouseY<625){
        clear();
        gameState=2;
      }
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

function finalScreen(){
  background(255);
  textSize(25);
  fill(0,200,0);
  text('you lost!!', 225,400);
}

function loadHead(){ //loading head
  head= new Snake(0,0,0,0,20,color(0, 0, 255));
}

function loadFood(){ //making food
  food[0]= new Food(int(random(40)),int(random(40)),20,0);
}

function runFood(){
  food[0].run();
}

function runSnake(){
  background(200, 0, 255);
  head.run();
}
