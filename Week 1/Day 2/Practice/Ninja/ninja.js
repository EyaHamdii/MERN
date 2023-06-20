class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strenght = 3;
    }
    sayName(){
        console.log(this.name);

    }
    showStats(){
        console.log(`${this.name},${this.health},${this.speed},${this.strenght}`);
    }
    drinkSake(){
        this.health += 10;
        console.log(`ninja's new health is ${this.health}`)
    }
}
const ninja1 = new Ninja("Hyabusa",10 ,3 ,3);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

