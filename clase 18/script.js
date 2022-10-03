//funcion flecha / arrow function

const arraypalabras = [];

function addpalabra() {
    //capturar el valor del input
    const valuepalabra = document.getElementById('palabra').value; //el .value recupera el valor de lo ingresado, sin eso se recupera la etiqueta del html

    //validacion (que no sea vacio)
    if(valuepalabra === '') {
        alert('Debe completar la palabra');
        return;
    }

    //agregar la palabra al array
    arraypalabras.push(valuepalabra);
    /*console.log(arraypalabras);*/
    listarpalabras();
}

function listarpalabras() {
    //validar que no esté vacío el array
    if(arraypalabras.length === 0) {
        return;
    }
    
    //D.O.M
    //recorrer el array e ir agregando los elementos
    const ul = document.createElement('ul');//crear un ul
    for(let unapalabra of arraypalabras) {
        const li = document.createElement('li');//crear un li
        //id al li
        li.id = Math.random();//0 - 0,9999999999
        li.className = 'texto-rojo';
        li.innerHTML = unapalabra;
        //evento dinamico al li
        li.addEventListener('click', function() {
            alert('dentro del evento onclick del li')
        });
        ul.appendChild(li);
    }
    document.getElementById('listado').appendChild(ul);
}