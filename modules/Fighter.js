export default class Fighter {

    constructor(player1Or2, name, health, moves) {
        this.player1Or2 = player1Or2;
        this.name = name;
        this.health = health;
        this.moves = moves;
        addAttackButtons();
    }

    
    takeDamage(lostDamage) {
        this.health -= lostDamage;
    }
    
    addMoveButtons() {
        const container = document.querySelector('.p' + this.player1Or2 + 'MoveButtons');
        Array.isArray(this.moves) 
        ? this.moves.forEach(move => {
            const button = document.createElement('button');
            button.value = `${this.player1Or2}-${move.damage}`;
            button.id = `${this.player1Or2}-${move.name}`;
            button.innerText = move.name;
            container.appendChild(button);
        })
        : '';
        
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
    constructor(player1Or2) {
        this.player1Or2 = player1Or2;
        const moves = [];
        
        moves.push(new Move('punch', 25));
        moves.push(new Move('kick', 15));
        super(player1Or2, 'Emil', 100, moves);
    }
}

export class Felix extends Fighter {
    constructor(player1Or2) {
        this.player1Or2 = player1Or2;

        const moves = [];
        
        moves.push(new Move('throw', 17));
        moves.push(new Move('step', 22));
        super(player1Or2, 'Felix', 100, moves);
    }
}