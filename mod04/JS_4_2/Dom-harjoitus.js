'use strict';

//1
const body = document.body;
const p = document.createElement("p");
p.innerText = "Mörkö nappaa nipsun";
body.appendChild(p);

//2
const div = document.createElement("div");
const h1 = document.createElement("h1");
h1.innerText = "Otsikko";
div.appendChild(h1);
body.appendChild(div);

//3
const ul = document.createElement("ul");
const eka = document.createElement("li");
const toka = document.createElement("li");
eka.innerText = "Eka";
toka.innerText = "Toka";
ul.appendChild(eka)
ul.appendChild(toka)
div.appendChild(ul)

//4
addEventListener("keydown", function(evt){
    console.log(evt.key);
    if (evt.key === " ") {
        const hyppy = document.createElement("p")
        hyppy.innerText = "Boing"
        body.appendChild(hyppy);;
    }
});