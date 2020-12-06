class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("Sprites/box.jpeg");
      this.visibility = 100;
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
      tint(100,this.visibility);
       this.image = loadImage("Sprites/box.jpeg");
      //this.image(this.image, this.body.position.x, this.body.position.y, 50, 50);


      //do nothing
    }
    // pop();
  }
  };
