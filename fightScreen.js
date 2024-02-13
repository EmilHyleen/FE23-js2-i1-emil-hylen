import Emil from "./modules/Fighter.js";
import Felix from "./modules/Fighter.js";
import Fighter from "./modules/Fighter.js";

let emil = new Emil();
let felix = new Felix();

let p1Name = "Emil";
let p1Health = 100;
let p1AttackDmg = 25;

let p2Name = "Felix";
let p2Health = 100;
let p2AttackDmg = 25;

function UpdateDisplay()
{
    document.getElementById("p1HealthDisplay").innerText = 'Health: ' + p1Health;
    document.getElementById("p2HealthDisplay").innerText = 'Health: ' + p2Health;
    
    document.getElementById("p1AttackBtn").innerText = 'Attack (' + p1AttackDmg + ')';
    document.getElementById("p2AttackBtn").innerText = 'Attack (' + p2AttackDmg + ')';
}

function InitDisplay()
{
    document.getElementById("announcer").innerText = "Fight!";

    document.getElementById("p1NameDisplay").innerText = p1Name;
    document.getElementById("p2NameDisplay").innerText = p2Name;
    
    document.getElementById("p1AttackBtn").disabled = false;
    document.getElementById("p1PowerUpBtn").disabled = false;
    document.getElementById("p2AttackBtn").disabled = true;
    document.getElementById("p2PowerUpBtn").disabled = true;

    UpdateDisplay();
}
InitDisplay();

function ResetGame()
{
    p1Health = 100;
    p2Health = 100;

    InitDisplay();
}

function ToggleTurn()
{
    if (document.getElementById("p2AttackBtn").disabled)
    {
        document.getElementById("p1AttackBtn").disabled = true;
        document.getElementById("p1PowerUpBtn").disabled = true;
        document.getElementById("p2AttackBtn").disabled = false;
        document.getElementById("p2PowerUpBtn").disabled = false;
    }
    else
    {
        document.getElementById("p1AttackBtn").disabled = false;
        document.getElementById("p1PowerUpBtn").disabled = false;
        document.getElementById("p2AttackBtn").disabled = true;
        document.getElementById("p2PowerUpBtn").disabled = true;
    }
}

function DisableAll()
{
    document.getElementById("p1AttackBtn").disabled = true;
    document.getElementById("p2AttackBtn").disabled = true;
    document.getElementById("p1PowerUpBtn").disabled = true;
    document.getElementById("p2PowerUpBtn").disabled = true;
}

function EvaluateWinner()
{
    if (p1Health <= 0 && p2Health > 0)
    {
        document.getElementById("announcer").innerText = "Player 2 Wins";
        DisableAll();
    }
    else if (p2Health <= 0 && p1Health > 0)
    {
        document.getElementById("announcer").innerText = "Player 1 Wins";
        DisableAll();
    }
    else if (p1Health <= 0 && p2Health <= 0)
    {
        document.getElementById("announcer").innerText = "Draw";
        DisableAll();
    }
}

//FIXME: All attacks/player actions needs to come from a class
function P1Attack()
{
    p2Health -= p1AttackDmg;

    UpdateDisplay();
    ToggleTurn();
    EvaluateWinner();
}

function P2Attack()
{
    p1Health -= p2AttackDmg;

    UpdateDisplay();
    ToggleTurn();
    EvaluateWinner();
}

function P1PowerUp()
{
    p1AttackDmg += 5;
    
    UpdateDisplay();
    ToggleTurn();
}

function P2PowerUp()
{
    p2AttackDmg += 5;

    UpdateDisplay();
    ToggleTurn();
}