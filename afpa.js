var nbre = prompt("Saisir un nombre");
console.log(nbre);
var estPremier = true;

for (var i = 2; i < nbre; i++) {
    if (nbre %i == 0) {
        console.log(nbre+ "est pas premier car il est divible par",i);
        estPremier = false;
        break;
    }
}
if(estPremier){
    console.log('estPremier');
}

// for (var index = 2; index < nbre; index++) {
//     if (nbre % index == 0) {
//         console.log(nbre+ "n'est pas premier");
//         //estPremier = false;
//         break;
//     }
//     if (index == nbre-1) {   
//         console.log(nbre+ "est  premier");
//         break;
//         //estPremier = true;
//     }
    
// }
//console.log(estPremier);