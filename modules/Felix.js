import Move from "./Move.js";
import Fighter from "./Fighter.js"


export default class Felix extends Fighter {
    constructor(player1Or2) {

        const moves = [];
        
        moves.push(new Move('throw', 17));
        moves.push(new Move('step', 22));
        super(player1Or2, 'Felix', 100, moves);
    }
}