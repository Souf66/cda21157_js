
// console.log("Paris");

// function () {
//     var n = prompt("Un nombre");
//     var x = prompt("Un nombre");
//     console.log( n+x)
// })();



var afpa = "Paris";
var afpa = "75";
console.log(afpa);

//AVEC LET
let afpa1 = "Paris";
let afpa2 = "75";

console.log(afpa1);
/*
if (4<5){
    let test = 5;
    console.log("Dans le if "+test);
}
console.log("En dehors:"+test);*/

const array1 = ['a', 'b', 'c'];

array1.forEach(element => {console.log(element) });

var etudiants = [
                    ['Moussa', 9],
                    ['Homer', 11],
                    ['Jean', 12],
                    ['Dujardin', 11],
                    ['Miha', 17]
            ];
    etudiants.forEach(element => {
        console.log(element);
        element.forEach(el => {
            console.log("Dans le 2eme forEach:"+el);
            
        });
    });