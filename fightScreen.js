import Emil from "./modules/Fighter.js";
import Felix from "./modules/Fighter.js";

let emil = new Emil();
let felix = new Felix();

p1ButtonsContainer.addEventListener('click', EvaluateDamage);
p2ButtonsContainer.addEventListener('click', EvaluateDamage);

function EvaluateDamage({target})
{
    const Data = target.value.split('-');
    const AttackingPlayerID = parseInt(Data[0]);
    const Damage = parseInt(Data[1]);

    switch(AttackingPlayerID)
    {
        case 1:
            felix.takeDamage(Damage);
            break;
        case 2:
            emil.takeDamage(Damage);
            break;
        default:
            console.log("Something went very wrong, PlayerID not recognized");
    }
    UpdateDisplay();
}

function UpdateDisplay()
{
    const AnnouncerElem = document.getElementById("announcer");
    if (emil.isDead())
    {
        AnnouncerElem.innerText = felix.name + " wins!";
    }
    else if (felix.isDead())
    {
        AnnouncerElem.innerText = emil.name + " wins!";
    }
    else
    {
        AnnouncerElem.innerText = "Fight!";
    }

    document.getElementById("p1NameDisplay").innerText = emil.name;
    document.getElementById("p2NameDisplay").innerText = felix.name;
    document.getElementById("p1HealthDisplay").innerText = 'Health: ' + emil.health;
    document.getElementById("p2HealthDisplay").innerText = 'Health: ' + felix.health;
}
UpdateDisplay();