const divClock = document.createElement('div');
divClock.setAttribute('class', 'clock');
document.body.appendChild(divClock);

const divWrap = document.createElement('div');
divWrap.setAttribute('class', 'wrap');
divClock.appendChild(divWrap);

const spanHeure = document.createElement('span');
spanHeure.setAttribute('class', 'heure');
divWrap.appendChild(spanHeure);

const spanMinute = document.createElement('span');
spanMinute.setAttribute('class', 'minute');
divWrap.appendChild(spanMinute);

const spanSeconde = document.createElement('span');
spanSeconde.setAttribute('class', 'seconde');
divWrap.appendChild(spanSeconde);

const spanDot = document.createElement('span');
spanDot.setAttribute('class', 'dot');
divWrap.appendChild(spanDot);

function clock() {
    //Initialise la date actuelle
    let date = new Date();
    //Initialise la fin du tour à 12
    let heures = ((date.getHours() + 11) % 12 + 1);
    //Initialise les minutes entre 0 et 59
    let minutes = date.getMinutes();
    //Initialise les secondes entre 0 et 59
    let secondes = date.getSeconds();
    let heure = heures * 30;
    let minute = minutes * 6;
    let seconde = secondes * 6;

    //Animation 
    document.querySelector('.heure').style.transform = `rotate(${heure}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
    document.querySelector('.seconde').style.transform = `rotate(${seconde}deg)`;
}
clock();
setInterval(clock, 1000);


const divClockNum = document.createElement('div');
divClockNum.setAttribute('id', 'horloge');
document.body.appendChild(divClockNum);

function updateTime() {
    const now = new Date();
    const heures = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const secondes = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${heures}:${minutes}:${secondes}`;
    document.getElementById('horloge').innerHTML = timeString;
}

// Mettre à jour l'heure toutes les secondes
setInterval(updateTime, 1000);

// Appel initial pour afficher l'heure dès le chargement de la page
updateTime();

//---------------------------------------------------------------------->
//Création du container input
const divInput = document.createElement(`div`);
document.body.appendChild(divInput);

//Création des inputs
const labelHeures = document.createElement(`label`);
labelHeures.textContent = `Heures: `;
divInput.appendChild(labelHeures);
const iptHeures = document.createElement(`input`);
iptHeures.setAttribute(`type`, `number`);
iptHeures.setAttribute(`id`, `heures`);
labelHeures.appendChild(iptHeures);

const labelMinutes = document.createElement(`label`);
labelMinutes.textContent = ` Minutes: `;
divInput.appendChild(labelMinutes);
const iptMinutes = document.createElement(`input`);
iptMinutes.setAttribute(`type`, `number`);
iptMinutes.setAttribute(`id`, `minutes`);
divInput.appendChild(iptMinutes);

const labelSecondes = document.createElement(`label`);
labelSecondes.textContent = ` Secondes: `;
divInput.appendChild(labelSecondes);
const iptSecondes = document.createElement(`input`);
iptSecondes.setAttribute(`type`, `number`);
iptSecondes.setAttribute(`id`, `secondes`);
labelSecondes.appendChild(iptSecondes);

//Création des boutons
const divValiderS = document.createElement(`div`);
divInput.appendChild(divValiderS);
const btnValiderS = document.createElement(`button`);
btnValiderS.setAttribute(`type`, `submit`);
btnValiderS.setAttribute(`onclick`, `nextSec()`);
btnValiderS.textContent = `Next second`;
divValiderS.appendChild(btnValiderS);

const divValiderM = document.createElement(`div`);
divInput.appendChild(divValiderM);
const btnValiderM = document.createElement(`button`);
btnValiderM.setAttribute(`type`, `submit`);
btnValiderM.setAttribute(`onclick`, `nextMin()`);
btnValiderM.textContent = `Next minute`;
divValiderM.appendChild(btnValiderM);

