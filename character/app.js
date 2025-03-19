const { Guerrier, Mage, Voleur } = require('./classes');

const guerrier = new Guerrier("staline");
const mage = new Mage("hitler");
const voleur = new Voleur("maximu");

guerrier.displayCharacter();
mage.displayCharacter();
voleur.displayCharacter();
