//  Mona Mostafa
// 	10-4-19
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  var list = [4, 8, 6, 3, 2, 9]
  swap(list, 1, 2)
  function swap(list, a, b){
    if(a > b){
      var temp = list[a];
      list[a] = list[b];
      list[b] = temp;
    }
  }


}

//  The draw function is called @ 30 fps
function draw() {

}