//Création des inputs pour les résultats
const labelValueS = document.createElement(`label`);
labelValueS.textContent = ` Dans une seconde il sera: `;
divValiderS.appendChild(labelValueS);
const iptValueS = document.createElement(`input`);
iptValueS.setAttribute(`type`, `text`);
labelValueS.appendChild(iptValueS);

const labelValueM = document.createElement(`label`);
labelValueM.textContent = ` Dans une minutes il sera: `;
divValiderM.appendChild(labelValueM);
const iptValueM = document.createElement(`input`);
iptValueM.setAttribute(`type`, `text`);
labelValueM.appendChild(iptValueM);


//fonction qui calcul la seconde après la validation
function nextSec() {
    var getValueH = document.getElementById(`heures`).value;
    var getValueM = document.getElementById(`minutes`).value;
    var getValueS = document.getElementById(`secondes`).value;

    getValueS = parseInt(getValueS);

    getValueS++;

    if (getValueS == 60) {
        getValueS = 0;
        getValueM++;
    }
    if (getValueM == 60) {
        getValueM = 0;
        getValueH++;
    }
    if (getValueH == 24) {
        getValueH = 0;
    }

    var next = `${getValueH}:${getValueM}:${getValueS}`;

    return iptValueS.value = next;
}

//---------------------------------------------------------------------->
function algorithme() {
    var tutu;
    var toto;
    var tata;
    if ((tutu > toto) + 4 || (tata = `ok`)) {
        tutu += tutu;
    } else {
        tutu -= tutu;
    }

    return tutu;
}

//---------------------------------------------------------------------->
function nextMin() {
    var getValueH = document.getElementById(`heures`).value;
    var getValueM = document.getElementById(`minutes`).value;
    var getValueS = document.getElementById(`secondes`).value;

    getValueM = parseInt(getValueM);

    getValueM++;

    if (getValueS == 60) {
        getValueS = 0;
        getValueM++;
    }
    if (getValueM == 60) {
        getValueM = 0;
        getValueH++;
    }
    if (getValueH == 24) {
        getValueH = 0;
    }

    var next = `${getValueH}:${getValueM}:${getValueS}`;

    return iptValueM.value = next;
}


//Création de div magasin
const divMag = document.createElement(`div`);
document.body.appendChild(divMag);

//Création du label
const lblMag = document.createElement(`label`);
divMag.appendChild(lblMag);

//Création de l'input pour les photocopies
const iptMag = document.createElement(`input`);
iptMag.setAttribute(`id`, `nb`)
iptMag.setAttribute(`type`, `text`);
iptMag.setAttribute(`placeholder`, `Nombre de photocopie`);
lblMag.appendChild(iptMag);

//Création du bouton pour la facture
const btnMag = document.createElement(`button`);
btnMag.setAttribute(`id`, `btnMag`)
// btnMag.setAttribute(`onclick`, `nbPhotocopie()`);
btnMag.textContent = `Facture`;
divMag.appendChild(btnMag);

// Création de la facture dans un nouvel onglet
var divfacMag = document.createElement(`div`);
divfacMag.setAttribute(`id`, `facMag`);
var facMag = document.getElementById(`facMag`);
document.body.appendChild(divfacMag);

var getbtn = document.getElementById(`btnMag`).addEventListener(`click`, function () {
    var getValue = document.getElementById(`nb`).value;
    getValue = parseInt(getValue);

    if (getValue <= 10) {
        var total = getValue * 0.10;
        divfacMag.innerHTML = `Nombre: ${getValue} <br>
                                        <br>
                                Total: ${total}`;
    } else {
        if (getValue <= 30) {
            total = (getValue - 10) * 0.09;
            divfacMag.innerHTML = `Nombre: ${getValue} <br>
                                            <br>
                                    Total: ${total}`;
        } else {
            total = (getValue - 30) * 0.08;
            divfacMag.innerHTML = `Nombre: ${getValue} <br>
                                                <br>
                                        Total: ${total}`;
        }
    }
});

