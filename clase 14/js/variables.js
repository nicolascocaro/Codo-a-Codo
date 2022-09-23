let valor1;
let valor2;
let resultado;
valor1 = 10;
valor2 = 21;
resultado = valor1 + valor2;
console.log(resultado);
alert(resultado);

let nombre = "Nicolás";//string
let apellido = "Cócaro";//string
let edad = 20;//number
let argentino = true; //booleano
//tipo objeto
const persona = {
    nombre: 'Nicolás',
    apellido: 'cócaro',
    edad: 20,
    letra: 'a',
    argentino: true
};
console.log('edad:',edad);
edad = 20;
console.log('edad:',edad);
console.log('variable apellido:', apellido);//linea 20
console.log(persona);
//mostrar algun atributo del objeto persona
console.log(persona.argentino, persona.apellido, persona.edad);
//dejar fijo un valor
const altura = 173
console.log('altura', altura);
//cambiar el valor de persona a un objeto vacio sin atributos
persona = {
    nuevoatributo: 150,
    tieneauto: true
};
console.log(persona);
//crear un nuevo objeto constante
const auto = {
    chasis: 123235,
    anio: 2022,
    color: 'rojo',
    nacional: true
};
console.log(auto);
//se puede cambiar los valores de los atributos de los objeto
auto.color = 'amarillo';
console.log(auto);