class GameView {
    static afficher(message) {
        console.log(message);
    }

    static demanderCommande() {
        const readlineSync = require('readline-sync');
        return readlineSync.question("Commande (N/S/E/O pour se déplacer, G/D pour tourner, Q pour quitter) : ").toUpperCase();
    }
}

module.exports = GameView;
