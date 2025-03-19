const stats = require('./stats');
const Character = require('./character');


class Guerrier extends Character {
    constructor(name) {
        super(name, "Guerrier", stats["Guerrier"]);
    }
}

class Mage extends Character {
    constructor(name) {
        super(name, "Mage", stats["Mage"]);
    }
}

class Voleur extends Character {
    constructor(name) {
        super(name, "Voleur", stats["Voleur"]);
    }
}

module.exports = { Guerrier, Mage, Voleur };
