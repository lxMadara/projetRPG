const readline = require('readline');
const { Guerrier, Mage, Voleur } = require('./classes');

function startGame() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Entrez le nom de votre personnage (1-15 caractères) : ", (name) => {
        if (!name || name.length < 1 || name.length > 15) {
            console.log("Nom invalide. Le nom doit contenir entre 1 et 15 caractères.");
            rl.close();
            return;
        }

        rl.question("Choisissez une classe (Guerrier, Mage, Voleur) : ", (characterClass) => {
            let joueur;

            switch (characterClass) {
                case "Guerrier":
                    joueur = new Guerrier(name);
                    break;
                case "Mage":
                    joueur = new Mage(name);
                    break;
                case "Voleur":
                    joueur = new Voleur(name);
                    break;
                default:
                    console.log("Classe invalide. Veuillez choisir parmi : Guerrier, Mage, Voleur.");
                    rl.close();
                    return;
            }

            joueur.displayCharacter();
            console.log("Personnage créé ! L'aventure commence !");
            rl.close();
        });
    });
}

startGame();
