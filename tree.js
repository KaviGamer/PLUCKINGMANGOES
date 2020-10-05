class tree{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.treeWidth = 450;
        this.treeHeight = 600;
        this.treeThickness = 10;

        this.image = loadImage("images/tree.png");
        this.treeBody = Bodies.rectangle(this.x,this.y,this.treeWidth,this.treeThickness, {isStatic:true});


        World.add(world,this.treeBody);
        
    }
    display(){
        var pos=this.treeBody.position;
        push();
        translate(pos.x,pos.y+10);
        fill(255);
        imageMode(CENTER);
        image(this.image,0,-this.treeHeight,this.treeWidth,this.treeHeight);
        pop();
    }
}