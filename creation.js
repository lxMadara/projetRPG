/*const readline = require('readline');

class Character {
    constructor(name, characterClass) {
        this.name = name;
        this.class = characterClass;
        this.inventory = [];
        this.setStats(characterClass);
    }

    setStats(characterClass) {
        const statsByClass = {
            "Guerrier": { PV: 150, PM: 50, Force: 15, Intelligence: 5, Defense: 12, "Resistance Magique": 6, Agilite: 8, Chance: 5, Endurance: 10, Esprit: 4 },
            "Mage": { PV: 90, PM: 150, Force: 4, Intelligence: 15, Defense: 5, "Resistance Magique" : 12, Agilite: 7, Chance: 6, Endurance: 5, Esprit: 10 },
            "Voleur": { PV: 110, PM: 70, Force: 10, Intelligence: 7, Defense: 8, "Resistance Magique" : 7, Agilite: 15, Chance: 12, Endurance: 7, Esprit: 6 }
        };

        this.stats = statsByClass[characterClass] || {};
    }

    displayCharacter() {
        console.log(`Nom: ${this.name}`);
        console.log(`Classe: ${this.class}`);
        console.log("Statistiques:", this.stats);
    }
}

function startGame() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const validClasses = ["Guerrier", "Mage", "Voleur"];

    rl.question("Entrez le nom de votre personnage (1-15 caracteres) : ", (name) => {
        if (!name || name.length < 1 || name.length > 15) {
            console.log("Nom invalide. Le nom doit contenir entre 1 et 15 caracteres.");
            rl.close();
            return;
        }

        rl.question("Choisissez une classe (Guerrier, Mage, Voleur) : ", (characterClass) => {
            if (!validClasses.includes(characterClass)) {
                console.log("Classe invalide. Veuillez choisir parmi : Guerrier, Mage, Voleur.");
                rl.close();
                return;
            }

            const joueur = new Character(name, characterClass);
            joueur.displayCharacter();
            console.log("Personnage crée ! l'aventure Commence ");
            rl.close();
        });
    });
}

startGame();

*/