var questions = [
    {
    question: 'Est-ce que tu aimes le JavaScript ?',
    reponse : 'Oui'
    },
    {
    question: 'Le JavaScript est une évolution du Java ?',
    reponse : 'Non'
    },
    {
    question: 'Le JavaScript est proche du Java ?',
    reponse : 'Non'
    },
    {
    question: 'Le JavaScript est un langage d\'objet par prototypage ?',
    reponse : 'Oui'
    },
    {
    question: 'Le JavaScript est souvent utilisé coté client ?',
    reponse : 'Oui'
    },
    {
    question: 'Le JavaScript peut être utilisé coté client et serveur ?',
    reponse : 'Oui'
    }
];
var bonneRep=0;
var mauvaiseRep=0;
for(var i =0; i < questions.length; i++){
    //var reponse = prompt(questions[i].question);
    //if( reponse.toLowerCase() == questions[i].reponse){
    if(prompt(questions[i].question).toLowerCase() == questions[i].reponse.toLowerCase()){
        console.log("Bonne réponse pour la question ", questions[i].question);
        //bonneRep++;
        bonneRep = bonneRep+1;
    }else{
        console.log("Faux! la bonne réponse à la question ", questions[i].question, "était ", questions[i].reponse);

        mauvaiseRep++;
    }
}

console.log("Vous avez", bonneRep, "bonnes réponses");
console.log("Vous avez", mauvaiseRep, "mauvaises réponses");




// var fruits = ["bananes", "Pommes","Raisin","Fraises","Oranges","Kiwi"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// var nombre = [55,66,78,98];
// var personnes = [
//     {
//         nom:"Camara",
//         moyenne:15,
//         email:"test@test",
//         admis: true
//     },
//     {
//         nom:"Test",
//         moyenne:12,

//     }
// ]

// console.log(personnes);
// console.log(personnes[0].nom+"a une moyenne "+personnes[0].moyenne);

// console.log(personnes[0].nom," a une moyenne de: ",personnes[0].moyenne);

// console.log("DANS LA BOUCLE");
// for(var i = 0; i < fruits.length; i++){
//     if(fruits[i] == "Kiwi"){
//         console.log(fruits[i]);
//     }
//     else{
//         console.log("Oups !!!!");
//     }
// }

//Les boucles
//while
// var index = 5;
// while(index > 0){
//     console.log(index);
//     //alert("j'aime le javascript");
//     console.log("j'aime le javascript");
//     //index++; // incrémentation
//     //index= index +1
//     index--; // décrémentation
// }
//for
console.log("Boucle for");
for(var index = 0; index < 5; index++){
     console.log("j'aime le javascript");
 }
var index = 0;
 do{
     console.log("Test")
     index ++;
}
while( index <5 )


// // var annee = prompt("Saisir une année");

// // console.log(annee);
// /**
//  2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096.
//  */
// //  if ((annee%4 != 0 && annee%100 != 0) || (annee %400 == 0)){
// //     console.log("annee OK");
// // }
// // else{       
// //     console.log("annee KO");
// // }


// //Les boucles
// // //while
// // var index = 5;
// // while(index > 0){
// //     console.log(index);
// //     //alert("j'aime le javascript");
// //     console.log("j'aime le javascript");
// //     //index++; // incrémentation
// //     //index= index +1
// //     index--; // décrémentation
// // }
// //for
// // console.log("Boucle for");
// // for(var index = 0; index < 5; index++){
// //      console.log("j'aime le javascript");
// //  }
// // var index = 0;
// //  do{
// //      console.log("Test")
// //      index ++;
// // }
// // while( index <5 )
