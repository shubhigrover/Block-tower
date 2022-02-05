class block{
    constructor(x,y,w,h){
    var options={
        isStatic:false
    }
    this.body=Bodies.rectangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
    World.add(world,this.body)
    }
    display(){
    var pos= this.body.position;
    var angle=this.body.angle;
    //pos.x=mouseX
    //pos.y=mouseY
    console.log(this.body)
    push()
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.w,this.h)
    pop()
    }
}