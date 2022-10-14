// Calcular el promedio


const numbers = [12, 21, 38, 5, 45, 37, 6];

const functionsProm = (array) => {
   
    let sum = 0;

    for(let i=0; i<array.length;i++){
      
       
        sum +=  array[i];

    }return sum / array.length;
}
   console.log(functionsProm(numbers));