//Mona Mostafa
//9-25-19
class Button{
  constructor(x, y, h, w, msg, clr){
    this.loc = createVector(x, y);
    this.h = h;
    this.w = w;
    this.message = msg;
    this.clr = clr;
  }

  run(){
    this.render();
    this.isClicked();
  }
    render(){
    fill(this.clr);
  rect (this.loc.x, this.loc.y, this.w, this.h);
    }

  isClicked(){

    if (mouseIsPressed&& mouseX > this.loc.x && mouseX< this.loc.x+this.w&&
    mouseY>this.loc.y && mouseY<this.loc.y+this.h){
      return true;
    }
  }




  }///end button class
