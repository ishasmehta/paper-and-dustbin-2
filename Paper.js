class Paper{
    constructor(x,y,radius){
        var options = {
            restitution: 0.9,
            density: 1.2,
            friction: 0.4
        }        
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

        this.radius = radius;
        this.image = loadImage("paper.png");
    }
    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius * 2 + 10,this.radius * 2 + 10);
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.radius,this.radius);
        pop();
    }
}