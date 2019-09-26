// Mona
//8-22-19
class Ball{

  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector (dx, dy);
    this.acc = createVector (0, 0.5);
    this.id = id
    this.clr = color(random(255), random(255), random(255));
  }

run(){
  this.checkEdges();
  this.updates();
  this.render();
  this.score();
}

checkEdges(){
  if(this.loc.x< 0) {this.vel. x = -this.vel.x}
  if (this.loc.x> width) this.vel.x = -this.vel.x;
  if (this.loc.y < 0) this.vel.y = - this.vel.y;
  if(this.loc.y> height) this.vel.y = -this.vel.y;
}

updates(){
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

render(){
  fill( 250, 10, 40);
  ellipse(this.loc.x, this.loc.y, 50, 50);
}

isColliding(){
  if (this.loc.x> paddle.loc.x &&
 this.loc.x < paddle.loc.x +paddle.w &&
 this.loc.y > paddle.loc.y && this.loc.y < paddle.loc.y +paddle.h&&
 this.vel.y>0){
   return true;
 } else{
   return false;
 }
}
score(){
  if (this.isColliding()===true && this.id %2 === 1){
    score ++;
  }else if (this.isColliding() === true && this.id %2 ===0){
    score--;
  }
}

}//  +++++++++++++++++++++++++++++++++++  End Ball Class
