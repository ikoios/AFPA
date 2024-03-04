class Furtif extends Avion {
    #arme
    constructor(quantite, nbrPlace, envergure, arme) {
        super(quantite, nbrPlace, envergure);
        this.#arme = arme;
    }
    //
    get arme() {
        return this.#arme;
    }
    //
    set arme(newarme) {
        this.#arme = newarme;
    }
    //
    setDetailsFurtif() {
        return super.toString() + `${this.arme}`;
    }
}