const stats = require("./stats");

class Monstre {
    constructor(nom) {
        this.nom = nom;
        this.stats = stats[nom];
    }
}

const Monstres = {
    SLIME: new Monstre("Slime"),
    SQUELETTE: new Monstre("Squelette"),
    DRAGON: new Monstre("Dragon")
};

class MonstreProvider {
    static register(monstreEnum) {
        this.monstres = monstreEnum;
    }
}

MonstreProvider.register(Monstres);

module.exports = { Monstres, MonstreProvider };
