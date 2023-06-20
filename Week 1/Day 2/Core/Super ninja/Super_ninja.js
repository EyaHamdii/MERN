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

class Sensei extends Ninja{
    constructor(name, wisdom=10){
        super(name, 200, 10, 10)
        this.wisdom = wisdom
    }
    speakWisdom(){
        super.drinkSake()
        this.health += 10;
        console.log('What one programmer can do in one month, two programmers can do in two months.')
}
    showStats(){
            console.log(`Name:${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strenth: ${this.strenght}`);
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();