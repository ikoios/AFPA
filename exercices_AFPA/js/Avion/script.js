let ligne = new Ligne (`carburant`, `nbrPlace`, `envergure`, `charge`);
let jet = new Jet (`carburant`, `nbrPlace`, `envergure`, `vitesse`);
let helicoptere = new Helicoptere (`carburant`, 'nbrPlace', `envergure`, `autonomie`);
let furtif = new Furtif (`carburant`, `nbrPlace`, `envergure`, `arme`);
//
console.log(ligne.setDetailsLigne());
console.log(jet.setDetailsJet());
console.log(helicoptere.setDetailsHelico());
console.log(furtif.setDetailsFurtif());