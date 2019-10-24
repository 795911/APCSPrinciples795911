

class Bar{
  constructor(x,y,w,h,c){
    this.loc = createVector(x,y);
    this.w = w;
    this.h = h;
    this.clr = color(random(255), random(255), random(255))
  }
run(){
  this.render();
  this.update();

}
render(){
  fill(this.clr);
  rect(this.loc.x,this.loc.y,this.w,this.h);
}
