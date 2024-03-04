class Groupe {
    constructor(specialite, formateur, groupeDWWM) {
        this.specialite = specialite;
        this.formateur = formateur;
        this.groupeDWWM = groupeDWWM;
    }
    //
    formateurName() {
        return `Nom: ${this.formateur.nom}, Prenom: ${this.formateur.prenom}`
    }
    //
    stagiaireName() {
        let mess ='';
        //
        this.groupeDWWM.forEach((stagiaire) => mess += (`Nom: ${stagiaire.nom}, prenom: ${stagiaire.prenom} | `));
        //
        return mess;
    }
    //
    stagiaireMail() {
        let mail = '';
        //
        this.groupeDWWM.forEach((stagiaire) => mail += (`${stagiaire.nom}, ${stagiaire.prenom}, Mail: ${stagiaire.mail} | `));
        //
        return mail;
    }
}