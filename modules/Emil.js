import Move from "./Move.js";
import Fighter from "./Fighter.js"

export default class Emil extends Fighter {
    constructor(player1Or2) {
        const moves = [];
        
        moves.push(new Move('punch', 25));
        moves.push(new Move('kick', 15));
        super(player1Or2, 'Emil', 100, moves);
    }
}