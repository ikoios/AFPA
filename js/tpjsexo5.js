// ------------------------------------------------------------TP 5------------------------------------------------------------
// ------------------------------------------------------------Alterner deux image------------------------------------------------------------
let img = [`/image/lion.jpg`,`/image/lionceau.webp`];
let index = 0;
function changerImage() {
    var imagedepart = document.getElementById(`img`);
    imagedepart.src = img[index];
    index = (index + 1) % img.length;
}

function defilement() {
    interval = setInterval(changerImage,1000);  //Timer de défilement
}
defilement();

function remove() {
    clearInterval(interval);    //Arrêt du timer
    clearInterval(rep);

}

function reprendre() {
    rep = setInterval(changerImage,1000);
}
// ------------------------------------------------------------Correction------------------------------------------------------------
// let afficher = `lionceau`;

// function alterner() {
//     if (afficher == `lionceau`) {
//         document.getElementById(`img`).setAttribute(`src`,`image/lion.jpg`);
//         afficher = `lion`;
//     } else {
//         document.getElementById(`img`).setAttribute(`src`,`image/lionceau.jpg`);
//         afficher = `lionceau`;
//     }
// }

// function lancer() {
//     return setInterval(alterner,1000);
// }

// function arreter(x) {
//     clearInterval(x);
// }

// ------------------------------------------------------------Diaporama------------------------------------------------------------
let img2 = [`matrice1.webp`,`matrice2.jpg`,`matrice3.webp`,`matrice4.webp`,`matrice5.webp`];
let index2 = 0;
function suivant() {
    index = (index + 1) % img2.length;  //Retour au début du tableau
    src = `/image/` + img2[index];  //Fourni le chemin pour chaque image du tableau
    var carrousel = document.getElementById(`carrousel`);
    carrousel.src = src;
}

function precedant() {
    if (index == 0) {
        index = img2.length - 1;
    } else {
        index = (index - 1) % img2.length;
    }
    src = `/image/` + img2[index];
    var carrousel = document.getElementById(`carrousel`);
    carrousel.src = src;
}

function gestionTouches(event) {    // Programmer les fonctions sur les flèches du clavier
    switch (event.keyCode) {
      case 37:  // Flèche gauche
        precedant();
        break;
      case 39:  // Flèche droite
        suivant();
        break;
    }
  }

  document.addEventListener("keydown", gestionTouches); //Appel de la fonction sur "touche appuyé"
// ------------------------------------------------------------Correction------------------------------------------------------------
// let mesPhotos = [`matrice1`, `matrice2`, `matrice3`, `matrice4`, `matrice5`];
// let i = 0;

// function suivant() {
//     i ++;
//     if (i == mesPhotos.length) {
//         i = 0;
//     }
//     document.getElementById(`carrousel`).src = `images` + mesPhotos[i] + `jpg`;
// }

// function suivant() {
//     i --;
//     if (i < 0) {
//         i = mesPhotos/length - 1;
//     }
//     document.getElementById(`carrousel`).src = `images` + mesPhotos[i] + `jpg`;
// }

// ------------------------------------------------------------Déplacer une image------------------------------------------------------------
var permut = document.getElementById("permut");
var images = document.querySelectorAll("#permut img");
let i = 0;
let startX = 0;

// Fonction pour changer l'image
function changerImage(delta) {
    i = (i + delta + images.length) % images.length;
    afficherImageCourante();
}

// Fonction pour afficher l'image courante
function afficherImageCourante() {
    var translateValue = -i * images[0].clientWidth + "px";
    permut.style.transform = "translateX(" + translateValue + ")";
}

// Écouteurs d'événements pour la souris
function down(event) {
    startX = event.clientX;
}

function up(event) {
var endX = event.clientX;
var deltaX = endX - startX;
// Changer l'image en fonction du déplacement de la souris
if (deltaX > 0) {
changerImage(-1);
} else if (deltaX < 0) {
changerImage(1);
}
}

document.addEventListener("mousedown", down);
document.addEventListener("mouseup", up);

// ------------------------------------------------------------Correction------------------------------------------------------------
// let i = 1;
// let nbImage = 5;

// function descend() {
//     var matrice1 = `img` +1;
//     i++;
//     if ( i > nbImage) {
//         i = 1;
//     }
//     var idSuivant =  `img` + i;$
//     document.getElementById(matrice1).src = document.get
// }