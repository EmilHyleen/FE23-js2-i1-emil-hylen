export default class GameManager
{
    constructor(p1ButtonsParent, p2ButtonsParent)
    {
        this.p1ButtonsParent = p1ButtonsParent;
        this.p2ButtonsParent = p2ButtonsParent;
        
        this.counter = false;
    }

    FlipTurn()
    {
        var p1Buttons = this.p1ButtonsParent.querySelectorAll("button");
        var p2Buttons = this.p2ButtonsParent.querySelectorAll("button");
        
        for (let i = 0; i < p1Buttons.length; ++i) 
        {
            p1Buttons[i].disabled = this.counter;
        }

        for (let i = 0; i < p2Buttons.length; ++i) 
        {
            p2Buttons[i].disabled = !this.counter;
        }
        
        this.counter = !this.counter;
    }
}