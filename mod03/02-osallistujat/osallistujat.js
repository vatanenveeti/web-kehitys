'use strict';

const lkm = parseInt(prompt("Osallistujien lukumäärä:"));
const osallistujat = []; 

for (let i = 0; i < lkm; i++) {
    const nimi = prompt(i + 1 +". osallistujan nimi:");
    osallistujat[i] = nimi;
}

osallistujat.sort();

for (const nimi of osallistujat) {
    document.querySelector("ol").innerHTML += "<li>" + nimi + "</li>";
}