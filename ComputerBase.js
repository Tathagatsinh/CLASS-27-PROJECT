class ComputerBase{

consrtuctor (x,y,width,height);

 options = {

isStatic: true};

this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
this.image = loadImage("./assets/base2.png")

world.add(world, this.body);

}

display () {

var pos = this.body.position;
var angle = this.body.angle;
Matter.Body.setAngle(this.body, -PI / 2);

push();
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);

pop();
}