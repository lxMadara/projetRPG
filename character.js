class Character {
    constructor(name, characterClass) {
        this.name = name;
        this.class = characterClass;
        this.inventory = [];
        this.setStats(characterClass);
    }

    setStats(characterClass) {
        const statsByClass = require('./stats');
        this.stats = statsByClass[characterClass] || {};
    }

    displayCharacter() {
        console.log(`Nom: ${this.name}`);
        console.log(`Classe: ${this.class}`);
        console.log("Statistiques:", this.stats);
    }
}

module.exports = Character;
