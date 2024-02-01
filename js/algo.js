// ----------------------------------------Test 1----------------------------------------
// var x = prompt(`Entrez votre note entre 0 et 20`);

// if (x < 10 && x > 7) {
//     alert(`Vous êtes en rattrapage`)
// } else if (x < 8 ) {
//     alert(`Manque de travail, vous n'êtes pas admis`)
// } else if (x == 10) {
//     alert(`Travail correct`)
// } else if (x > 10 && x < 15) {
//     alert(`Bon travail`)
// } else if (x >= 15 && x < 18) {
//     alert(`Mention très bien`)
// } else if (x <= 18 && x >= 20) {
//     alert(`Excellent travail! Vous êtes admissible dans toutes les écoles`)
// }


// ----------------------------------------Test 2----------------------------------------
// var x = prompt(`Entrer une valeur`);
// var y = 0;

// if (x < 0){
//     y = -x
// }
// else y = x;

// alert(`La valeur absolue de `+ x + ` est: `+ y);


// var n = prompt(`Entrer un entier`);

// if (n%3 == 0) {
//     alert(n + ` est divisible par 3`)
// } else
//     alert(n + ` n'est pas divisible par 3`)


// ----------------------------------------Test 3----------------------------------------
// n = prompt(`Entrer le nombre de photocopies`)

// if (n <= 0) {
//     p = 0
//     alert(`Le nombre de photocpie doit être positif pour afficher un prix`)
// }else {
//     if (n < 11) {
//         p = 0.5
//         alert(`Pour ` + n + ` photocopies, le prix est de ` + n*p)
//     } else if (n < 21) {
//         p = 0.4
//         alert(`Pour ` + n + ` photocopies, le prix est de ` + n*p)
//     } else {
//         p = 0.3
//         alert(`Pour ` + n + ` photocopies, le prix est de ` + n*p)
//     }
// }


// ----------------------------------------Test 4----------------------------------------
// var i = 0;
// var som = 0;

// while (som < 101) {
//     i++;
//     som = som+i
//     console.log(i)
// }
// alert(`La valeur cherchée est N= ` + i)


// ----------------------------------------Test 5----------------------------------------
// var som = 0;
// var i = 1;

// while (som < 101) {
//     som = som+i;
//     i++;
//     console.log(i);
// }
// alert(`La valeur cherchée est N= ` + (i-1))
    
// ----------------------------------------Test 6----------------------------------------
// var x = prompt(`Entrez la valeur de x`)
// var n = prompt(`Entrez la valeur de n`)

// var puiss = n;
// for (i = 1; i < n; i++) {
//     puiss = puiss*x;
//     console.log(puiss)
// }
// alert(x+ ` à la puissance ` +n+ ` est égal à ` +puiss)

// ----------------------------------------Test 7----------------------------------------
// var x = prompt(`Entrez la valeur de x`)
// var n = prompt(`Entrez la valeur de n`)

// var puiss = 1
// for(i = n; i > 0; i--) {
//     puiss = puiss*x
//     console.log(puiss)
// }
// alert(x+ ` à la puissance de ` +n+ ` est égal à ` +puiss)

// ----------------------------------------Test 8----------------------------------------
// var i = 0;
// var j = 0;

// for(i = 1; i <= 5; i++) {
//     for(j = 1; j <= i; j++){
//         document.write(`o`);
//     }
//     document.write(`x`);
//     document.write(`<br>`);
// }


// ----------------------------------------Exo 1----------------------------------------
// let l = prompt(`Entrez le nom de l'article`)
// let p = prompt(`Entrez le prix d'un article en €`);
// while(isNaN(p) || p < 1) {
//     p = prompt(`Entrez le prix d'un article en €`);
// }
// let n = prompt(`Entrez le nombre d'article`);
// const t = prompt(`Entrez la TVA en %`);

// console.log(l)
// console.log(p + ` €`);
// console.log(n);
// console.log(t + ` %`);
// let pn = p*n;
// console.log(`Le prix de ` +n+ ` de ` +l+ ` = ` +p*n+ ` €`);
// let ttc = (pn+(pn*t)/100);
// console.log(`Le prix TTC = ` +ttc+ ` €`);


