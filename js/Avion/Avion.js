class Avion {
    _quantite;
    _nbrPlace;
    _envergure;
    //
    constructor(quantite, nbrPlace, envergure) {
        this._quantite = quantite;
        this._nbrPlace = nbrPlace;
        this._envergure = envergure;
    }
    //
    get quantite() {
        return this._quantite;
    }
    get nbrPlace() {
        return this._nbrPlace;
    }
    get envergure() {
        return this._envergure;
    }
    //
    set quantite(newQuantite) {
        this._quantite = newQuantite;
    }
    set nbrPlace(newNbrPlace) {
        this._nbrPlace = newNbrPlace;
    }
    set envergure(newEnvergure) {
        this._envergure = newEnvergure;
    }
    //
    toString() {
        return `${this.quantite}/${this.nbrPlace}/${this.envergure}/`;
    }
}