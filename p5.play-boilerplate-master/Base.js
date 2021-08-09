class Base{
    constructor(x,y,width,height,angle){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:1
          }
          this.body=Bodies.rectangle(x,y,width,height,options);
          this.image=loadImage("sprites/base.png")
          this.width=width;
          this.height=height
          World.add(myWorld,this.body);
    }
    display(){
        var pos=this.body.position;
        var angles=this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angles);
        fill("white")
        imageMode(CENTER);
        image (this.image,0,0,this.width,this.height);
  pop ();
    }
}