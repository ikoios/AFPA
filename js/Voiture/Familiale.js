class Familiale extends Voiture {
    #volumeCoffre;
    constructor(nombrePlace, couleur, volumeCoffre) {
        super(nombrePlace, couleur);
        this.#volumeCoffre = volumeCoffre;
    }
    //
    get volumeCoffre() {
        return this.#volumeCoffre;
    }
    //
    set volumeCoffre(volumeCoffre) {
        this.#volumeCoffre = volumeCoffre;
    }
    //
    Revision() {
        return 'La familiale fait sa révision tous les 20 000km';
    }
    //
    setDetailsFamiliale() {
        return super.toString() + `Volume du coffre: ${this.volumeCoffre}`
    }
}