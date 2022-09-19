function calcular() {
    let valor1 = prompt('Valor 1:');
    let operacion = prompt('Ingrese la operación(+,-,*,/)');
    let valor2 = prompt('Valor 2:')
    console.log(valor1);
    console.log(valor2);
    console.log(operacion);
    const resultado = parseInt(valor1) + parseInt(valor2);
    console.log(resultado);
}