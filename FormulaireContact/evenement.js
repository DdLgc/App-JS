import Formulaire from './formulaire.js';

export const formulaire = new Formulaire("formulaire");

formulaire.maskChamp('societe');
formulaire.maskChamp('email');

formulaire.getElement('particulier').addEventListener('change', () => {
  formulaire.hideChamp('societe');
});
formulaire.getElement('professionnel').addEventListener('change', () => {
  formulaire.showChamp('societe');
});

formulaire.getElement('objet').addEventListener('change', () => {
  formulaire.isSelected('objet', "demande_de_contact", () => {
    formulaire.showChamp('email'), () => formulaire.hideChamp('email')
  });
});

formulaire.formulaireHtml.addEventListener('submit', (event) => {
  event.preventDefault();
  formulaire.affAnswers();
  console.log(formulaire.answers)
});
