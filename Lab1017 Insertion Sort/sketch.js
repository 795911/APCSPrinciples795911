//  Mona Mostafa
// 	10-17-19
//  Insertion sort
var list = [];
var temp;
function loadList(n){
  for(var i = 0; i < n; i++){
    list.push(random(0, 12000)));
}


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadList(10000);
  console.log(list);
  for(var i = 1; i < list.length; i++){
    for(var j = list.length; j > 0; j--){
      if(list[j] < list[j - 1]){
        swap(list, j, j - 1);
      }
    }
  }
  console.log(list);
  var evenorodd = list.length % 2;
  var halfofevenlength = 0.5 * list.length;
  var halfofoddlength = (0.5 * list.length) - 0.5;

  var median = 0;
  if(evenorodd === 0){
    median = (list[halfofevenlength] + list[halfofevenlength - 1])/2
    console.log('median: ' + median);
  }else{
    median = list[halfofoddlength];
    console.log('median: ' + median)
  }
}

function swap(list, a, b) {//
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
console.log(list);
