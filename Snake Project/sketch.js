//  Mona Mostafa
// 	10-31-19
//  Snake Games
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}
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
  text('Snake Game!',105,200);
  textSize(50);
  textSize(25);

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
    if(health<=5){
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
      gameState = 3
    }
    if(win==='yes'){
      tex
      tSize(100);
      fill(255);
      text("You win!",400,400);
      gameState = 3
    }
    fill(255);
    rect(300,600,50,50);
    textSize(30);
    text('Play Again?',275,575);
    fill(255);
    rect(500,600,50,50);
    text('I Quit',500,575);
    gameState = 3
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

function draw() {

}
