/***Función swap**

Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
Retorna el array resultante.

Sugerencia de array:
*/

const personajes = [
    "Roxas",
    "Xion",
    "Lea",
    "Luxu",
  ];
  
  const swap = (personaje, i, j) => {
    let personaje1 = personaje[i];
    personaje.splice(i, 1, personaje[j]);
    personaje.splice(j, 1, personaje1);
    return personaje;
  };
  
  console.log(swap(personajes, 1, 2));
  