// snake class
class snake{
  constructor(x,y,w,h,c, dx, dy){
    this.loc = createVector(x,y);
    this.vel = createVector (dx, dy);
    this.w = w;
    this.h = h;
    this.acc = createVector (0, 1);
    this.clr = color(random(255), random(255), random(255))
  }
  run(){
    this.render()
    this.checkEdges();
    this.update();
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);
}
  update(){
     this.vel.add(this.acc);
     this.loc.add (this.vel);
   }
}
