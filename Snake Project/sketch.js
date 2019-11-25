//  Mona Mostafa
// 	10-31-19
//  Snake Game

//  These are my  global variables
segments=[];
var score, header_height, snake, difficulty, numCol;
var gameState = 1;
var h = 10;
var btnEasy, btnMed, btnHard, btnInstructions, btnBTMI, btnBTME, btnReplay;
var food;


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  endGame='no';
  hitFood='no';
  header_height = 800;
  var w = 40;
  numCol = width/w
  loadObjects();
  newButton();

}

function draw(){
  if (gameState ===1){
    startGame(); //start screen
  }else if (gameState === 2){
    playGame(); //game screen
  }else if (gameState === 3){
    instructionsText();
  }else if (gameState === 4){ //game over screen
    endGame();
  }
}

function newButton(){
  btnEasy = new Button(50, 450, 200, 200, color(255, 105, 183));
  btnMed = new Button(300, 450, 200, 200, color (100, 21, 100));
  btnHard = new Button(550, 450, 200, 200, color(40, 21, 200));
}

function startGame(){
  textSize(80);
  fill(255);
  textAlign(RIGHT);
  text ("SNAKE GAME!!", 680, 230); //title
  textAlign(CENTER);


  btnEasy.render();
  btnMed.render();
  btnHard.render();

  textSize (60); //text for buttons
  fill(255);
  text ("EASY", 55, 525, 200, 200);
  text ("HARD", 560, 525, 200, 200);
  textSize(45);
  text ("MEDIUM", 305, 530, 200, 200);

  checkDifficulty(); // checks which difficulty is chosen
  if (difficulty === 'easy' || difficulty === 'medium'|| difficulty === 'hard'){
    if (difficulty === 'easy'){
      loadObjects(2);
    }else if (difficulty === 'medium'){
      loadObjects (5);
    }else if (difficulty === 'hard'){
      loadObjects (7);
    }
    gameState = 2; // play game
  }
}

function playGame(){
  frameRate(10);
  background(0);
  runObjects();
  if(hitFood==='yes'){
    numberFood=numberFood+1;
    hitFood='no';
  }
  if (endGame==='yes'){
    clear();
    gameState=3;
  }
}

function loadObjects(n){
  snake = new Snake (Math.floor(random(numCol)),Math.floor(random (10, 26))*30,30, color(227, 20, 100));
  food = new Food(int(random(80)),int(random(80)),10,0);

}

function runObjects(){
  console.log("inside render");
  snake.run();
  food.run();
}
function clearEverything() { //clear gamestate and score for restarting level
  gameState = 1;
  score = 0 ;
  timerValue = 10;
  food = [];
}

function checkTangled(){
  if (snake.tangled() === true) {
    gameState = 4;
  }
}
function finalScreen(){
  background(20,20,20);
  textSize(25);
  fill(255,0,0);
  text('You lost!', 225,400);
  text('You won! Good Job!',175,225)
}

function checkDifficulty(){ //check which difficulty button is isClicked
  if (btnEasy.isClicked()=== true){
    difficulty = 'easy';
  }
  if (btnMed.isClicked()===true){
    difficulty = 'medium';
  } if (btnHard.isClicked()=== true){
    difficulty = 'hard';
  }
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0, -1);
  }
  if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0, 1);
  }
  if(keyCode === LEFT_ARROW){
    snake.vel = createVector(-1, 0);
  }
  if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(1, 0);
  }

}
