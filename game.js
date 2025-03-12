const readline = require('readline');
const Character = require('./character');

function startGame() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const validClasses = ["Guerrier", "Mage", "Voleur"];

    rl.question("Entrez le nom de votre personnage (1-15 caractères) : ", (name) => {
        if (!name || name.length < 1 || name.length > 15) {
            console.log("Nom invalide. Le nom doit contenir entre 1 et 15 caractères.");
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
            console.log("Personnage créé ! L'aventure commence !");
            rl.close();
        });
    });
}

startGame();

