/***Función rollDice**

Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que queramos que tenga el 
dado que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de 
dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de 
javascript **Math.random();**

*/

const rollDice = faces => Math.floor(Math.random() * faces + 1);



console.log("el numero es: "+rollDice(10));
console.log("el numero es: "+rollDice(10));
console.log("el numero es: "+rollDice(10));




//reto crear dados de roll que al salir doble 10 te diga exito y al salir doble 1 diga la pifiaste.
