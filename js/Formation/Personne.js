class Personne {
    constructor(nom, prenom, adresse, date, id, mail) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.date = date;
        this.id = id;
        this.mail = mail;
    }
    //
        toString() {
            return  `Nom: ${this.nom}, Prénom: ${this.prenom}, Adresse: ${this.adresse}, Date de naissance: ${this.date}, Id: ${this.id}, Mail: ${this.mail}`;
        }
};