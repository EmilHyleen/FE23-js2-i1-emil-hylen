import Emil from "./modules/Emil.js";
import Felix from "./modules/Felix.js";

const emil = new Emil(1);
const felix = new Felix(2);

emil.addMoveButtons();
felix.addMoveButtons();

const p1ButtonsContainer = document.querySelector('.p1MoveButtons');
const p2ButtonsContainer = document.querySelector('.p2MoveButtons');


p1ButtonsContainer.addEventListener('click', logTest);

function logTest() {
    console.log('This is a test');
}




