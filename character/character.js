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

module.exports = Character;
