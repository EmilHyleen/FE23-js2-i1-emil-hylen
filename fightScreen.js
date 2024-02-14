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


p1ButtonsContainer.addEventListener("click", logTest);

function logTest() {
  console.log("This is a test");
}
