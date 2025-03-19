const { Guerrier, Mage, Voleur } = require('./classes');

const guerrier = new Guerrier("Aragorn");
const mage = new Mage("Gandalf");
const voleur = new Voleur("Robin");

guerrier.displayCharacter();
mage.displayCharacter();
voleur.displayCharacter();
