//Mona Mostafa
//9-25-19
class Button{

constructor(x, y, w, h , clr, msg){
    this.loc = createVector(x,y);
    this.w= w;
    this.h = h;
    this.clr = clr;
    this.msg = msg;
  }
  run(){
    this.render()
  }

render(){ // creates button
  fill(200, 90, 111);
  rect (this.loc.x, this.loc.y, this.w, this.h);
  textSize (30);
  fill (0);
  text (this.msg, this.loc.x +10, this.loc.y +50)

  }




  }///end button class
