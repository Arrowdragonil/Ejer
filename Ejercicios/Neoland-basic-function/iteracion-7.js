/*
Buscador de nombres

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe
dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true 
y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
*/
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param) {
    const i = [];
    const element = "Peter";

    const all = nameFinder.indexOf(element);

    if(all != -1){

        nameFinder.push(all);
        all = i.indexOf(element, all, +1);
    }

    console.log(nameFinder);


  }

  //Pendiente
