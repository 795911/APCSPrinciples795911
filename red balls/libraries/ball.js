class Ball{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.redClr = Math.floor(random(255))
  }

run(){
  this.render();
}

render(){
  fill(this.redClr,0, 0);
  ellipse(this.loc.x, this.loc.y, 20, 20);
  }
}
