class Ligne extends Avion {
    #charge
    constructor(quantite, nbrPlace, envergure, charge) {
        super(quantite, nbrPlace, envergure);
        this.#charge = charge;
    }
    //
    get charge() {
        return this.#charge;
    }
    //
    set charge(newCharge) {
        this.#charge = newCharge;
    }
    //
    setDetailsLigne() {
        return super.toString() + `${this.charge}`;
    }
}