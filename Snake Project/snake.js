// snake class
class Snake{
  constructor(x, y, w, c){
    this.head =createVector(x,y);
    this.vel = createVector(0,0);
    this.w = w;
    this.clr = c;
    this.body = [];

  }// end constructor
  loadSegment(){
      this.body.push(createVector(this.head.x, this.head.y));
    }
  run(){
    this.update();
    this.render();
  } //end run

  update(){

    this.checkEdges();


    // update the body
    if(this.body.length>0){
    for(var i = this.body.length-1; i < 0; i--){
      this.body[0].x = this.head.x;
      this.body[0].y = this.head.y;
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
    }
  }
    // update the head
    this.head.add(this.vel);

}//end update

  render(){
 // render head
    fill(this.clr);
    rect(this.head.x*numCol, this.head.y*numCol, this.w, this.w);
 // render the body
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x*numCol, this.body[i].y*numCol, this.w, this.w);
   }
 }
  loadBody(){
    this.body.push(createVector(this.head.x, this.head.y));
  }

  tangled(){
    //for loop checking each segment in the segment array
    for(i = 0; i < bodySegments.length; i++){
      //if stament checking if the headations are equal to each other
      if(this.head.x == bodySegments[i].x && this.head.y == bodySegments[i].y){
        console.log("Game Over");
      }
    }
  }



  checkEdges(){ //keep snake inside screen
      if(this.head.x< 0) {this.head.x + this.w}
      if (this.head.x> width) this.head.x + this.w;
      if (this.head.y < 0) this.head.y + this.w;
      if(this.head.y> height) this.head.y - this.w;
    }
} //++++++++++++++++ End Snake
