class Formateur extends Personne {
    constructor (nom, pernom, adresse, date, id, mail, specialite, groupe) {
        super(nom, pernom, adresse, date, id, mail)
        this.specialite = specialite;
        this.groupe = groupe;
    }
    //
    setDetailsFormateur() {
        return super.toString() + `Spécialité: ${this.specialite}, Groupe: ${this.groupe}`
    }
}