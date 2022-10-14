/*
1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
*/

//const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

for(let i = 0; i < 10; i++) {
    const numero = i;
    console.log(numero, i);
}

/*
1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.
*/
//const number1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

for(let j = 0; j < 10; j++) {
    const numero1 = j;
   if (numero1 / 2 == 0){
    console.log("El resto es 0");
   }else  {
    console.log("no es 0");
   }
}


/*
1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'.
*/
//const dormir = "dormir";

for (k = 0; k < 10; k++){
    if(k<9){
        console.log("intentando dormir");
    }else {
        console.log("dormido");
    }
}