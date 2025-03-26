class Grille {
    constructor(largeur = 5, hauteur = 5) {
        this._largeur = largeur;
        this._hauteur = hauteur;
        this._monstres = {};
        this._tresors = {};
        this._obstacles = {};
    }

    validerPosition(x, y) {
        return x >= 0 && x < this._largeur && y >= 0 && y < this._hauteur;
    }

    ajouterMonstre(x, y, monstre) {
        if (!this.validerPosition(x, y)) {
            throw new Error("Position invalide");
        }
        this._monstres[`${x},${y}`] = monstre;
    }

    obtenirMonstre(x, y) {
        return this._monstres[`${x},${y}`];
    }

    ajouterTresor(x, y, tresor) {
        if (!this.validerPosition(x, y)) {
            throw new Error("Position invalide");
        }
        this._tresors[`${x},${y}`] = tresor;
    }

    obtenirTresor(x, y) {
        return this._tresors[`${x},${y}`];
    }

    ajouterObstacle(x, y) {
        if (!this.validerPosition(x, y)) {
            throw new Error("Position invalide");
        }
        this._obstacles[`${x},${y}`] = true;
    }

    obtenirObstacle(x, y) {
        return this._obstacles[`${x},${y}`];
    }

    genererMonstresAleatoires(monstresDisponibles, nombre) {
        for (let i = 0; i < nombre; i++) {
            let x = Math.floor(Math.random() * this._largeur);
            let y = Math.floor(Math.random() * this._hauteur);
            this.ajouterMonstre(x, y, monstresDisponibles[Math.floor(Math.random() * monstresDisponibles.length)]);
        }
    }
}

module.exports = Grille;
