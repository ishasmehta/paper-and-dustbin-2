class Dustbin{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.boxLeftBody = Bodies.rectangle(x-100, y, 20,200 , options);
        World.add(world, this.boxLeftBody);

        this.boxBottomBody = Bodies.rectangle(x, y+90, 200,20 , options);
        World.add(world, this.boxBottomBody);

        this.boxRightBody = Bodies.rectangle(x+100 , y, 20,200 , options);
        World.add(world, this.boxRightBody);

        this.x = x;
        this.y = y;
        this.image = loadImage("dustbingreen.png");
    }
    display()
    {
        push();
        translate(this.x,this.y);
        imageMode(CENTER);
        image(this.image,0,0,200,200);
        
        pop();
    }
}