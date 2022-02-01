const PRIXCAFE = 1.2;
let PIECEINSERER = 0;
let PiecesTotalInserer = PIECEINSERER;
let PrixRestantAPayer = PRIXCAFE - PiecesTotalInserer;
let Remboursement = 0;

function round(num) {
  var m = Number((Math.abs(num) * 100).toPrecision(15));
  return (Math.round(m) / 100) * Math.sign(num);
}

// console.log("prix inserer " + PIECEINSERER);
// console.log("prix total inserer " + PiecesTotalInserer);
// console.log("prix restant à payer " + round(PrixRestantAPayer));

// PIECEINSERER = 0;
// PIECEINSERER = 1;
// PiecesTotalInserer += PIECEINSERER;
// PrixRestantAPayer = PRIXCAFE - PiecesTotalInserer;

// if (PRIXCAFE > PiecesTotalInserer) {
//   console.log("Merci de rajouter des pièces");
// } else {
//   console.log("Voila votre café");
// }

const DEUXEUROS = document.querySelector("#DEUXEUROS");
const UNEUROS = document.querySelector("#UNEUROS");
const CINQUANTECENTIMES = document.querySelector("#CINQUANTECENTIMES");
const VINGTCENTIMES = document.querySelector("#VINGTCENTIMES");
const DIXCENTIMES = document.querySelector("#DIXCENTIMES");
const CINQUECENTIMES = document.querySelector("#CINQUECENTIMES");
const DEUXCENTIMES = document.querySelector("#DEUXCENTIMES");
const UNCENTIME = document.querySelector("#UNCENTIME");
const TXTECRAN = document.querySelector(".txt-ecran");

console.log(TXTECRAN);

function test() {
  console.log("pièce inserer " + PIECEINSERER);
  console.log("pièce total " + round(PiecesTotalInserer));
  console.log("prix restant à payer " + round(PrixRestantAPayer));
}

function resultat() {
  TXTECRAN.innerHTML -= `<p>Reste à payer ${round(PrixRestantAPayer)} €</p>`;
  TXTECRAN.innerHTML += `<p>Reste à payer ${round(PrixRestantAPayer)} €</p>`;
  if (PrixRestantAPayer < 0) {
    PrixRestantAPayer =
      PrixRestantAPayer - PrixRestantAPayer - PrixRestantAPayer;
    TXTECRAN.innerHTML -= `<p>Remboursement ${round(PrixRestantAPayer)} €</p>`;
    TXTECRAN.innerHTML += `<p>Remboursement ${round(PrixRestantAPayer)} €</p>`;
  }
}

function refus() {
  TXTECRAN.innerHTML -= `<p>Pièce refusée</p>`;
  TXTECRAN.innerHTML += `<p>Pièce refusée</p>`;
}

DEUXEUROS.addEventListener("click", () => {
  PIECEINSERER = 2;
  PiecesTotalInserer += PIECEINSERER;
  PrixRestantAPayer = PRIXCAFE - PiecesTotalInserer;
  resultat();
  test();
});
UNEUROS.addEventListener("click", () => {
  PIECEINSERER = 1;
  PiecesTotalInserer += PIECEINSERER;
  PrixRestantAPayer = PRIXCAFE - PiecesTotalInserer;
  resultat();
  test();
});
CINQUANTECENTIMES.addEventListener("click", () => {
  PIECEINSERER = 0.5;
  PiecesTotalInserer += PIECEINSERER;
  PrixRestantAPayer = PRIXCAFE - PiecesTotalInserer;
  resultat();
  test();
});
VINGTCENTIMES.addEventListener("click", () => {
  PIECEINSERER = 0.2;
  PiecesTotalInserer += PIECEINSERER;
  PrixRestantAPayer = PRIXCAFE - PiecesTotalInserer;
  resultat();
  test();
});
DIXCENTIMES.addEventListener("click", () => {
  PIECEINSERER = 0.1;
  PiecesTotalInserer += PIECEINSERER;
  PrixRestantAPayer = PRIXCAFE - PiecesTotalInserer;
  resultat();
  test();
});
CINQUECENTIMES.addEventListener("click", () => {
  PIECEINSERER = 0.05;
  PiecesTotalInserer += PIECEINSERER;
  PrixRestantAPayer = PRIXCAFE - PiecesTotalInserer;
  resultat();
  test();
});
DEUXCENTIMES.addEventListener("click", () => {
  refus();
  test();
});
UNCENTIME.addEventListener("click", () => {
  refus();
  test();
});
