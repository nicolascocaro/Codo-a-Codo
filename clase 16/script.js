const edadnico = 20;
const edadvicky = 26;
const edadcarlos = 36;

const edades = [];
//agregar elementos al vector con push
edades.push(36);//0
edades.push(edadvicky);//1
//agregar elemento con la posicion del vector
edades [2] = edadnico;
console.log(edades);
//recorrer el vector
console.log('0:', edades[0]);
console.log('1:', edades[1]);
console.log('2:', edades[2]);
//agregar mas edades
edades.push(30);
edades.push(40);
edades.push(46);
//uso de ciclos
for(let i = 0; i < edades.length; i++) { //edades.length = n
    console.log(`dentro del for ${i}:`, edades[i]);
}
function calcular() {
    const nota1value = document.getElementById('nota1').value;
    const nota2value = document.getElementById('nota2').value;
    //para procesar solo si el usuario cargo LAS DOS notas
    if (nota1value !== '' && nota2value !== '') {
        procesarnotas(+nota1value, +nota2value);
    } else {
        alert('complete las dos notas');
    }
    //invocar la funcion que procesa las notas
    procesarnotas(nota1value,nota2value);
}

function procesarnotas(nota1,nota2) {
    const notas = [nota1, nota2];
    //otra forma
    /*const notas = [];
    notas [0] = nota1;
    notas [1] = nota2;*/
    /*
    notas.push(nota1);
    notas.push(nota2);*/
    let min = calcularmin(notas);
    let promedio = calcularprom(notas);
    let max = calcularmax(notas);
    console.log('minimo:', min);
    console.log('maximo:', max);
    console.log('promedio:', promedio)
}

function calcularmax(notas) {
    let max;
    //definir una variable local
    if(notas[0] > notas [1]) {
        max = notas [0];
    }
    if(notas[1] > notas [0]) {
        max = notas [1];
    }
    if(notas[0] === notas [1]) {
        max = notas [0];
    }
    return max;
}

function calcularmin(notas) {
    let min;
    //definir una variable local
    if(notas[0] < notas [1]) {
        min = notas [0];
    }
    if(notas[1] < notas [0]) {
        min = notas [1];
    }
    if(notas[0] === notas [1]) {
        min = notas [0];
    }
    return min;
}

function calcularprom(notas) {
    //recorrer el vector emulando las notas
    let acumulador = 0;
    for(let i=0; i<notas.length; i++) {
        acumulador = acumulador + notas[i];
    }
    const promedio = acumulador / notas.length;
    return promedio;
}