'use strict';

let luku = parseInt(prompt("Anna luku."));
const luvut = []

do {
    luvut.push(luku);
    luku = parseInt(prompt("Anna uusi luku."));
} while (luvut.includes(luku) == false); 

alert(luku + " on jo annettu.")

luvut.sort((a, b) => a - b);

for (const luku of luvut) {
    console.log(luku);
}