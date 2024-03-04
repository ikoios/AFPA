let tab = [8, 2, 9, 4, 1];
//
function triBulle(t){
    let n = t.length;
    let temp;
    //
    for(let i = n-1; i > 0;i--){
        for(let j = 0; j < i; j++){
            if(t[j] > t[j+1]){
                temp = t[j];
                t[j] = t[j+1];
                t[j+1] = temp;
            }
        }
    }
}
triBulle(tab);
console.log(tab);