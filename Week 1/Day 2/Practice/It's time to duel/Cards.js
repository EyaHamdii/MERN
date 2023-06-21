class Card{
    constructor(name,cost){
        this.name= name;
        this.cost=cost
    }  
}
class Unit extends Card {
    constructor(name, cost,power,res){
        super(name,cost)
        this.power=power;
        this.res=res;
    }
    attack(target){
        `${target.res}-${this.power}`
    }
    play( target ) {
            if( target instanceof Unit ) {
                // implement card text here
            } else {
                throw new Error( "Target must be a unit!" );
            }
        }
        
}
class Effect extends Card {
    constructor(name, cost, stat, magnitude){
        super(name,cost)
        this.stat=stat
        this.magnitude=magnitude
        `${this.magnitude} the target's ${this.stat} by ${this.magnitude}`
    }

}
const ninja1 =new Unit('Red Belt Ninja',3,3,4);
const ninja2 =new Unit('Red Belt Ninja',4,5,4);
const effect1 =new Effect('Hard Algorithm',2 ,resilience,+3);
const effect2 =new Effect('Unhandled Promise Rejection',1,resilience,-2);
const effect3 =new Effect('Pair Programming',3,power, +2);