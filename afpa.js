afpa();

function afpa() {
    console.log(5*2);
}
var test = prompt("un nombre");
//convertir en entier naturel
//test = parseInt(test);
//console.log(test);
//Convertir en nombre décimaux
test = parseFloat(test);
console.log(test);

afpa_v2(test,100);

function afpa_v2(nbre1, nbre2) {
    //console.log(nbre1*nbre2);

    if (nbre1 < 0) {
        var calcul = nbre1*nbre2;
        test =calcul/2;
        
        return false;
    }
    
    return false;
    return (nbre1*nbre2)/2;
}

console.log(moussa);

var moussa = function () {
    console.log("Je suis la fonction moussa");
}


//console.log(moussa);

//afpa();

