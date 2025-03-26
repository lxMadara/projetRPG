class Character {
    constructor(name, characterClass, stats) {
        this.validateName(name);
        this.name = name;
        this.characterClass = characterClass;
        this.inventory = [];
        this.stats = stats;
    }

    validateName(name) {
        if (!name || name.length < 1 || name.length > 15) {
            throw new Error("Nom invalide");
        }
    }

    displayCharacter() {
        console.log(`Nom: ${this.name}`);
        console.log(`Classe: ${this.characterClass}`);
        console.log("Statistiques:", this.stats);
    }
}

module.exports = Character;