// ----------------------------------------Exo 2----------------------------------------
// let x = prompt(`Entrez un nombre`);
// let y = prompt(`Entrez un nombre à multiplier`);

// if (x < 0 ) {
//     alert(`Le produit est négatif`);
// }else if (y < 0) {
//     alert ('le produit est négatif');
// }else if ((x < 0) && (y < 0)) {
    // alert(`Le produit est positif`)
    // }else {
        // alert(`Le produit est positif`);
// }

// if (((x <= 0) && (y <= 0) || (x >= 0) && (y >= 0))) {        
//     alert(`Le produit est positif`)
// }else {
//     alert(`Le produit est négatif`)
// }


// ----------------------------------------Exo 3----------------------------------------
// let a = prompt(`Entrez votre âge`);

// while(isNaN(a) || (a < 0)) {
//     a = parseInt(prompt(`Entrez un âge valide`));
//     }if (a >= 0 & a < 6) {
//         alert(`Vous êtes trop jeune`);
//         }else if ((a > 5) && (a < 8)) {
//             alert(`Poussin`);
//             }else if ((a > 8) && (a < 10)) {
//                 alert(`Pupille`);
//                 }else if ((a > 9) && (a < 12)) {
//                     alert(`Minime`);
//                     }else {
//                         alert(`Cadet`);
//                         }


// ----------------------------------------Exo 4----------------------------------------
// let n = prompt(`Entrez une valeur entre 10 et 20`);

// while((isNaN(n)) || (n < 0) || (n <= 10) || (n >= 20)) {
//     if(n < 10) {
//         alert(`Trop petit!`);
//         n = prompt(`Entrez une valeur entre 10 et 20`);
//         }else if(n > 20) {
//             alert(`Trop grand!`);
//             n = prompt(`Entrez une valeur entre 10 et 20`);
//             }
// }
// alert(n + ` est correct`);

// let n = parseInt(Math.random(100)*100);
// let t = parseInt(prompt(`Trouvez le nombre qui est caché`));

// while(((isNaN(t)) || (t < 0) || (t != n))) {
//     if(t < n) {
//         alert(`Plus grand!`);
//         t = parseInt(prompt(`Trouvez le nombre qui est caché`));
//         }else if(t > n) {
//             alert(`Plus petit!`);
//             t = parseInt(prompt(`Trouvez le nombre qui est caché`));
//             }
// }
// alert(`Bravo! ` +t+ ` est le nombre caché!`);

// ----------------------------------------Exo 5----------------------------------------
// let n = prompt(`Entrez un nombre entier`);
// let s = 0;
// let i;

// for(i = 1; i <= n; i++) {
//     s += i;
// }
// console.log(s);

// ----------------------------------------Exo 6----------------------------------------
// let n = prompt(`Entrez un nombre entier`);
// let f = 1;
// let i;

// for(i = 1; i <= n; i++) {
//     f *= i;
// }
// console.log(f);


// ----------------------------------------Test fonction 1----------------------------------------
// function pair(n) {
//     return n%2==0;
// }

// function sommecarre(x,y) {
//     let z = x*x + y*y;
//     return z;
// }
// let x = parseInt(prompt(`Entrez x`));
// let y = parseInt(prompt(`Entrez y`));
// document.write(`La somme des carrés est: `, sommecarre(x,y));
// document.write(`<br>`);
// document.write(pair(sommecarre(x,y)));


// ----------------------------------------Test fonction 2----------------------------------------
// function fact(n) {
//     let f = 1;

//     for(let i = 1; i <= n; i++) {
//         f *= i;
//     }
//     return f;
// }

// function sommefact(n) {
//     let i = 0;
//     let f = 0;

//     for(i = 1; i <= n; i++) {
//         f += fact(i);
//     }
//     document.write(`La somme factoriel de ` +n+ ` est: ` +f);
// }
// let x = parseInt(prompt(`Entrer un entier`));
// document.write(`Le factoriel de ` +x+ ` est: ` +fact(x));
// document.write(`<br>`);
// sommefact(x);


