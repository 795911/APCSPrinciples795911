class Food{

  constructor (x, y){
    this.loc = createVector(x,y);
  }

  run(){
    this.render();
    this.update();
  }

  render(){
      fill(0, 30, 200);
      rect(this.loc.x, this.loc.y, 30, 30);

  }

  update(){
    //  checking for collision
    if(snake.head.x === this.loc.x && snake.head.y === this.loc.y){
          this.loc.x = Math.floor(random(0,79))*30;
          this.loc.y = Math.floor(random(0,79))*30;
  }

}

  }// end food class
