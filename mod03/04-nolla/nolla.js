'use strict';

let luku = parseInt(prompt("Anna luku."));
const luvut = []

while (luku != 0) {
    luvut.push(luku);
    luku = parseInt(prompt("Anna uusi luku."));
}

luvut.sort((a, b) => a - b);

for (const luku of luvut) {
    console.log(luku);
}