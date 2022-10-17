/*
Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros

*/


function r(suma, a, b) {
    return suma(a, b);
}
const c = r((a,b) => a + b, 10, 5);
console.log(c);




function r(suma, a, b) {
    return suma(a, b);
}
const d = r((a,b) => a + b);
console.log(d);




function r(suma, a, b) {
    return suma(a, b);
}
const e = r((a,b) => a + b, 10);
console.log(e);



