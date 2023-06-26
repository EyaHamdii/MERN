
class Unit  {
    constructor(name, cost,power,res){
        this.name=name;
        this.cost=cost;
        this.power=power;
        this.res=res;
    }
    play=(n)=>this.res+=n;
    play2=(n)=>this.power+=n;
    show=()=> console.log(`${this.name} , ${this.cost} , ${this.power} , ${this.res}`)
    attack=(unit)=> console.log(`the ${this.name} attack the ${unit.name}`)
    
    play( target ) {
            if( target instanceof Unit ) {
                // implement card text here
            } else {
                throw new Error( "Target must be a unit!" );
            }
        }}
        

class Effect{
    constructor(name, cost,text, stat, magnitude){
        this.name=name;
        this.cost=cost;
        this.text=text
        this.stat=stat
        this.magnitude=magnitude
        // `${this.magnitude} the target's ${this.stat} by ${this.magnitude}`
    }

}
const ninja1 =new Unit('Red Belt Ninja',3,3,4);
const ninja2 =new Unit('Black Belt Ninja',4,5,4);
const effect1 =new Effect('Hard Algorithm',2 ,"increase target's resilience by 3","resilience",+3);
const effect2 =new Effect('Unhandled Promise Rejection',1,"reduce target's resilience by 2","resilience",-2);
const effect3 =new Effect('Pair Programming',3,"increase target's power by 2","power", +2);

ninja1.play(n=3);
ninja1.show();
ninja1.play(n=-2);
ninja1.show();
ninja1.play2(n=2);
ninja1.show();
ninja1.attack(ninja2)
