

export default class Fighter {

    constructor(species, weapon, damage, health) {
        this.species = species;
        this.weapon = weapon;
        this.damage = damage;
        this.health = health;
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