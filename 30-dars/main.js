// console.log(window);
// console.log(document);

// const text = document.getElementById("text");
// const fruits = document.getElementsByClassName("fruit");
// const fruits2 = document.getElementsByTagName("li");

// console.log(fruits, fruits2);

// const anor = document.querySelector(".list li:nth-child(2) > strong");
// const mevalar = document.querySelectorAll(".list li:nth-child(2) > strong");
// const text = document.querySelector("#text");
// console.log(text.innerHTML);
// console.log(text.innerText);

// let ul = document.getElementsByTagName("ul"); // [ul]
let ul = document.querySelector("ul"); // ul
let li = document.createElement("li"); // <li></li>
li.innerHTML = "<i>Gilos</i>"; // <li>Gilos</li>

ul.appendChild(li);
// ul.remove();

const html = document.querySelector("html");
html.setAttribute("lang", "en");
html.removeAttribute("lang");
// console.log(html.getAttribute("lang"));
