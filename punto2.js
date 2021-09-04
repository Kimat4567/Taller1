let array = []

const ArrayAleatorios = (tamanoArreglo, tamanoAuxiliar) => {
    if (tamanoArreglo == 0) {
        return array
    }
    numero = parseInt(Math.random() * (tamanoAuxiliar*10));
    for (let index = 0; index < tamanoAuxiliar; index++) {
        if (array[index] == numero) 
        {
            return ArrayAleatorios(tamanoArreglo,tamanoAuxiliar)
        }
    }
    array.push(numero);
    return ArrayAleatorios(tamanoArreglo-1,tamanoAuxiliar)    
}

const imprimirArreglo = () => 
{
    array.forEach(function(elemento, indice, array)
    {
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