class Ship{
<<<<<<< HEAD
  constructor(x, y, dx, dy, id){
=======
  constructor(x, y, ds, dy, id){
>>>>>>> b2bbf80ef2078f8107a687c0f6fce37c34f7db39
    this.loc = createVector (x, y);
    this.vel = createVector (dx, dy);
    this.acc = createVector (0, 1);
    this.clr = color(random(255), random(255), random(255))
    this.id = id
    this.angle = 0;
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if(this.loc.x < 0){
      this.loc.x = width;

  }
    if(this.loc.x > width){
      this.loc.x = 0;
  }
      if(this.loc.y < 0){
        this.loc.y = height;
  }
    if(this.loc.y > height){
      this.loc.y = 0;
  }
}

  update(){
<<<<<<< HEAD
    var distToMainBall;
    var distToMainBall2;
    var distToMidBall
    if(this.id > 2){
     distToMainBall = this.loc.dist(mainBall.loc);
     distToMainBall2 = this.loc.dist(mainBall2.loc);

     if(distToMainBall < 250){
       this.acc = p5.Vector.sub(mainBall.loc, this.loc);
       this.acc.normalize();
       this.acc.mult(0.1);
     }
     if(distToMainBall2 < 150){
       this.acc = p5.Vector.sub(this.loc, mainBall2.loc);
       this.acc.normalize();
       this.acc.mult(0.5);
     }
    }
    this.vel.limit(5);
     this.vel.add(this.acc);
   this.loc.add(this.vel);


  }

    render(){
      fill(this.clr);
   this.angle = this.angle +1;
   push();
   translate (this.loc.x, this.loc.y);
   rotate (this.angle);
   triangle (-6, 7, 6, 8, 0, -8);
   pop();
 }
}//  +++++++++++++++++++++++++++++++++++  End Ball Class
=======
    this.vel.add(this.acc);
    this.vel.limit(2);
    this.loc.add(this.vel);
   }

    render(){
      fill(this.clr);
      this.angle = this.angle + 0.1;
      push();
        translate(this.loc.x, this.loc.y);
        rotate(this.angle);
        triangle(-5, 8, 5, 8, 0, -8)
      pop();
    }
        
}
>>>>>>> b2bbf80ef2078f8107a687c0f6fce37c34f7db39
