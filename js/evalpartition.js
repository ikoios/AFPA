function partition(t,p,r) {
    let i = p+1;
    let j = r;
    let pivot = t[p];
    while(i<=j) {
        while(((i<=r)&&(t[i]<=pivot))) {
            i++;
        }while(((j>=p)&&(t[j]>pivot))) {
            j--;
        }if(i<j) {
            t[i] = t[i]+t[j];
            t[j] = t[i]-t[j];
            t[i] = t[i]-t[j];
        }
    }
    t[j] = t[j]+t[p];
    t[p] = t[j]-t[p];
    t[j] = t[j]-t[p];
    return j;
}
function trirapide(t,p,r) {
    let q;
    if(p<r) {
        q = partition(t,p,r);
        trirapide(t,p,q-1);
        trirapide(t,q+1,r);
    }
}
let box = parseInt(Math.random()*11);
let tab = new Array(box);
function tableaur(t) {
    let i;
    for(i=0; i<t.length; i++) {
        t[i] = parseInt(Math.random()*11);
    }
}
function tableaua(t) {
    let i;
    for(i=0; i<t.length; i++) {
        document.write(`/`+`[`+i+`]`+t[i]+`/`);
    }
}
tableaur(tab);
tableaua(tab);
trirapide(tab,0,tab.length-1);
document.write(`<br><br>`);
tableaua(tab);