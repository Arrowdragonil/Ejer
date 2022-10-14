/*
1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
*/

const btn = document.querySelector('#boton');

btn.addEventListener("click", () => console.log('Click'));

const focus = document.querySelectorAll('input');

for (const i of focus) {
    i.addEventListener('focus', () => console.log(i.value));
    
    i.addEventListener('input', () => console.log(i.value));
}
