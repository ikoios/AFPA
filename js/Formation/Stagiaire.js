class Stagiaire extends Personne {
    constructor(nom, prenom, adresse, date, id, mail, niveau) {
        super(nom, prenom, adresse, date, id, mail);
        this.niveau = niveau;
    }
    setDetailsStagiaire() {
        return super.toString() + `niveau: ${this.niveau}`;
    }
}