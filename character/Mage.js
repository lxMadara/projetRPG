const Character = require("./character");
const stats = require("../stats/stats.js");

class Mage extends Character {
    constructor(name) {
        super(name, "Mage", stats["Mage"]);
    }
}

module.exports = Mage;
