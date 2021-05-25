class Box {
    constructor(x,y){
      var  option = {
     'restitution':0.4,
     'density':0.04,
     'friction':1

      }

      this.body = Bodies.rectangle(x,y,50,50,option)
      this.width = 50;
      this.height = 50;
      World.add(world,this.body);

    }

    display(){
      var box=this.body.position;		
			push()
			translate(box.x, box.y);
			 rectMode(CENTER)
			 rotate(this.body.angle)
			fill(255,0,255)
	
			pop();
    }   
}