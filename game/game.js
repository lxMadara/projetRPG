const readline = require('readline');
const CharacterFactory = require('../services/CharacterFactory');

class Game {
    static start() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Entrez le nom de votre personnage (1-15 caractères) : ", (name) => {
            rl.question("Choisissez une classe (Guerrier, Mage, Voleur) : ", (characterClass) => {
                try {
                    const player = CharacterFactory.createCharacter(name, characterClass);
                    player.displayCharacter();
                    console.log("Personnage créé ! L'aventure commence !");
                } catch (error) {
                    console.log(error.message);
                }
                rl.close();
            });
        });
    }
}

module.exports = Game;
