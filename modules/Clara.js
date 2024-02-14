import Move from "./Move.js";
import Fighter from "./Fighter.js"

export default class Clara extends Fighter {
    constructor(player1Or2) {
        const moves = [];
        
        moves.push(new Move('grapple', 35));
        moves.push(new Move('headbutt', 8));
        super(player1Or2, 'Clara', 200, moves);
    }
}