//---------------------------------------------------------------------->
const divZorg = document.createElement(`div`);
document.body.appendChild(divZorg);
//
const lblZorgF = document.createElement(`label`);
lblZorgF.textContent = `Femme`;
divZorg.appendChild(lblZorgF);
//
const iptZorgF = document.createElement(`input`);
lblZorgF.setAttribute(`id`, `femme`);
iptZorgF.setAttribute(`type`, `radio`);
lblZorgF.setAttribute(`value`, `femme`);
lblZorgF.setAttribute(`name`, `zorg`);
lblZorgF.appendChild(iptZorgF);
//
const lblZorgH = document.createElement(`label`);
lblZorgH.textContent = `Homme`;
divZorg.appendChild(lblZorgH);

const iptZorgH = document.createElement(`input`);
lblZorgH.setAttribute(`id`, `homme`);
iptZorgH.setAttribute(`type`, `radio`);
lblZorgH.setAttribute(`value`, `homme`);
lblZorgH.setAttribute(`name`, `zorg`);
lblZorgH.appendChild(iptZorgH);
//
const lblZorgA = document.createElement(`label`);
lblZorgA.textContent = `Indiquez votre âge`;
divZorg.appendChild(lblZorgA);

const iptZorgA = document.createElement(`input`);
iptZorgA.setAttribute(`id`, `age`);
iptZorgA.setAttribute(`type`, `number`);
lblZorgA.appendChild(iptZorgA);
//
const btnZorg = document.createElement(`button`);
btnZorg.textContent = `Valider`;
btnZorg.setAttribute(`onclick`, `impot()`);
divZorg.appendChild(btnZorg);

function impot() {
    var genre;
    if (document.getElementById(`femme`).checked) {
        genre = `femme`
    } else {
        genre = `homme`;
    }

    console.log(genre);

    var getValueA = parseInt(document.getElementById(`age`).value);

    console.log(getValueA);


    if ((genre == `femme` && (getValueA >= 18 && getValueA <= 35)) || (genre == `homme` && (getValueA > 20))) {
        alert(`Vous êtes imposable`);
    } else {
        alert(`Vous n'êtes pas imposable`);
    }
}

//---------------------------------------------------------------------->
const divElec = document.createElement(`div`);
document.body.appendChild(divElec);
//
const lblCdd1 = document.createElement(`label`);
lblCdd1.textContent = `Candidat 1`;
divElec.appendChild(lblCdd1);

var iptCdd1 = document.createElement(`input`);
iptCdd1.setAttribute(`type`, `number`);
lblCdd1.appendChild(iptCdd1);
//
const lblCdd2 = document.createElement(`label`);
lblCdd2.textContent = `Candidat 2`;
divElec.appendChild(lblCdd2);

var iptCdd2 = document.createElement(`input`);
iptCdd2.setAttribute(`type`, `number`);
lblCdd2.appendChild(iptCdd2);
//
const lblCdd3 = document.createElement(`label`);
lblCdd3.textContent = `Candidat 3`;
divElec.appendChild(lblCdd3);

var iptCdd3 = document.createElement(`input`);
iptCdd3.setAttribute(`type`, `number`);
lblCdd3.appendChild(iptCdd3);
//
const lblCdd4 = document.createElement(`label`);
lblCdd4.textContent = `Candidat 4`;
divElec.appendChild(lblCdd4);

