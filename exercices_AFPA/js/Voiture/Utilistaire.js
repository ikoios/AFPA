class Utilitaire extends Voiture {
    #ptac
    constructor(nombrePlace, couleur, ptac) {
        super(nombrePlace, couleur);
        this.#ptac = ptac;
    }
    //
    get ptac() {
        return this.#ptac;
    }
    //
    set ptac(ptac) {
        this.#ptac = ptac;
    }
    //
    Revision() {
        return `L'utilitaire fait sa révision tous les 20 000km`;
    }
    //
    setDetailsUtilitiare() {
        return super.toString() + `Poid total à charge: ${this.ptac}`
    }
}