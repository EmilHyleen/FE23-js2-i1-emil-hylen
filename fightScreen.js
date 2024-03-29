import Emil from "./modules/Emil.js";
import Felix from "./modules/Felix.js";
import Clara from "./modules/Clara.js";
import GameManager from "./modules/GameManager.js";

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

const gameManager = new GameManager();
gameManager.FlipTurn();

gameManager.p1ButtonsParent.addEventListener('click', EvaluateDamage);
gameManager.p2ButtonsParent.addEventListener('click', EvaluateDamage);

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
            character2Instance.takeDamage(Damage);
            break;
        case 2:
            character1Instance.takeDamage(Damage);
            break;
        default:
            console.log("Something went very wrong, PlayerID not recognized");
    }
    
    gameManager.FlipTurn();
    UpdateDisplay();
}

function UpdateDisplay()
{
    const AnnouncerElem = document.getElementById("announcer");

    document.getElementById("p1NameDisplay").innerText = character1Instance.name;
    document.getElementById("p2NameDisplay").innerText = character2Instance.name;
    document.getElementById("p1HealthDisplay").innerText = 'Health: ' + character1Instance.health;
    document.getElementById("p2HealthDisplay").innerText = 'Health: ' + character2Instance.health;

    if (AnnouncerElem.innerText == "")
    {
        AnnouncerElem.innerText = "cool favourite animal!"
    }
    else
    {
        AnnouncerElem.innerText = "Fight!";
    }

    if (character1Instance.isDead())
    {
        AnnouncerElem.innerText = character2Instance.name + " wins!";
        document.getElementById("p1HealthDisplay").innerText = 'KO';
        gameManager.DisableAllButtons();
    }
    else if (character2Instance.isDead())
    {
        AnnouncerElem.innerText = character1Instance.name + " wins!";
        document.getElementById("p2HealthDisplay").innerText = 'KO';
        gameManager.DisableAllButtons();
    }
}
UpdateDisplay();