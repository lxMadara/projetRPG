const Character = require("./character");
const stats = require("../stats/stats.js");

class Guerrier extends Character {
    constructor(name) {
        super(name, "Guerrier", stats["Guerrier"]);
    }
}

module.exports = Guerrier;
