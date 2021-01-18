class Chain{
    constructor(body1,body2){
        var option={
     bodyA:body1,
     bodyB:body2,
     length:40,
     stiffness:0.4
        }
        this.chain=Constraint.create(option)
        World.add(world,this.chain)
    }
    display(){
        strokeWeight(5)
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}