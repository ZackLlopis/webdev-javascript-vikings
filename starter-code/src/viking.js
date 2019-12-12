// Soldier
class Soldier {
constructor(health, strength) {
this.health = health;
this.strength = strength;
}
attack() {
    return this.strength
}
recieveDamage(damageTaken) {
this.health - damageTaken
}
}
// Viking
class Viking extends Soldier {
    constructor (name, health, stregnth){
    this.name = name;
    super(health, strength);
    }
recieveDamage(damage) {
    this.health - damage;
    if (this.health > 0) {
        return `${this.name} has recieved ${this.damage} points of damage.`
    }else if (this.health <= 0) {
        return `${this.name} has died in act of combat.`
    }
}
battleCry() {
    return 'Odin Owns You All!'
}
}

// Saxon
class Saxon extends Soldier {
    constructor(health, stregnth) {
        super(health, stregnth);
    }
receiveDamage(damage) {
    this.health - damage;
    if (this.health > 0) {
        return `A Saxon has recieved ${this.damage} points of damage.`
    }else if (this.health < 0) {
        return `A Saxon has died in combat.`
    }

}
}


// War
class War {
    constructor() {
         this.vikingArmy = [];
         this.saxonArmy = [];
    }
addViking(Viking) {
    this.vikingArmy.push(Viking);
}
addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
}
vikingAttack() {
    this.saxonArmy.receiveDamage(damage = Viking.stregnth);
    if (this.health < 0) {
        this.saxonArmy.splice(Saxon);
    }
return `Saxon recieved ${this.damage} from a Viking` 
}
saxonAttack() {
    this.vikingArmy.receiveDamage(damage = Saxon.stregnth);
    if (this.health < 0) {
        this.vikingArmy.splice(Viking);
    }
return `Viking recieved ${this.damage} from a Saxon` 
}
showStatus() {
    if (this.saxonArmy.length < 0) {
        return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length < 0) {
        return "Saxons have fought for their lives and survive another day..."
    }
    else (this.vikingArmy.length && this.saxonArmy.length > 0) 
        return "Vikings and Saxons are still in the thick of battle."
    
}

}
