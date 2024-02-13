export default class Fighter {

    constructor(name, health, moves) {
        this.name = name;
        this.health = health;
        this.moves = moves;
    }

    
    TakeDamage(move) {
        this.health -= damage;
    }
    
    logFighterSpecs(){
        console.log(`
        Species: ${this.species} \n
        Weapon: ${this.weapon} \n
        Damage: ${this.damage} \n
        Health: ${this.health} 
        `)
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
        const moves = [];
        
        moves.push(new Move('punch', 25));
        moves.push(new Move('kick', 15));
        super('Emil', 100, moves);
    }
}

export class Felix extends Fighter {
    constructor() {
        const moves = [];
        
        moves.push(new Move('throw', 17));
        moves.push(new Move('step', 22));
        super('Felix', 100, moves);
    }
}