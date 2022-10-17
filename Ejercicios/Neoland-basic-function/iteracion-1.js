//Iteración #1: Buscar el máximo
const array = [1,2,69,17];

function max(numberOne , numberTwo) {
    
    return Math.max(numberOne,numberTwo);
    
};
console.log(array.reduce(max));
