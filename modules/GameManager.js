export default class GameManager
{
    constructor()
    {
        this.p1ButtonsParent = document.querySelector('.p1MoveButtons');
        this.p2ButtonsParent = document.querySelector('.p2MoveButtons');
        
        this.counter = false;
    }

    FlipTurn()
    {
        this.SetIsButtonsDisabled(this.p1ButtonsParent, this.counter);
        this.SetIsButtonsDisabled(this.p2ButtonsParent, !this.counter);
        
        this.counter = !this.counter;
    }

    DisableAllButtons()
    {
        this.SetIsButtonsDisabled(this.p1ButtonsParent, true);
        this.SetIsButtonsDisabled(this.p2ButtonsParent, true);
    }

    SetIsButtonsDisabled(buttonParent, aFlag)
    {
        var buttons = buttonParent.querySelectorAll("button");
        for (let i = 0; i < buttons.length; ++i) 
        {
            buttons[i].disabled = aFlag;
        }
    }
}