// ----------------------------------------Test récursivité 1----------------------------------------
// function recufact(n) {
//     if (n==0) {
//         return 1;
//     }   else {
//         return (n*fact(n-1));
//         }
// }
// let x = parseInt(prompt(`Entrez une valeur`));
// fact(x);
// document.write(fact(x));


// ----------------------------------------Test récursivité 2----------------------------------------
// function fib(n) {
//     let res;
//     if(n==1 || n==0) {
//         res = 1;
//     }   else {
//         res = fib(n-1)+fib(n-2);
//         }
//         return res;
// }
// let x = parseInt(prompt(`Entrez une valeur`));
// fib(x);
// document.write(fib(x));

// function recufib(n) {
//     let i;
//     let nouveau;
    
//     if(n==1 || n==0) {
//         return 1
//     }
    
//     let last = 1;
//     let before = 1;
    
//     for (i=2; i<=n; i++) {
//         nouveau = last+before;
//         before = last;
//         last = nouveau;
//     }
//     return nouveau;
// }
// let x = parseInt(prompt(`Entrez une valeur`));
// recufib(x);
// document.write(recufib(x));


// ----------------------------------------Test récursivité 3----------------------------------------
// function bin(n) {
//     if(n!=0) {
//         bin(parseInt(n/2));
//         document.write(n%2);
//     }
// }
// let x = parseInt(prompt(`Entrez une valeur`));
// bin(x);


// ----------------------------------------Test tableau 1----------------------------------------
// let tab = new Array(30);
// for(let i=0; i<tab.length; i++) {
//     tab[i] =  parseInt(Math.random()*21);
    
// }
// for(let i=0; i<tab.length; i++) {
//     document.write(tab[i] + ` , `);
// }
// let n = 0; 
// for(let i=0; i<tab.length; i++) {
//     if (tab[i]>10) {
//         n += 1;
//     }
// }
// document.write(`<br>`);
// document.write(`Il y a ` +n+ ` de notes supérieures à 10`);


// ----------------------------------------Test tableau 2----------------------------------------
// function SaisieTab(n,T) {
//     let i = 0;
//     for (i=0; i<=(n-1); i++) {
//         T[i] =  parseInt(Math.random()*21);
//     }
// }
// function AfficheTab(n,T) {
//     let i = 0;
//     for(i=0; i<=(n-1); i++) {
//         document.write(`T[`+i+`]=` +T[i]+ ` / `)
//     }
// }
// let A = new Array(10);
// let p = parseInt(prompt(`Combien de case comppose le tableau?`));
// SaisieTab(p,A);
// AfficheTab(p,A);


// ----------------------------------------Exo tableau 1----------------------------------------
// function width(n,T) {
//     let i = 0;
//     for(i=0; i<=(n-1); i++){
//         T[i] = parseInt(Math.random()*51);
//     }
// }
// function smaller(n,T) {
//     let min = T[0];
//     for(let i=1; i<T.length ; i++) {
//         if (T[i]<=min) {
//             min = T[i];
//         }
//     }
//     document.write( `<br>` + `<br>` + `Le plus petit élément est: ` +min);
// }
// function bigger(n,T) {
//     let min = T[0];
//     let j = 0;
//     for(let i=1; i<T.length; i++) {
//         if (T[i]<=min) {
//             min = T[i];
//             j = i;
//         }
//     }
//     document.write(`<br>` + `<br>` + `L'indice du plus petit élément est: ` + `[`+j+`]`);
// }
// function bigger2(T,vald,vala) {
//     if (vala > T.length) {
//         vala = T.length;
//     }
//     let min = T[vald];
//     let indice = vald;
//     for(let i=(vald+1); i<vala; i++) {
//         if (T[i]<=min){
//             min = T[i];
//             indice = i;
//         }
//     }
// }
// let S = new Array ();
// let p = parseInt(Math.random()*51);
// width(p,S);
// AfficheTab(p,S);
// smaller(p,S);
// bigger(p,S);
// bigger2(S,p,);
// document.write(`<br>` +min);


