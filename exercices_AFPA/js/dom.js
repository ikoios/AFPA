let btn1 = document.createElement('button');
btn1.textContent = 'Effacer le DOM';
btn1.setAttribute('onclick', 'effacerDOM(dv)');
document.body.appendChild(btn1);

function effacerDOM(elt) {
    if (elt != null) {
        while (elt.hasChildNodes()) {
            var nf = elt.firstChild;
            elt.removeChild(nf);
        }
    }
}

let btn2 = document.createElement('button');
btn2.textContent = 'Modifier le texte';
btn2.setAttribute('onclick', 'modifierTexte(h1, changé)');
document.body.appendChild(btn2);

function modifierTexte(elt, texte) {
    if (elt != null) {
        effacerDOM(elt);
        var nvxNoeud = document.createTextNode(texte);
        elt.appendChild(nvxNoeud);
    }
}

let btn3 = document.createElement('button');
btn3.textContent = 'Alert';
btn3.setAttribute('onclick', 'getTexte(dv)');
document.body.appendChild(btn3);

function getTexte(elt) {
    var texte = "";
    if (elt != null) {
        if (elt.hasChildNodes()) {
            for (var i = 0; i < elt.childNodes.length; i++) {
                var nf = elt.childNodes[i];
                if (nf.nodeValue != null) {
                    texte += nf.nodeValue;
                } else {
                    texte += getTexte(nf);
                }
            }
        }
    }
    alert(texte);
}
// let btn4 = document.createElement('button');
// btn4.textContent = 'Effacer le titre';
// btn4.setAttribute('onclick', 'effacerTitre()');
// document.body.appendChild(btn4)

// function effacerTitre() {
//     var titre = docuemnt.getElementsById('title');
//     if (titre)
//         titre.textContent = "";
// }