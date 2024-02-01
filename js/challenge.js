//---------------------------------------- #1 ---------------------------------------->
var tab1 = [[10, 0], [3, 5], [5, 8]];
var tab2 = [[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]];
var tab3 = [[3, 0], [9, 1], [4, 8], [12, 2], [6,1], [7, 8]];
//
// Initialise la variable en number
var passengersTab1 = 0;
// Récupère la fonction .map dans la variable map1
var map1 = tab1.map((elem1) => {passengersTab1 += elem1[0] - elem1[1]}); // récupère chaque élément et incrémente l'indice 0 et soustrait l'indice 1
console.log(parseInt(passengersTab1));
//
var passengersTab2 = 0;
var map2 = tab2.map((elem2) => {passengersTab2 += elem2[0] - elem2[1]});
console.log(parseInt(passengersTab2));
//
var passengersTab3 = 0;
var map3 = tab3.map((elem3) => {passengersTab3 += elem3[0] - elem3[1]});
console.log(parseInt(passengersTab3));

//---------------------------------------- #2 ---------------------------------------->
var sheep = [true, true, true, false,
                true, true, true, true, 
                true, false, true, false,
                true, false, false, true,
                true, true, true , true,
                false, false, true, true];
//
var countSheep = 0;
var count = sheep.map((e) => {(e != null) || (e != undefined) && e == true ? countSheep += e : countSheep = 0});
console.log(countSheep);

//---------------------------------------- #3 ---------------------------------------->
var string = `Ceci est une phrase`;
//
console.log(string.slice(1, -1));

//---------------------------------------- #4 ---------------------------------------->
var string1 = `'! !'`;
var string2 = `'123456789'`;
var string3 = `"(E3at m2e2!!)"`;
var string4 = `"Wh7y can't we3 buly the goo0d software3? #cheapskates3"`;
//
var clean = cleanedString => {
    const regex = /\d/g;
    const cleanedstr = cleanedString.replace(regex, ``);
    return cleanedstr;
}
//
console.log(clean(string1));
console.log(clean(string2));
console.log(clean(string3));
console.log(clean(string4));

//---------------------------------------- #5 ---------------------------------------->
var string5 = `SSttrriinngg`;
var helloWorld = `HHeelloo WWoorrlldd`;
var number = `11223344!!__`;
//
var deleteSame = deleteString => {
    const regex = /(.)\1+/g;
    const deleteStr = deleteString.replace(regex, `$1`);
    return deleteStr;
}
//
console.log(deleteSame(string5));
console.log(deleteSame(helloWorld));
console.log(deleteSame(number));

//---------------------------------------- #6 ---------------------------------------->
var array = [1,1,2,2,3,3,4,4,5,5];

var iDelete = iDeleteSame => {
    
}