// ----------------------------------------Exo tableau 2----------------------------------------
// function somme(T) {
    // let s = 0;
    // for(let i=0; i<T.length; i++) {
        // s += T[i];
    // }
    // document.write(`<br>`+`La somme des valeurs du tableau est: `+s);
    // return s
// }
// function moyenne(T) {
    // let s = somme(T);
    // let m = 0;
    // let j= 0;
    // for(let i=0; i<T.length; i++) {
    //     s += T.length;
        // j = i;
    // }
    // m = s/T.length;
    // document.write(`<br>`+`La moyenne des éléments tu tableaux est: `+m);
// }
// function moyennei(T,vald) {
//     let vala = T.length;
//     for(let i=vald; i<T.length; i++) {
//         if (T[i]==-1) {
//             vala = i;
//         }
//     }
//     let m = 0;
//     let s = 0;
//     for(let i=vald; i<vala; i++) {
//         s += T[i];
//     }
//     m = s/(vala-vald);
//     document.write(`<br>`+somme(T));
//     document.write(`<br>`+m);
// }
// let e = parseInt(Math.random()*26);

// let vald = parseInt(prompt(`Entrez une valeur de départ`));
// let tab = [15,2,89,4,98];
// for(let i=0; i<tab.length; i++){
//     tab[i] = parseInt(Math.random()*26)
// }
// document.write(`[`+tab+`]`);
// somme(tab);
// moyenne(tab);
// moyennei(tab,vald);


// ----------------------------------------Exo tableau 3----------------------------------------
// function affichertab(t) {
//     for(let i=0; i<t.length; i++) {
//         t[i] = parseInt(Math.random()*26)
//         if(i==(t.length-1)) {
//             document.wrtie(`_`+t[i]);
//         }   else {
//                 document.write(t[i]);
//             }
//     }
// }
// let tab = new Array (25);
// affichertab(tab);


// ----------------------------------------Exo tableau 4----------------------------------------
// let p = [];
// let n = [];
// let f = [];
// let e = [];
// function remplir(t) {
//     let elem = prompt(`Entrez lettre par lettre `+t+`(-1 = fin du tableau)`);
//     while(elem!="-1") {
//         t.push(elem);
//         elem = prompt(`Entrez la lettre suivante `+t+`(-1 = fin du tableau)`);
//     }
//     t.push(`-1`);
// }
// function affichertab(t) {
//     let i = 0;
//     while(t[i]!="-1") {
//         if(t[i]!=undefined) {
//             document.write(t[i]);
//         }
//         i++;
//     }
// }
// function remplirmail(t) {
//     let i = 0;
//     while(t[i]!="-1") {
//         e.push(t[i]);
//         i++;
//     }
// }
// function generermail() {
//     if(((p[0]==`-1`) && (n[0]==`-1`)) || (f[0]==`-1`)) {
//         alert(`Impossible de générer un E-mail`)
//     }   else if ((p[0]!=`-1`) && (n[0]!=`-1`)) {
//             remplirmail(p);
//             e.push(`.`);
//             remplirmail(n);
//             e.push(`@`);
//             remplirmail(f);
//             e.push(`.fr`);
//             e.push(`-1`);
//         }   else if(p[0]==`-1`) {
//                     remplirmail(n);
//                     e.push(`@`);
//                     remplirmail(f);
//                     e.push(`.fr`);
//                     e.push(`-1`);
//                 }   else {
//                         remplirmail(p);
//                         e.push(`@`);
//                         remplirmail(f);
//                         e.push(`.fr`);
//                         e.push(`-1`);
//                     }
// }
// remplir(p);
// remplir(n);
// remplir(f);
// generermail(p,n,f);
// affichertab(e);


// ----------------------------------------Exo algo 1----------------------------------------
// let d = prompt(`Entrer un dividende`);
// let div = prompt(`Entrer un diviseur`);
// function division(n1,n2) {
//     if(n2!=0) {
//         e = parseInt(n1/n2);
//         r = (n1%n2);
//     }
//     document.write(e+` est le quotien de la division et `+r+ ` est le reste`)
// }
// division(d,div);


