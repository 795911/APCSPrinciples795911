//  Mona Mostafa
// 	10-23-19
// Sort Bars
var bars = [];
var numBars, barWidth;

function setup() {
  var cnv = createCanvas(800, 800);
    frameRate(10);
  cnv.position((windowWidth-width)/2, 30);
  background(0);

barWidth = 20;
numBars = width/barWidth;

loadBars();
 for(var i=0; i=bars.length; i++){
   bars[i].run();
 }
}

function draw() {
  bubbleSort();
}

function loadBars(){
  for (var i = 0; i< 40; i++){
    var w=int(random(1,40));
    bars[i]= new Bar(25*i,800-(25*w),25,(25*w))
  }
}

function  update(){
  for(var i=0; i<bars.length; i++){
    bars[i].set(i);
    }
    background(255);
    for(var i=0; i<bars.length; i++){
      bars[i].run();
    }
}
function bubbleSort(){
  for (var x=0; x<bars.length-1;x++){
     if(bars[x].h>bars[x+1].h){
       swap(bars,x,x+1);
       update();
     }
  }
}
function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
