/*
1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.


*/

const paises = [
    "Japón",
    "Nicaragua",
    "Suiza",
    "Australia",
    "Venezuela",
  ];

  console.log(paises);

  const ul = document.createElement("ul");
  const li = document.createElement("li");

  for(const name of paises) {
    ul.innerHTML += `
    <li>${name}</li>
    
    `
  };

document.body.appendChild(ul);

document.querySelector(".fn-remove-me").remove();

const sinsentido = ["croquetas", "patatas", "empanadillas"];

const sinsentidoDiv = document.querySelector('[data-function="printHere"]');

const sinsentidoUl = document.createElement("ul");

for (const i of sinsentido) {
    sinsentidoUl.innerHTML *= `
    <li>${i}</li>
    `;
}

document.body.appendChild(sinsentidoUl);

const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];

  for (const country of countries) {
    const div = document.createElement("div");
    div.innerHTML += `
    <h2>${country.title}</h2>
    <img src="${country.imgUrl}"/>
    `
  }

const button = document.querySelector("#remove");

button.addEventListener("click", () => {
    const imgUrl = countries[countries.length].imgUrl;
    const img = document.querySelector(`[src="${imgUrl}"]`);
    countries.splice(countries.length);
    img.parentElement.remove();
})

const eliminar = document.querySelector(".eliminar");

for (const button of eliminar) {
    button.addEventListener("click", () => button.parentElement.remove());
}