// ----------------------------------------Exo algo 2----------------------------------------
// let a = prompt(`Entrer une valeur de x`);
// let b = prompt(`Entrer une valeur de y`);
// let c = prompt(`Entrer une valeur de z`);
// function permutation(x,y,z) {
//         if(x!=y) {
//             let d = x;
//             x = y;
//             y = z;
//             z = d;
//         }
//                 document.write(`x est devenu :`+x+`, y est devenu :`+y+` et z est devenu :`+z);
// }
// permutation(a,b,c);


// ----------------------------------------Exo algo 3----------------------------------------
// let x = prompt(`Entrer un nombre`);
// let y = prompt(`Entrer un deuxième nombre`);

// x = x+y;
// y = x-y;
// x = x-y;
// document.write(`x = `+x);


// ----------------------------------------Exo algo 4----------------------------------------
// let y =  prompt(`Entrer un nombre`);
// let z = prompt(`Entrer un second nombre`);
// while(z*y>0){
//     z = prompt(`Entrer un second nombre`);
// }
// function read(a,b) {
//     if(a>=0) {
//         document.write(a);
//     } else {
//         document.write(b);
//     }
// }
// read(y,z);


// ----------------------------------------Exo algo 5----------------------------------------
// let x = prompt(`Entrer une valeur pour x`);
// let y = prompt(`Entrer une valeur pour y`);
// let z = prompt(`Entrer une valeur pour z`);
// function comparemax(a,b,c) {
//     let d;
//     if(((a>b)&&(b>c))||((a>c)&&(c>b))) {
//         d=a;
//         document.write(`Le plus grand nombre est: `+a);
//     }   else if(((b>c)&&(c>a))||((b>a)&&(a>c))) {
//         d=b;
//         document.write(`Le plus grand nombre est: `+b);
//         }   else if(((c>a)&&(a>b))||((c>b)&&(b>a))) {
//             d=c;
//             document.write(`Le plus grand nombre est: `+c);
//             }
//             return d;
            
// }
// function comparemin(a,b,c) {
//     let d;
//     if(((a<b)&&(b<c))||((a<c)&&(c<b))) {
//         d=a;
//         document.write(`<br>`+`Le plus petit nombre est: `+a);
//     }   else if(((b<c)&&(c<a))||((b<a)&&(a<c))) {
//             d=b;
//             document.write(`<br>`+`Le plus petit nombre est: `+b);
//         }   else if(((c<a)&&(a<b))||((c<b)&&(b<a))) {
//                 d=c;
//                 document.write(`<br>`+`Le plus petit nombre est: `+c);
//             }
//             return d;
// }
// comparemax(x,y,z);
// comparemin(x,y,z);


// ----------------------------------------Exo algo 6----------------------------------------
// let x = prompt(`Entrer une valeur pour x`);
// let y = prompt(`Entrer une valeur pour y`);
// let z = prompt(`Entrer une valeur pour z`);
// function triangle(a,b,c) {
//     let max = comparemax(a,b,c);
//     if((a+b+c)>2*max){
//         document.write(`Les trois valeur forment bien un triangle`);
//     }   else {
//             document.write(`Les trois valeurs ne peuvent pas former un triangle`);
//         }
// }
// triangle(x,y,z);


// ----------------------------------------Exo algo 7----------------------------------------
// let a = prompt(`Entrer une valeur pour x`);
// let b = prompt(`Entrer une valeur pour y`);
// let c = prompt(`Entrer une valeur pour z`);
// function croissant(x,y,z) {
//     let min = comparemin(x,y,z);
//     let max = comparemax(x,y,z);
//     let middle = x+y+z - min - max;
//     document.write(min+`<`+middle+`<`+max);
// }
// croissant(a,b,c);


// ----------------------------------------Exo algo 8----------------------------------------
// let n = parseInt(prompt(`Entrer la valeur de n`));
// function placern(n) {
//     let x = 5;
//     let y = 10;
//     let z = 15;
//     if(n<=x) {
//         document.write(n+`<`+x+`<`+y);
//     }else{
//         if(n<=y) {
//             document.write(x+`<`+n+`<`+y);
//         }else{
//             if(n<=z){
//                 document.write(x+`<`+y+`<`+n);
//             }else{
//                 document.write(x+`<`+y+`<`+z);
//             }
//         }
//     }
// }
// placern(n);


