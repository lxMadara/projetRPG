const { Direction } = require('../mouvement/direction');

class ControleurDeplacement {
    constructor(joueur, grille) {
        this.joueur = joueur;
        this.grille = grille;
    }

    executerDeplacement(direction) {
        try {
            let directionEnum = new Direction(direction);
            this.joueur.mover.direction = directionEnum;
            let newPos = this.joueur.calculateNewPosition();

            if (!this._validerDeplacement(newPos)) {
                return this._analyserObstacle(newPos);
            }

            this.joueur.deplacer(newPos);
            return this._analyserContenuCase(newPos);
        } catch (error) {
            return "Commande invalide.";
        }
    }

    _validerDeplacement(position) {
        return this.grille.validerPosition(position[0], position[1]);
    }

    _analyserObstacle(position) {
        let [x, y] = position;
        if (!this.grille.validerPosition(x, y)) {
            return "Bord du monde atteint !";
        }
        if (this.grille.obtenirObstacle(x, y)) {
            return "Obstacle détecté !";
        }
        if (this.grille.obtenirMonstre(x, y)) {
            return "Monstre en vue !";
        }
        return "";
    }

    _analyserContenuCase(position) {
        let tresor = this.grille.obtenirTresor(position[0], position[1]);
        return tresor ? `Trésor ${tresor.nom} trouvé !` : "Déplacement réussi";
    }
}

module.exports = ControleurDeplacement;
