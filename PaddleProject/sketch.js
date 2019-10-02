//  Mona Mostafa
// 	9-25-19
var balls= []
var paddle;
var score=0;
var gameState=1;
var gameMode;
var health=10;
var win;
var iteration=1;
var buttons=[];
var btnEasy, btnMedium, btnHard; 

function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  loadButtons();
}

  // function render(){
  //   fill(this.clr);
  //   rect(this.loc.x,this.loc.y,this.w,this.h);
  //   fill(0);
  //   text('Easy',55, 525, 200, 200);
  //   fill(0);
  //   text('Medium',305, 530, 200, 200);
  //   fill(0);
  //   text('Hard',560, 525, 200, 200);
  // }
  function checkEdges(){
    isTouching();
  }

function draw() {
  background(0);
  if(gameState===1){
    startGame();
  }else if(gameState===2){
    playGame();
  }else if(gameState===3){
    endGame();
  }
}

function startGame(){
  //title
  textSize(75);
  fill(255);
  text('Paddle Game!',105,200);
  textSize(50);
  runButtons();
  textSize(25);
  fill(244);
  text('Move the paddle with your mouse to hit the balls.',50,350);
  text('But make sure the balls only hit the top of the paddle!',50,375);
  text('If the balls hit the top of the paddle, the score will increase.',50,400);
  text('If the balls hit the bottom of the paddle,your health will decrease.', 50,450);
  text('If youe health does down to 0, you lose! If you survive, you win!',50,475);
  //checks if user touches the box
  //moves to next screen
  if(gameMode==='easy'||gameMode==='medium'||gameMode==='hard'){
    clear();
    if(gameMode==='easy'){
      loadObjects(5);
    }
    if(gameMode==='medium'){
      loadObjects(15);
    }
    if(gameMode==='hard'){
      loadObjects(35);
    }
    gameState=2;
  }
}

function isTouching(){
  //if touching easy
  if(mouseIsPressed&&
      mouseX>200&&
      mouseX<250&&
      mouseY>600&&
      mouseY<650){
        gameMode='easy'
      }
      //if touching medium
  if(mouseIsPressed&&
      mouseX>400&&
      mouseX<450&&
      mouseY>600&&
      mouseY<650){
        gameMode='medium'
      }
      //if touching hard
  if(mouseIsPressed&&
      mouseX>600&&
      mouseX<650&&
      mouseY>600&&
      mouseY<650){
        gameMode='hard'
      }

}
function playGame(){
  background(20,20,20);
  textSize(25);
  fill(255,0,0);
  text('Score:'+score,20,20);
  text('Health:'+health,650,20);
  runBalls();
  if(health<=0){
    clear();
    gameState=3;
    win='no';
  }
  if(iteration===4){
    clear();
    gameState=3;
    win='yes';
  }
}

function endGame(){
  background(20,20,20);
  if(win==='no'){
    textSize(100);
    fill(255);
    text("You Lost!",200,400);
  }
  if(win==='yes'){
    textSize(100);
    fill(255);
    text("You win!",400,400);
  }
  fill(255);
  rect(300,600,50,50);
  textSize(30);
  text('Play Again?',275,575);
  fill(255);
  rect(500,600,50,50);
  text('I Quit',500,575);
  if(mouseIsPressed&&
      mouseX>300&&
      mouseX<350&&
      mouseY>600&&
      mouseY<650){
        clear();
        score=0;
        gameMode='';
        iteration=1;
        balls=[];
        win='no';
        health=10;
        gameState=1;
      }
      //if touching quit
  if(mouseIsPressed&&
      mouseX>500&&
      mouseX<550&&
      mouseY>600&&
      mouseY<650){
        remove();
        clear();
      }
}

function loadButtons(){
  if (gameState===1){
      btnEasy= new Button(200 ,550, 100, 100, color(255, 40, 0), "Easy");
      btnMedium= new Button(400 ,550, 150, 100, color(255, 40, 0), "Medium");
      btnHard= new Button(600 ,550, 100, 100, color(255, 40, 0), "Hard");

  }
  if(gameState===3){
    buttons=[]
    for(var i=0; i<2;i++){
      buttons[i]= new Button(400+(200*i),600, 100, 50);
    }
  }
}

function runButtons(){
  btnEasy.run()
  btnMedium.run()
  btnHard.run()
}
function loadObjects(n){
    paddle= new Paddle(350,500,150,50);
    for(var i=0; i<n; i++){
      balls[i]= new Ball(random(0,400), random(0,400),random(-8,8),random(0,8),i);
    }
}

function runBalls(){
  paddle.run();
  for(var i=0; i<balls.length; i++){
    balls[i].run();
  }
}
 function mouseClicked(){
   console.log("mouseClicked");
   if (mouseIsPressed&& mouseX > btnEasy.loc.x && mouseX< btnEasy.loc.x+btnEasy.w&&
       mouseY>btnEasy.loc.y && mouseY<btnEasy.loc.y+this.h){
          gamestate = 1
   }
 }
