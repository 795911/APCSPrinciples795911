//food class
class food{
  constructor (x, y, clr){
  this.loc = createVector(x,y);
  this.clr = clr;
}

run(){
  this.render();
}

render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, 50, 50);

}
 }// end food class
}
