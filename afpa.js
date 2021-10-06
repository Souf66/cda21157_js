// function addition(chiffre1,chiffre2,chiffre3) {
//     var calcul = chiffre1+chiffre2+chiffre3;
    
//     return calcul;
// }
function addition(...chiffres) {
    var resultat=0;
    chiffres.forEach(chiffre => {
        //resultat += chiffre;
        resultat = resultat +chiffre;
    });
    // Autre méthode
    // for (var index = 0; index < chiffres.length; index++) {
    //     console.log(" BOUCLE FOR: "+chiffres[index]); 
    // }
    return resultat;
}

console.log(   addition(5,15,25)   );
console.log(   addition(15,25)   );
console.log(   addition(25)   );







































function multiplication(nbre) {
    //nombre = 5;
    var resultat="";
    for(var index=1; index <= 10; index++){
        //resultat += nbre,"*",index,"=",nbre*index;
       resultat += nbre+"*"+index+"="+nbre*index+"\n";
        //resultat = resultat + nbre,"*",index,"=",nbre*index;
        //console.log(nbre,"*",index,"=",nbre*index);
    }
    //console.log(resultat);
    return resultat;
}

//var nombre = prompt("Saisir un nombre");
//console.log(multiplication(nombre));
