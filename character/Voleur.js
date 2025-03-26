const Character = require("./character.js");
const stats = require("../stats/stats.js");

class Voleur extends Character {
    constructor(name) {
        super(name, "Voleur", stats["Voleur"]);
    }
}

module.exports = Voleur;
