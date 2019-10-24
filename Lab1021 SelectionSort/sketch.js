// Mona Mostafa
// 10-21-19
//  Selection Sort
var list = [];
function loadList(n){
  for(var i = 0; i < n; i++){// array until i < n
    list.push(int(random(0, 10000)));//rand number from 0-10000
  }
}
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for (var i = 0; i < arr.length - 1; i++)
  {
      var index = i;
      for (var j = i + 1; j < arr.length; j++)
if (arr[j] < arr[index])
 index = j;
      //  Swapping Code
      var smallerNumber = arr[index];
      arr[index] = arr[i];
      arr[i] = smallerNumber;
  }
}

//  The draw function is called @ 30 fps
//function draw() {

//}
