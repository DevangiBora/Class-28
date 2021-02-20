class Chain{

        constructor(bodyA,pointB){

            var option = {
                bodyA : bodyA,
                pointB : pointB,
                length : 20,
                stiffness: 0.06

            }
            this.chain = Matter.Constraint.create(
                option
            );
                this.pointB = pointB;

            World.add(world,this.chain);

        }
        
        fly(){

            this.chain.bodyA = null;

        }
    



        display(){
            if(this.chain.bodyA){

                var pointB = this.pointB;
                var pointA = this.chain.bodyA.position;
            
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
            
            
        }




}





























