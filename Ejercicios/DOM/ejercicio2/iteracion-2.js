/*
2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
*/

document.createElement("div");
document.createElement("p");

for (let i = 0; i <= 6; i++) {
	document.createElement("p");
  }

const newP = document.createElement("p");
const pText = document.createTextNode("Soy dinámico!");
newP.appendChild(pText);
document.body.appendChild(newP);

document.querySelector(".fn-insert-here").innerHTML = "Wubba Lubba dub dub";


const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul = document.createElement("ul");
document.body.appendChild(ul);

for (const app of apps) {
  const li = document.createElement("li");
  ul.appendChild(li);
  const liText = document.createTextNode(app);
  li.appendChild(liText);
  document.body.appendChild(li);
}

const nodesToRemove = document.querySelectorAll(".fn-remove-me");

for (const node of nodesToRemove) {
  node.remove();
}

const pBetweenDivs = document.createElement("p");

const pBetweenDivsText = document.createTextNode("Voy en medio!");

pBetweenDivs.appendChild(pBetweenDivsText);

const div = document.querySelector("div");

div.insertAdjacentElement("afterend", pBetweenDivs);

const allDivs = document.querySelectorAll("div");

for (const div of allDivs) {
  if (div.classList.contains("fn-insert-here")) {
    div.innerHTML = `
    <p>Voy dentro!</p>
    `;
  }
}