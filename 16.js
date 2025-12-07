const prompt = require("prompt-sync")();


function insertar(numeros) {
    const resultado = [];

    for (let n of numeros) {
        resultado.push(n);
        if (n % 2 === 0) {
            resultado.push(0);
        }
    }

    return resultado;
}

const entrada = prompt("Escribe números separados por coma: ");
const lista = entrada.split(",").map(x => parseInt(x.trim()));

console.log("Resultado:", insertar(lista));
//esta dificil
