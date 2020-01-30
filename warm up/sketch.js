//  Mona
// 	December 11, 2019
//  This is a comment
//  The setup function function is called once when your program begins
var list=[];
function setup(){
  var cnv=createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(235);
  loadNumbers();
  mySort();
  logNumber();
  findAv();
  findMedian();
  }

function loadNumbers(){
  for (var i=0; i<11; i++){
    list[i]= int(random(100));
  }
}

function logNumber(){
  console.log(list);
}

function findAv(){
  sum=0;
  for (var i=0; i<11; i++){
    sum=(sum+list[i]);
  }
  console.log(sum/list.length);
}

function findMedian(){
  console.log(list[(list.length-1)/2])
}

function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
function mySort(){
  for(var i=0; i<list.length; i++){
    for (var x=0; x<list.length;x++){
      if(list[x]>list[x+1]){
        swap(list,x,x+1);
      }
    }
  }
}