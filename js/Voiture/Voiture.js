class Voiture {
    _nombrePlace;
    _couleur;
    //
    constructor (nombrePlace, couleur) {
        this._nombrePlace = nombrePlace;
        this._couleur = couleur;
    }
    get nombrePlace() {
        return this._nombrePlace;
    }
    get couleur() {
        return this._couleur;
    }
    set nombrePlace(nombrePlace) {
        this._nombrePlace = nombrePlace;
    }
    set couleur(couleur) {
        this._couleur = couleur;
    }
    //
    toString() {
        return `Nombre de place: ${this.nombrePlace}, Couleur: ${this.couleur}`;
    }
}