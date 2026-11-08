"use strict";

const numerot = [];

for (let i = 0; i<=4; i++) {
    numerot[i] = parseInt(prompt("Anna luku."));
}

for (let i = numerot.length - 1; i >= 0; i--) {
    document.querySelector("body").innerHTML += numerot[i];
}