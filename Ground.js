class Ground
{
    constructer(x,y,w,h){
        var options = {
            isStatic : true
        }
        
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world, this.body)
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        stroke(255);
        fill(0);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
      }
}