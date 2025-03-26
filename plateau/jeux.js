const ControleurDeplacement = require('./plateau/controleur_deplacement');
const Grille = require('./plateau/grille');
const Joueur = require('./joueur');
const GameView = require('./gameview');
const PersonnageFactory = require('./personnage/personnageFactory');
const Classes = require('./personnage/classes');

class Jeu {
    constructor(view) {
        this.view = view;
        this._grille = new Grille(5, 5); 
        this._joueur = new Joueur();
        this._controleur = new ControleurDeplacement(this._joueur, this._grille);
        this._personnage = PersonnageFactory.createPersonnage(Classes);
    }

    demarrer() {
        this.view.afficher(this._personnage.afficherRecapitulatif());
        this._bouclePrincipale();
    }

    _bouclePrincipale() {
        let commande;
        do {
            commande = this.view.demanderCommande();
            if (commande === 'Q') {
                this.view.afficher("Fin du jeu.");
                break;
            }

            if (['N', 'S', 'E', 'O'].includes(commande)) {
                let message = this._controleur.executerDeplacement(commande);
                this.view.afficher(message);
            } else if (['G', 'D'].includes(commande)) {
                this._joueur.tourner(commande);
                this.view.afficher(`Vous faites maintenant face à ${this._joueur.direction}.`);
            } else {
                this.view.afficher("Commande non reconnue.");
            }

            this.view.afficher(`Statut -> Position : ${this._joueur.position}, Orientation : ${this._joueur.direction}`);
        } while (commande !== 'Q');
    }
}

module.exports = Jeu;
