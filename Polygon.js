class Polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/hex.png");
    }
  
    display() {
      super.display();
    }
  }
  