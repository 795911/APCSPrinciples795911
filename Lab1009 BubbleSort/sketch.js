//  Mona Mostafa
// 	10-9-19
// Bubble Sort lab
var l = [];
function loadList(n){
  for (var i=0; i<n; i++){
    l.push(random(0, 1000));
  }
}
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 100, 150);
  loadList(40);
  for(var i=0; i<l.length; i++){
    for (var x=0; x<l.length;x++){
      if(l[x]>l[x+1]){
        swap(l,x,x+1);
      }
    }
  }
console.log(l);
}
function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
