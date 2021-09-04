// Escribir un programa que encuentre la suma de los enteros positivos pares desde N hasta
// 2. Comprobar que si N es impar se imprima un mensaje de error.

const sumaEnteros = (n) => {
    if (n%2 != 0) {
        console.log("NO SE PERMITEN NUMEROS IMPARES");
    }
    
    if (n == 0) {
        return 0;
    }

    return n + sumaEnteros(n-2)
}

console.log("Escriba un numero PAR: ");
var stdin = process.openStdin();

stdin.on("data", function (capturaNumero) {
    var numero = capturaNumero;
    numero = parseInt(numero, 10);
    console.time("TIEMPO")
    console.log(sumaEnteros(numero));
    console.timeEnd("TIEMPO")
    process.exit(0);
});