'use strict'

const ul = document.querySelector("#target");

const first = document.createElement("li");
first.innerText = "First item";
ul.appendChild(first);

const second = document.createElement("li");
second.innerText = "Second item";
second.setAttribute("class", "my-item")
ul.appendChild(second);

const third = document.createElement("li");
third.innerText = "Third item";
ul.appendChild(third);