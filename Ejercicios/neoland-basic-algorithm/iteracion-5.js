/*
const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}
*/

/*1. if ( COMPLETAR ) {
    console.log("number2 dividido entre number1 es igual a 2");
  }
  */
 const number1 = 10;
 const number2 = 5;

 if(number1 / number2 == 2){
    console.log("number2 dividido entre number1 es igual a 2");
 }else {
    console.log("Error");
 }
 

  /*2. if ( COMPLETAR ) {
    console.log("number1 es estrictamente distinto a number2");
  }
  */
  const number3 = 10;
  const number4 = 5;
 
  if(number3 !==  number4 ){
     console.log("number1 es estrictamente distinto a number2");
  }else {
     console.log("son estrictamente iguales");
  }

  /*3. if ( COMPLETAR ) {
    console.log("number3 es distinto number1");
  }
  */
  const number5 = 10;
  const number6 = 5;
 
  if(number5 !=  number6 ){
     console.log("number3 es distinto number1");
  }else {
     console.log("number3 es igual number1");
  }
  
  /* 4. if ( COMPLETAR ) {
    console.log("number3 por 5 es igual a number1");
  }
  */
  const number7 = 9;
  const number8 = 45;

  if(number7 * 5 == number8){
    console.log("number3 por 5 es igual a number1");
  }else{
    console.log("number3 por 5 no es igual a number1");
  }

  /*5. if ( COMPLETAR ) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
  }
  */
 const number9 = 15;
 const number10 = 30;
 const number11 = 3;

 if(number11 * 5 == number9 && number9 * 2 ==number10 ){
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2")
 }else {
    console.log("Uno de los numeros o los dos es diferente");
 }

  /*6. if ( COMPLETAR ) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  }*/

  const number12 = 10;
  const number13 = 8;
  const number14 = 2;

  if(number13 / 2 == number12 || number12 / 5 == number14){
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  }else{
    console.log("fallo");
  }
