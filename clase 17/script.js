//filtrar elementos
const alumnos = [
    {
        edad: 20,
    nombre: "nicolas"
    },
    {
        edad: 36,
        nombre: "carlos"
    },
    {
        edad: 30,
        nombre: "juan"
    },
    {
        edad: 40,
        nombre: "eduardo"
    }
];
//declarar un array auxiliar donde guardar los que cumplen
const aux = [];
for(let unalumno of alumnos) { //foreach - imperativo (que y como)
    if(unalumno.edad < 40) {
        aux.push(unalumno.nombre);
    }
}
console.log('menos40', aux);

//método filter
//nombrearray.filter(aux => expresion a evaluar)
const aux2 = alumnos.filter(unalumno => unalumno.edad < 40); //declarativo (solo el que quiero)
console.log('menores de 40:', aux2);

//método map
const nombresdealumnos = aux2.map(unalumno => unalumno.nombre); //solo el que quiero
console.log('nombres de alumnos menores a 40:', nombresdealumnos);

//método some viejo
let existe = false;
for(let i = 0; i < alumnos.length && !existe; i++) {
    existe = alumnos[i].edad == 40;
}
console.log(existe)

//método some moderno
const existe2 = alumnos.some(unalumno => unalumno.edad == 40);
console.log(existe2)

//evaluar si todos los alumnos tienen 30 años
let todos30 = true;
for (i = 0; i < alumnos.length; i++) {
    if(alumnos[i].edad !== 30) {
        todos30 = false;
        break
    }
}
//otra forma
//for (let i = 0; i < alumnos.length && (todos30 = alumnos[i].edad !== 30); i++);
console.log(todos30)

//sumar todas las edades de los alumnos forma vieja
let edadtotal = 0;
alumnos.forEach(unalumno => edadtotal += unalumno.edad);
console.log(edadtotal)

//reduce (forma nueva de sumar)
//nombrearray.reduce((variable contador donde se acumulan los valores, variable valor actual) => contador + valor.number, valor inicial)
const edadtotal2 = alumnos.reduce((total,alumnoedad) => total + alumnoedad.edad, 0);
console.log(edadtotal2);