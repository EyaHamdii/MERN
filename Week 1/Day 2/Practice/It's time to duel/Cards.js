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
}
class Effect extends Card {
    constructor(name, cost){
        super(name,cost)
    }
}
