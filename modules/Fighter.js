export default class Fighter {

    constructor(player1Or2, name, health, moves) {
        this.player1Or2 = player1Or2;
        this.name = name;
        this.health = health;
        this.moves = moves;
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





