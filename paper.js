class Paper {
    constructor(x, y,radius) {
      var options = {
        'isStatic':true,
        'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.radius=radius
      this.body = Bodies.circle(x,y,radius, options);
    
      
      World.add(world, this.body);
    }
    display(){
      fill('yellow')
      stroke('blue')
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.options);
     this.body.position.x=mouseX;
     this.body.position.y=mouseY;
      

     
      
     
    }
  }