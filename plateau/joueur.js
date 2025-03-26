const { CharacterMover } = require('./mouvement/personnagemoove');
const { Direction } = require('./mouvement/direction');

class Joueur {
    constructor() {
        this.mover = new CharacterMover([0, 0], Direction.NORD);
        this.inventaire = [];
    }

    calculateNewPosition() {
        return this.mover.calculateNewPosition();
    }

    deplacer(newPosition) {
        this.mover.position = newPosition;
    }

    get position() {
        return this.mover.position;
    }

    get direction() {
        return this.mover.direction;
    }

    tourner(commande) {
        this.mover.rotate(commande);
    }
}

module.exports = Joueur;
