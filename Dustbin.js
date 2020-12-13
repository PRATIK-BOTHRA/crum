class dustbin {
    constructor(x, y,width,height) {
      var options = {
          'isStatic':true,
          'friction':1.0,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      
      stroke('blue');
      fill('green');
      rect(pos.x, pos.y, this.width, this.height);
    }
  }