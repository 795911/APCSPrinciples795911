//Mona Mosafa
//checkerboard Lab
//10-7-19
class Square{
  constructor(x,y,w,h,c){
    this.loc=createVector(x,y);
    this.w = w;
    this.h = h;
    this.clr = c;
  }
run(){
  this.render();
  this.update();

}
render(){
  fill(this.clr);
  rect(this.loc.x,this.loc.y,this.w,this.h);
  noStroke();
  }

}
