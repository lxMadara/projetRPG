class Character {
    constructor(name, characterClass, stats) {
        if (!name || name.length < 1 || name.length > 15) {
            throw new Error("Nom invalide");
        }

        if (!stats) {
            throw new Error("Statistiques non définies pour la classe choisie");
        }

        this.name = name;
        this.characterClass = characterClass;
        this.inventory = [];
        this.stats = stats;
    }

    displayCharacter() {
        console.log(`Nom: ${this.name}`);
        console.log(`Classe: ${this.characterClass}`);
        console.log("Statistiques:", this.stats);
    }
}

class Guerrier extends Character {
    constructor(name) {
        super(name, "Guerrier", { force: 10, intelligence: 3, agilité: 5 });
    }
}

class Mage extends Character {
    constructor(name) {
        super(name, "Mage", { force: 3, intelligence: 10, agilité: 5 });
    }
}

class Voleur extends Character {
    constructor(name) {
        super(name, "Voleur", { force: 5, intelligence: 5, agilité: 10 });
    }
}

module.exports = { Guerrier, Mage, Voleur };
