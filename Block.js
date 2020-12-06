class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("Sprites/box.png");
      this.visibility = 255;
      this.visible = true;
    }
    
  display(){ 
    
    //console.log(this.body.speed);
    //push();
    
    if(this.body.speed<3){
    
      super.display();
      
     // pop();`
    }
    else{
      World.remove(world, this.body);
      tint(255,this.visibility);
       this.image = loadImage("Sprites/box.png");
      //this.image(this.image, this.body.position.x, this.body.position.y, 50, 50);


      //do nothing
    }
    // pop();
  }
  };
