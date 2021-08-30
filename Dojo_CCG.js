class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        // reduce target res by power
        target.res -= this.power;
    }

    showStats(){
        console.log(`resilience is ${this.res} and power is ${this.power}`)
    }
}

class Effect extends Card{
    constructor(name,cost, text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
        }

    play(target){
        if(target instanceof Unit){
            const getStat = this.stat;
            if(getStat === "resilience"){
                target.res += this.magnitude;
            }
            if(getStat === "power"){
                target.power += this.magnitude;
            }
        }
        else{
            throw new Error("Target must be a unit!");
        }
    }
}

// Unit Cards
const Red = new Unit("Red Belt Ninja", 3, 3,4);
const Black = new Unit("Black Belt Ninja", 4,5,4);

// Effect Cards
const card1 = new Effect("Hard Algorithms", "2", "increase target's resilience by 3", "resilience", 3 );
const card2 = new Effect("Unhandled Promise Rejection", "1", "reduce target's resilience by 2", "resilience", -2);
const card3 = new Effect("Pair Programming", "3", "increase target's power by 2", "power", 2)

card1.play(Red);

console.log(Red.power);
card3.play(Red);
console.log(Red.power);

Black.showStats();
Red.attack(Black);
Black.showStats();



