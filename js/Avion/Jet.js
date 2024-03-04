class Jet extends Avion {
    #vitesse
    constructor(quantite, nbrPlace, envergure, vitesse) {
        super(quantite, nbrPlace, envergure);
        this.#vitesse = vitesse;
    }
    //
    get vitesse() {
        return this.#vitesse;
    }
    //
    set vitesse(newCharge) {
        this.#vitesse = newCharge;
    }
    //
    setDetailsJet() {
        return super.toString() + `${this.vitesse}`;
    }
}