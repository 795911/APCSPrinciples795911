//  Mona Mostafa
// 	12-03-19
var ships; //declares array
var mainPlanet;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadObjects(70);

}


function draw() {
background(5,5,5,20);
runObjects();

}

function loadObjects(x){
  mainPlanet = new Planet(random(width/2), random(height/2), random (-.4,.4), random(-.4,.4), 1);
    ships = new Ship(random(width), random(height), random (-.4,.4), random(-.4,.4), 1);
}

function runObjects(){
  mainPlanet.run();
  ships.run();
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
}
}
