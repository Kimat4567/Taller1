let array = []

const ArrayAleatorios = (tamano, tamanoAuxiliar) => {
    if (tamano == 0) {
        return array
    }

    array.push(parseInt(Math.random() * (tamanoAuxiliar*10)));
    return ArrayAleatorios(tamano-1, tamanoAuxiliar)
}

const imprimirArreglo = () => {
    array.forEach(function(elemento, indice, array){
        console.log(elemento)
    })
}

console.log("Escriba el tamaño del arreglo: ");
var stdin = process.openStdin();

stdin.on("data", function (capturaNumero) {
    var numero = capturaNumero;
    numero = parseInt(numero, 10);
    console.time("TIEMPO")
    ArrayAleatorios(numero,numero);
    console.timeEnd("TIEMPO")
    imprimirArreglo();
    process.exit(0);
});