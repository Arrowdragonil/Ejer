// Contador de repeticiones
//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que 
//lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [ 'code','repeat', 'eat','sleep','code','enjoy','sleep','code','enjoy','upgrade','code'];



function repeatCounter(rep) {
  
 let contador = 0;

 for(i = 0; i < rep.length; i++){
  for(o of rep[i]){
    if(o ===rep){
      contador++;
    }
  }
 }return contador;

 }
 console.log(repeatCounter(counterWords , 'code','sleep','enjoy'));




    
    
    
    
    
    
    
    
  
  