"use strict";
const ekaluku = parseInt(prompt("Ensimmäinen kokonaisluku:"));
const tokaluku = parseInt(prompt("Toinen kokonaisluku:"));
const kolmasluku = parseInt(prompt("Kolmas kokonaisluku:"));
const summa = ekaluku + tokaluku + kolmasluku

document.querySelector("body").innerHTML = summa;
