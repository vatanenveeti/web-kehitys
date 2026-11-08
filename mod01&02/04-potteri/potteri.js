"use strict";

const nimi = prompt("Kerro nimesi.");
const tupa = Math.floor(Math.random() * 4) + 1

if (tupa === 1) {
    document.querySelector("body").innerText = nimi + ", sinä olet Rohkelikko.";
} else if (tupa === 2) {
    document.querySelector("body").innerText = nimi + ", sinä olet Korpinkynsi.";
} else if (tupa === 3) {
    document.querySelector("body").innerText = nimi + ", sinä olet Puuskupuh.";
} else if (tupa === 4) {
    document.querySelector("body").innerText = nimi + ", sinä olet Luihunen.";
}