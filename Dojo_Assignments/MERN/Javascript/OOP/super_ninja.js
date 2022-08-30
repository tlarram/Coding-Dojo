class Ninja {
    constructor(name, health=10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name)
    }   
    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Health:${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);

    }
    drinkSake() {
        this.health += 10
    }
}
const ninja1 = new Ninja("Naruto");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(name) {
        super(name, 200)
        this.wisdom = 10
        this.speed=10
        this.strength=10
    }
    speakWisdom() {
        this.drinkSake()
        console.log("What one programmer can do in one month, two programers can do in two months")
        
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();