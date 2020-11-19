let fruits = ["apple", "banana"];

//Acceder à un element via son index
let first = fruits[0];

//boucler sur un tableau
fruits.forEach(function (item, index, array) {
    console.log(item, index, array);
})

//"apple", 0, ["apple", "banana"]
//"banana", 1, ["apple", "banana"]




/******************************* */
/** INSTANCEs d'array */
/** Les methodes - les mutateurs */
/******************************* */

//Ajouter à la fin d'un tableau
let addToTheEnd = fruits.push("orange"); //fruits = ["apple", "banana", "orange"]


//Supprimer dernier element d'un tableau
let deleteLastElelement = fruits.pop(); //fruits = ["apple", "banana"]

//Supprimer premier element du tableau
let deleteFirstElement = fruits.shift()

//Ajouter au début d'un tableau
let AddFirstELement = fruits.unshift("kiwi");

//Supprimer element par son index
let deleteWithElementIndex = fruits.splice(position, 1) //supprime un element à position


//Supprimer des elements a partir de leur index
let deleteElements = fruits.splice(position, numberOfElementsToDelete);


//Reverse
var monArray = ["un", "deux", "trois"];
monArray.reverse();

console.log(monArray) // ["trois", "deux", "un"]



//Trier les elements d'un tableau et retourner le tableau
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // expected output: Array [1, 100000, 21, 30, 4]


var nombres = [1, 30, 4, 21, 100000]; //[1, 4, 21, 30, 100000]
nombres.sort(function (a, b) {
    return a - b;
});

//Version ecmacscript 2015 avec fonction flechée
nombres.sort((a, b) => a - b);


//fill, remplir tous les elements d'un tableau entre deux index avec une valeur statique
const array1 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4)); // expected output: [1, 2, 0, 0]
// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

/******************************* */
/** INSTANCEs d'array */
/** Les methodes - les accesseurs */
/******************************* */

//Copier un tableau
let copy = fruits.slice();

//Fusionner un ou plusieurs tableaux - ne modifie pas les tableaux existants - renvoi un nouveau tableau
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3); // expected output: Array ["a", "b", "c", "d", "e", "f"]


//Determiner si un teableau contient un elements et renvoie true ou false
const array1 = [1, 2, 3];
console.log(array1.includes(2)); // expected output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // expected output: true


//Renvoie le premier indice pour lequel on trouve l'element recherché
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // expected output: 1
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison', 2)); // a partir de 2 //output 4


//joindre les elements
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // expected output: "Fire,Air,Water"

//dernier index
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo')); // expected output: 3


/******************************* */
/** methode */
/******************************* */
s
//isArray
Array.isArray([1, 2, 3]); // true
Array.isArray({
    toto: 123
}); // false
Array.isArray("tototruc"); // false
Array.isArray(undefined); // false



/******************************* */
/** methode d'itération*/
/******************************* */
filter, forEach, reduce, map, find

//filter - retourne un NOUVEAU tableau contenant les elements du tableau d'origine qui remplissent une condition determinée par la fonction callback
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); // expected output: Array ["exuberant", "destruction", "present"]


//Find - renvoie le premier element du tableau qui respecte la condition
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found); // expected output: 12


//forEach - permet d'effectuer une action donnée sur chaque element du teableau
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"


//Reduce - applique une fonction qui est un accumulateur, et qui traite chaque valeur d'une liste, de la gauche vers la droite afin de le réduire a une seula valeur.
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer)); // 1 + 2 + 3 + 4  // expected output: 10
console.log(array1.reduce(reducer, 5)); // 5 + 1 + 2 + 3 + 4  // expected output: 15


//Map - crée un nouveau tableau avec les resultat des appels d'un fonction fournie sur chaque element du tableau
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1); // expected output: Array [2, 8, 18, 32]



/******************************* */
/** BOUCLES*/
/******************************* */
//for, do...while, while, break, continue, for...in, for...off


//do while
let i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);

//while
let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
}

while (memo == true) {
    console.log("Coucou monde !"); //attention aux boucles infinies
}


//instruction Break
//Utilisée pour finir l'execution d'un boucle, d'une instruction switch ou avec un label.

for (i = 0; i < a.length; i++) {
    if (a[i] === valeurTest) {
        break;
    }
}


//instruction Continue - permet de reprendre un boucle
let i = 0;
let n = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    n += i;
    console.log(n); // 1, 3, 7, 12
}


//For in
for (variable in objet) {
    instruction
}


//for of
for (variable of objet) {
    instruction
}

let arr = [3, 5, 7];
arr.toto = "coucou";

for (let i in arr) {
    console.log(i); // affiche 0, 1, 2, "toto" dans la console
}

for (let i of arr) {
    console.log(i); // affiche 3, 5, 7 dans la console
}


/******************************* */
/** INSTRUCTIONS CONDITIONNELLES*/
/******************************* */

//IF 
if (condition_1) {
    instruction_1;
} else if (condition_2) {
    instruction_2;
} else if (condition_n) {
    instruction_n;
} else {
    dernière_instruction;
}


function checkData(maChaîne) {
    if (maChaîne.length == 3) {
        return true;
    } else {
        alert("Veuillez saisir trois caractères. " +
            maChaîne + " n'est pas valide.");
        return false;
    }
}


//switch
switch (fruit) {
    case "Orange":
        console.log("Les oranges sont à 60 centimes le kilo.");
        break;
    case "Pomme":
        console.log("Les pommes sont à 32 centimes le kilo.");
        break;
    case "Banane":
        console.log("Les bananes sont à 48 centimes le kilo.");
        break;
    case "Cerise":
        console.log("Les cerises sont à 3€ le kilo.");
        break;
    case "Mangue":
        console.log("Les mangues sont à 50 centimes le kilo.");
        break;
    default:
        console.log("Désolé, nous n'avons pas de " + fruittype + ".");
}
console.log("Souhaitez-vous autre chose ?");




//REGEX MATCH
//string.match(myregex) //return elements that match regex

function translatePigLatin(str) {
let x =str;
let regex = /^[^aeiou]+/; //
let result = str.match(regex);


  console.log(result);
}

translatePigLatin("csssonsonant");// result csss