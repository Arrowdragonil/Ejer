//Calcular la suma

const numbers = [1, 2, 3, 5, 45, 37, 58];

const functionsumAll = (array) => {
   
    let sum = 0;

    for(let i=0; i<array.length;i++){
      
       
        sum +=  array[i];

    }return sum;
}
   console.log(functionsumAll(numbers));
