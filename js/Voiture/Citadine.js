class Citadine extends Voiture {
    #longueur;
    //
    constructor(nombrePlace, couleur, longueur) {
        super(nombrePlace, couleur);
        this.#longueur = longueur;
    }
    //
    get longueur() {
        return this.#longueur;
    }
    //
    set longueur(longueur) {
        this.#longueur = longueur;
    }
    //
    Revision() {
        return 'La citadine fait sa révision tous les 20 000km'
    }
    //
    setDetailsCitadine() {
        return super.toString() + `Longueur: ${this.longueur}`
    }
}