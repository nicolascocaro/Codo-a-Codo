let edad = 0;
//sumar 1 a edad
edad = edad + 1;

let otraedad = edad++;
let edad2 = ++edad;

let altura = 175;
altura--;
--altura;

function incrementar() {
//obtener la etiqueta por su ID usando document y la funcion getelementbyid('id')
const labelContador = document.getElementById('contador');
let valorcontador = +labelContador.innerHTML;//el + convierte al elemento a tipo number
console.log(typeof valorcontador);
valorcontador++;
labelContador.innerHTML = valorcontador;
imprimepar(valorcontador);
}

function decrementar() {
    const labelContador = document.getElementById('contador');
let valorcontador = +labelContador.innerHTML;//el + convierte al elemento a tipo number
console.log(typeof valorcontador);
valorcontador--;
labelContador.innerHTML = valorcontador;
imprimepar(valorcontador);
}

function imprimepar(valor) {
    let textoparidad;
    if(espar(valor)) {
        textoparidad = 'ES PAR';
    } else {
        textoparidad = 'ES IMPAR';
    }

    actualizartexto('paridad', textoparidad);
}
function espar(valor) {
    if((valor % 2) === 0) {//=== compara tanto el valor como su tipo de variable
        return true;
    } else {
        return false;
    }
}

function actualizartexto(id, nuevovalor) {
    const labelParidad = document.getElementById(id);
    labelParidad.innerHTML = nuevovalor;
}