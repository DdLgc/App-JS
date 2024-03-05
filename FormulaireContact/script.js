export default class Formulaire {
  constructor(id) {
    this.id = id;
    this.formulaireHtml = document.getElementById(this.id);
    this.formdata = new FormData(this.formulaireHtml);
    this.aswers = new Array();
  }

  getDiv(id) {
    return document.getElementById(id).parentNode;
  }

  getElement(id) {
    return document.getElementById(id);
  }

  maskChamp(id) {
    this.getDiv(id).classList.add("masque");
    this.getElement(id).required = false;
  }

  showChamp(id) {
    this.getDiv(id).classList.remove("disp");
    this.getDiv(id).classList.add("app");
    this.getElement(id).required = true;
  }

  hideChamp(id) {
    this.getDiv(id).classList.remove("app ");
    this.getDiv(id).classList.add("disp ");
    this.getElement(id).required = false;
  }

  isSelected(id, value, action, otherAction) {
    this.formdata = new FormData(this.formulaireHtml);
    if (this.formdata.get(id) == value) {
      action();
    } else {
      otherAction();
    }
  }
}