var iptCdd4 = document.createElement(`input`);
iptCdd4.setAttribute(`type`, `number`);
lblCdd4.appendChild(iptCdd4);
//
const btnElec = document.createElement(`button`);
btnElec.textContent = `Valider`;
btnElec.setAttribute(`type`, `submit`);
btnElec.setAttribute(`onclick`, `election()`);
divElec.appendChild(btnElec);
//
function election() {
    iptCdd1 = parseInt(iptCdd1.value);
    iptCdd2 = parseInt(iptCdd2.value);
    iptCdd3 = parseInt(iptCdd3.value);
    iptCdd4 = parseInt(iptCdd4.value);
    //
    if (iptCdd1 > 50) {
        divElec.innerHTML = `Ce candidat est élut au premier tour avec ${iptCdd1}%`
    } else {
        if ((iptCdd1 > iptCdd2) && (iptCdd1 > iptCdd3) && (iptCdd1 > iptCdd4)) {
            divElec.innerHTML = `Avec ${iptCdd1}%, le candidat se trouve en ballotage favorable`;
        } else {
            divElec.innerHTML = `Avec ${iptCdd1}%, le candidat se trouve en ballotage défavorable`;
        }
        if ((iptCdd1 < 12.5) && ((iptCdd2 > 50) && (iptCdd3 > 50) && (iptCdd4 > 50))) {
            divElec.innerHTML = `Avec ${iptCdd1}%, ce candidat est éliminé`;
        }
    }

}

//---------------------------------------------------------------------->
const divAss = document.createElement(`div`);
document.body.appendChild(divAss);
//
const lblAge = document.createElement(`label`);
lblAge.textContent = `Quel âge avez-vous?`
divAss.appendChild(lblAge);

var iptAge = document.createElement(`input`);
iptAge.setAttribute(`type`, `number`);
lblAge.appendChild(iptAge);
//
const lblDate = document.createElement(`label`);
lblDate.textContent = `Depuis combien de temps avez vous le permis?`
divAss.appendChild(lblDate);

var iptDate = document.createElement(`input`);
iptDate.setAttribute(`type`, `number`);
lblDate.appendChild(iptDate);
//
const lblAcd = document.createElement(`label`);
lblAcd.textContent = `Avez-vous eu un accident? si oui, combien? `
divAss.appendChild(lblAcd);

const lblY = document.createElement(`label`);
lblY.textContent = `oui`;
divAss.appendChild(lblY);

var iptY = document.createElement(`input`);
iptY.setAttribute(`type`, `radio`);
iptY.setAttribute(`id`, `oui`);
lblY.appendChild(iptY);

const lblN = document.createElement(`label`);
lblN.textContent = `non`;
divAss.appendChild(lblN);

var iptN = document.createElement(`input`);
iptN.setAttribute(`type`, `radio`);
iptN.setAttribute(`id`, `non`);
lblN.appendChild(iptN);

var iptAcd = document.createElement(`input`);
iptAcd.setAttribute(`type`, `number`);
divAss.appendChild(iptAcd);

const lblSince = document.createElement(`label`);
lblSince.textContent = `Depuis combien de temps êtes-vous client?`
divAss.appendChild(lblSince);

var iptSince = document.createElement(`input`);
iptSince.setAttribute(`type`, `number`);
lblSince.appendChild(iptSince);
//
const btnAss = document.createElement(`button`);
btnAss.textContent = `Valider`;
btnAss.setAttribute(`type`, `submit`);
btnAss.setAttribute(`onclick`, `tarif()`);
divAss.appendChild(btnAss);
//
function tarif() {
    iptAge = parseInt(iptAge.value);
    iptDate = parseInt(iptDate.value);
    iptAcd = parseInt(iptAcd.value);
    iptSince = parseInt(iptSince.value);
    console.log(`iptAge: ${iptAge}`);
    console.log(`iptDate: ${iptDate}`);
    console.log(`iptAcd: ${iptAcd}`);
    console.log(`iptSince: ${iptSince}`);
    var YN;
    //
    var trfRouge = `rouge`;
    var trfOrange = `orange`;
    var trfVert = `vert`;
    var trfBleu = `bleu`;
    //
    if (document.getElementById(`oui`).checked) {
        console.log(`1`);
        YN = `oui`
    } else {
        console.log(`2`);
        YN = `non`;
    }
    //
    if (((iptAge < 25) && (iptDate < 2) && (YN == `non`)) ||
        ((iptAge >= 25) && (iptDate < 2) && (YN == `oui`) && (iptAcd == 1)) ||
        ((iptAge < 25) && (iptDate >= 2) && (YN == `oui`) && (iptAcd == 1)) ||
        ((iptAge >= 25) && (iptDate >= 2) && (YN == `oui`) && (iptAcd == 2))) {
        if (iptSince >= 5) {
            trfRouge = trfOrange;
            var getTrf = trfRouge;
        }
        return alert(`Vous bénéficiez du tarif ${trfRouge}`);
    } else {
        if (((iptAge < 25) && (iptDate >= 2) && (YN == `non`)) ||
            ((iptAge >= 25) && (iptDate < 2) && (YN == `non`)) ||
            ((iptAge >= 25) && (iptDate >= 2) && (YN == `oui`) && (iptAcd == 1))) {
            if (iptSince >= 5) {
                trfOrange = trfVert;
                var getTrf = trfOrange;
                return alert(`Vous bénéficiez du tarif ${getTrf}`);
            }
            return alert(`Vous bénéficiez du tarif ${trfOrange}`);
        } else {
            if ((iptAge >= 25) && (iptDate >= 2) && (YN == `non`)) {
                alert(`Vous bénéficiez du tarif ${trfVert}`);
                if (iptSince >= 5) {
                    trfVert = trfBleu;
                    var getTrf = trfVert;
                    return alert(`Vous bénéficiez du tarif ${getTrf}`);
                }
            } else {
                return alert(`Vous ne pouvez pas bénéficier d'un tarif`);
            }
        }
    }
}


