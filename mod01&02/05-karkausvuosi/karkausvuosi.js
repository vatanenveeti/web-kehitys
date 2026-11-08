"use strict";

const vuosi = parseInt(prompt("Anna vuosiluku."));


if (vuosi % 4 == 0) {
    if (vuosi % 100 == 0 && vuosi % 400 != 0) {
        document.querySelector("body").innerText = vuosi + " ei ole karkausvuosi.";
    } else {
        document.querySelector("body").innerText = vuosi + " on karkausvuosi.";
    } 
} else {
    document.querySelector("body").innerText = vuosi + " ei ole karkauvuosi.";
} 