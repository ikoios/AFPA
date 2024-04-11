class Helicoptere extends Avion {
    #autonomie
    constructor(quantite, nbrPlace, envergure, autonomie) {
        super(quantite, nbrPlace, envergure);
        this.#autonomie = autonomie;
    }
    //
    get autonomie() {
        return this.#autonomie;
    }
    //
    set autonomie(newautonomie) {
        this.#autonomie = newautonomie;
    }
    //
    setDetailsHelico() {
        return super.toString() + `${this.autonomie}`;
    }
}