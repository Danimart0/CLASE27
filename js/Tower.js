
class Tower {
    constructor(x, y, width, height) {
      var options = {
      isStatic:true
      };
      this.image = loadImage("assets/tower.png")
        //Load the image of the tower(challenge 5)
this.width = width;
    this.height = height;
    
      //write the instruction to create a rectangular tower body(challenge1)
      this.body = Bodies.rectangle(x,y,this.width,this.height,options,);
   
     World.add(world,this.body);
    world,this.Bodies;
 
    }
display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    //rect(0,0,this.width,this.height);
    imageMode(CENTER);        
  image(this.image,0,0,this.width,this.height);
//display the rect function (challenge 3)

  pop();
  }
}
