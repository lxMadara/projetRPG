const Guerrier = require("../character/Guerrier.js");
const Mage = require("../character/Mage.js");
const Voleur = require("../character/Voleur.js");

class CharacterFactory {
    static createCharacter(name, characterClass) {
        const classes = {
            "Guerrier": Guerrier,
            "Mage": Mage,
            "Voleur": Voleur
        };

        const CharacterType = classes[characterClass];

        if (!CharacterType) {
            throw new Error("Classe invalide. Veuillez choisir parmi : Guerrier, Mage, Voleur.");
        }

        return new CharacterType(name);
    }
}

module.exports = CharacterFactory;
