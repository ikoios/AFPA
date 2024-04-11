// ------------------------------------------------------------TP 1------------------------------------------------------------
function changer_style() {
    var p = document.getElementById(`parag1`);
    // p.style.color = `white`;
    // p.style.backgroundColor = `red`;
    // p.style.border = `dotted black 1px`;
    // p.style.marginLeft = `5px`;
    if (p.classList.contains(`active`)) { //va chercher la class .active
        p.classList.remove(`active`);
    } else {
        p.classList.add(`active`);
    }
}

// ------------------------------------------------------------TP 2------------------------------------------------------------
function factoriel() {
    var n = document.getElementById(`number`).value;
    var i = 1;
    var cumul = 1;
    if (n===0) {
        document.getElementById(`cumul`).value = `impossible`;
    } else {
        while (i <= n) {
            cumul *= i;
            i++;
        }
    }
    document.getElementById(`cumul`).value = cumul;
    return cumul;
}

// ------------------------------------------------------------TP 3------------------------------------------------------------
function multiplication() {
    var n = parseInt(document.getElementById(`multi`).value);
    var i;
    var t = document.getElementById(`mtab`);
        for (i=1; i<=10; i++) {
            t.innerHTML +=`<table border><tr><td>`+n+`</td><td>x</td>`+`<td>`+i+`</td><td>=</td><td>`+n*i+`</td></tr></table>`;
            }
    }

function tableMultiplication() {
    var i;
    var j;
    var t = document.getElementById(`multitab`);
    var str = ``;
    for (i=1; i<=10; i++) {
        str += `<table border 1px><tr><td colspan="5">Table de `+i+`</td></tr>`;
        for (j=1; j<=10; j++) {
            str += `<tr><td>`+i+`</td><td>x</td><td>`+j+`</td><td>=</td><td>`+i*j+`</td></tr>`;
        }
        str += `</table>`;
    }
    t.innerHTML = str;
}

function styleTable() {
    var tab = document.getElementsByTagName(`table`);
        for (i=0; i<tab.length; i++) {
                tab[i].style.margin = `1rem`;
                tab[i].style.textAlign = `center`;
                tab[i].style.width = `10rem`;
                tab[i].style.borderCollapse = `collapse`;
            }
}

function doubleFonction1() {
    multiplication();
    styleTable();
}
function doubleFonction2() {
    tableMultiplication();
    styleTable();
}

// ------------------------------------------------------------TP 4------------------------------------------------------------
function background() {
    var background = document.getElementById(`body`);
    var button = document.getElementById(`background`);
        background.classList.add(`background`);
        button.style.backgroundColor = `blueviolet`;
}
function removeBackground() {
    var background = document.getElementById(`body`);
    var button = document.getElementById(`background`);
        background.classList.remove(`background`);
        button.style.background = ``;
}
function changeImg() {
    document.getElementById(`image`).src=`/image/MicrosoftTeams-image.png`;
}
function changeImg2() {
    document.getElementById(`image`).src=`/tp5/image/background.png`;
}

// ------------------------------------------------------------TP 5------------------------------------------------------------
