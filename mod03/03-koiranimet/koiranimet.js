'use strict';

const koirat = []; 

for (let i = 0; i < 6; i++) {
    const nimi = prompt(i + 1 +". koiran nimi:");
    koirat[i] = nimi;
}

koirat.sort();
koirat.reverse();

for (const nimi of koirat) {
    document.querySelector("ul").innerHTML += "<li>" + nimi + "</li>";
}