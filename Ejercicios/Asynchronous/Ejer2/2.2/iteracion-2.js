//preguntar sobre este ejercicio. me base en un ejempo de internet pero aun asi no lo entiendo bien.

/* function getCharacters () {
    fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}

getCharacters(); */

async function getCharacters () {

    const characters = await fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(characters => console.log(characters));
}

getCharacters();

