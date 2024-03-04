let stagiaire1 = new Personne( 'Petit', 'Alice', 'Lille', '01/01/01', 1, 'test@hotmail.fr', 'Première année');
let stagiaire2 = new Personne('Dylan', 'Bob', 'Lille', '01/01/01', 2, 'test@hotmail.fr', 'Première année');
let stagiaires = [stagiaire1, stagiaire2];
//
let formateur = new Formateur('ARAB', 'Mourad', 'Lille', '01/01/01', 3, 'test@hotmail.fr', 'DWWM', stagiaires)
//
let groupeDWWM = new Groupe('DWWM', formateur, stagiaires);
//
console.log(`Stagiaire 1: ${stagiaire1.toString()}`);
console.log(`Stagiaire 2: ${stagiaire2.toString()}`);
console.log(`Stagiaire groupe A: ${groupeDWWM.stagiaireName()}
Formateur groupe A: ${groupeDWWM.formateurName()}`);
// console.log(`Formateur groupe A: ${groupeDWWM.formateurName()}`);
console.log(`Mail de la session: 
Formateur: ${formateur.mail}
Stagiaires: ${groupeDWWM.stagiaireMail()}`)