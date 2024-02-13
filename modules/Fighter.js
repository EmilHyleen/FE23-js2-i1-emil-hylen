export default class Fighter {

    constructor(name, health, moves) {
        this.name = name;
        this.health = health;
        this.moves = moves;
    }

    logFighterSpecs(){
        console.log(`
        Species: ${this.species} \n
        Weapon: ${this.weapon} \n
        Damage: ${this.damage} \n
        Health: ${this.health} 
        `)
    }

    TakeDamage(damage) {
        this.health -= damage;
    }

}

class Move {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
}

export class Emil extends Fighter {
    constructor() {
        this.name = 'Emil';
        this.health = 100;

        this.moves.push(new Move('punch', 25));
        this.moves.push(new Move('kick', 15));
    }
}

export class Felix extends Fighter {
    constructor() {
        this.name = 'Felix';
        this.health = 100;

        this.moves.push(new Move('punch', 25));
        this.moves.push(new Move('kick', 15));
    }
}