//---------------------------------------------------------------------->
const divAnnee = document.createElement(`div`);
document.body.appendChild(divAnnee);
//
const lblJour = document.createElement(`label`);
lblJour.textContent = `Jour: `;
divAnnee.appendChild(lblJour);

var iptJour = document.createElement(`input`);
iptJour.setAttribute(`type`, `number`);
lblJour.appendChild(iptJour);
//
const lblMois = document.createElement(`label`);
lblMois.textContent = `Mois: `;
divAnnee.appendChild(lblMois);

var iptMois = document.createElement(`input`);
iptMois.setAttribute(`type`, `number`);
lblMois.appendChild(iptMois);
//
const lblAnnee = document.createElement(`label`);
lblAnnee.textContent = `Année: `;
divAnnee.appendChild(lblAnnee);

var iptAnnee = document.createElement(`input`);
iptAnnee.setAttribute(`type`, `number`);
lblAnnee.appendChild(iptAnnee);
//
const btnAnnee = document.createElement(`button`);
btnAnnee.setAttribute(`onclick`, `verifier()`);
btnAnnee.textContent = `valider`;
divAnnee.appendChild(btnAnnee);
//
function verifier() {
    iptJour = parseInt(iptJour.value);
    iptMois = parseInt(iptMois.value);
    iptAnnee = parseInt(iptAnnee.value);
    //
    if (isNaN(iptJour) || isNaN(iptMois) || isNaN(iptAnnee)) {
        return alert(`Saisir des numéros!`);
    }
    if ((iptJour > 0) && (iptJour <= 31)) {
        console.log(iptJour);
        if ((iptMois > 0) && (iptMois <= 12)) {
            console.log(iptMois);
            if (((iptAnnee > 0) && (iptAnnee <= new Date()))) {
                console.log(iptAnnee);
                alert(`La date: ${iptJour}/${iptMois}/${iptAnnee} | est une date valide`);
            }
        }

    }
    if (((iptMois == 2) && (iptJour <= 29)) && ((iptAnnee % 4) || (iptAnnee % 400))) {
        alert(`L'année: ${iptJour}/${iptMois}/${iptAnnee} | est une année bisextile`);
    } else {
        if (((iptMois == 2) && (iptJour <= 28)) && (iptAnnee % 100)) {
            alert(`L'année: ${iptJour}/${iptMois}/${iptAnnee} | n'est pas une année bisextile`);
        } else {
            return alert(`L'année: ${iptJour}/${iptMois}/${iptAnnee} | n'est pas une année valide`);
        }
    }
}