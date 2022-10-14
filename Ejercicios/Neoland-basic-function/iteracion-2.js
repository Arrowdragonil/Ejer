//Iteración #2: Buscar la palabra más larga

//const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

const functionPalabraLarga = (largo) => {

    let palabraMasLarga = "";

    for(i of largo){
        if(i.length > palabraMasLarga.length){
            palabraMasLarga = i;
        }
    } return palabraMasLarga;
    
}

console.log(functionPalabraLarga(avengers));