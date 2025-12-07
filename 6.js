function combinaciones(cadena, n) {
    const resultado = [];
    const longitud = cadena.length;

    function generar(indiceInicio, combinacionActual) {
        if (combinacionActual.length === n) {
            resultado.push(combinacionActual);
            return;
        }

        if (indiceInicio >= longitud) {
            return;
        }

        for (let i = indiceInicio; i < longitud; i++) {
            generar(i + 1, combinacionActual + cadena[i]);
        }
    }

    generar(0, "");
    return resultado;
}


const cadena = "abcd";
const ancho = 3;
console.log(combinaciones(cadena, ancho));
