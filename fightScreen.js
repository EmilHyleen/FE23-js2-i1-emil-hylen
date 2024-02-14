import Emil from "./modules/Emil.js";
import Felix from "./modules/Felix.js";
import Clara from "./modules/Clara.js";
const searchParams = new URLSearchParams(window.location.href);
const class1 = searchParams.get('class1');
const class2 = searchParams.get('class2');
console.log(searchParams)
console.log("class1: " + class1 + '\nclass2 ' + class2);
let character1Instance;
let character2Instance;

switch (class1) {
  case "Emil":
    character1Instance = new Emil(1);
    break;
  case "Felix":
    character1Instance = new Felix(1);
    break;
  case "Clara":
    character1Instance = new Clara(1);
    break;
  default:
    console.log("Error in switch case");
}
switch (class2) {
  case "Emil":
    character2Instance = new Emil(2);
    break;
  case "Felix":
    character2Instance = new Felix(2);
    break;
  case "Clara":
    character2Instance = new Clara(2);
    break;
  default:
    console.log("Error in switch case");
}

character1Instance.addMoveButtons();
character2Instance.addMoveButtons();

const p1ButtonsContainer = document.querySelector(".p1MoveButtons");
const p2ButtonsContainer = document.querySelector(".p2MoveButtons");

const gameManager = new GameManager(p1ButtonsContainer, p2ButtonsContainer);
gameManager.FlipTurn();

p1ButtonsContainer.addEventListener('click', EvaluateDamage);
p2ButtonsContainer.addEventListener('click', EvaluateDamage);

function logTest() {
  console.log("This is a test");
}

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
    gameManager.FlipTurn();
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