// ----------------------------------------Test tableau 3----------------------------------------
// let c = parseInt(Math.random()*26);
// let tab = new Array(c);
// function affichertab(t) {
//     for(let i=0; i<t.length; i++) {
//         document.write(`|`+`[`+i+`]=`+t[i]+`|`);
//     }
// }
// function remplirtab(t) {
//     for(let i=0; i<t.length; i++) {
//         t[i] = parseInt(Math.random()*26);
//     }
// }
// function tri(t) {
//     let temp;
//     for(let i=0; i<(t.length-1); i++) {
//         let ippe = i;
//         for(let j=i+1; j<t.length; j++) {
//             if(t[j]<t[ippe]) {
//                 ippe=j;
//             }
//         }
//         temp = t[ippe];
//         t[ippe] = t[i];
//         t[i] = temp;
//     }
// }
// function dichotomique(t,x) {
//     let inf = 0;
//     let sup = t.length-1;
//     let trouve = false;
//      while(((inf<=sup)&&(!trouve))) {
//         let milieu = parseInt((inf+sup)/2);
//         if(x==t[milieu]) {
//             trouve = true;
//         }else{
//             if(x>t[milieu]) {
//                 inf = milieu+1;
//             }else{
//                 sup = milieu-1;
//             }
//         }
//     }
//     if(trouve) {
//         document.write(`<br><br>`+`|`+x+`|`+` appartient au tableau`);
//     }else{
//         document.write(`<br><br>`+`|`+x+`|`+` n'appartient pas au tableau`);
//     }

// }


// remplirtab(tab);
// document.write(`Avant tri <br>`);
// affichertab(tab);
// tri(tab);
// document.write(`<br> Après tri <br>`);
// affichertab(tab);
// dichotomique(tab,c);

// ----------------------------------------Test matrice----------------------------------------
// let box = parseInt(Math.random()*21);
// let tab = new Array();
// let tab2 = new Array();
// let d = new Array();
// let l = parseInt(Math.random()*21)
// let c = parseInt(Math.random()*21)
// function matrice(t,l,c) {
//     let i;
//     let j;
//     for(i=0; i<c; i++) {
//         for(j=0; j<l; j++) {
//             if(!t[i]) {
//                 t[i] = new Array();
//             }
//             t[i][j] = parseInt(Math.random()*21);
//             document.write(`/`+`[`+[i]+`|`+j+`]`+t[i][j]+`/`);
//         }
//         document.write(`<br>`);
//     }
// }
// function sommematrices(t,tt,l,c) {
//     let i;
//     let j;
//     for(i=0; i<c; i++) {
//         for(j=0; j<l; j++) {
//             if(!d[i]) {
//                 d[i] = new Array();
//             }
//             d[i][j] = t[i][j]+tt[i][j];
//             document.write(`/`+`[`+[i]+`|`+[j]+`]`+d[i][j]+`/`);
//         }
//         document.write(`<br>`)
//     }
// }
// matrice(tab,l,c);
// document.write(`<br>`);
// matrice(tab2,l,c);
// document.write(`<br>`);
// sommematrices(tab,tab2,l,c);


// ----------------------------------------TD 2 exo 1----------------------------------------
// let c = parseInt(Math.random()*11);
// let tab = new Array(c);
// function tableauR(t){
//     let i;
//     for(i=0; i<t.length; i++){
//         t[i] = parseInt(Math.random()*11);
//     }
// }
// function tableauA(t){
//     let i;
//     for(i=0; i<t.length; i++){
//         document.write(`/`+`[`+i+`]`+t[i]+`/`)
//     }
// }
// tableauR(tab);
// tableauA(tab);
// function trouverPetit(t){
//     let i;
//     let k = 0;
//     let trouve = true;
//     for(i=0; i<t.length; i++){
//         if(t[i])
//     }
// }

