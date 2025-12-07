const prompt = require('prompt-sync')();

function simbolosEquilibrados(cadena) {
    let abiertos = ["(", "[", "{"];
    let cerrados = [")", "]", "}"];
    let correspondencia = [ ["(",")"], ["[","]"], ["{","}"] ];
    let pila = [];
    let error = -1;

    if (cerrados.includes(cadena[0])) return 0;

    for (let i = 0; i < cadena.length; i++) {
        let c = cadena[i];

        if (abiertos.includes(c)) {
            pila.push(c);
        } else if (cerrados.includes(c)) {
            let ultimo = pila.pop();
            let correcto = false;
            for (let j = 0; j < correspondencia.length; j++) {
                if (correspondencia[j][0] === ultimo && correspondencia[j][1] === c) {
                    correcto = true;
                }
            }
            if (!correcto) {
                error = i;
                break;
            }
        }
    }

    if (error === -1 && pila.length > 0) {
        error = cadena.length - 1;
    }

    return error;
}

while (true) {
    let texto = prompt("\nIngresa la expresión (o 'salir' para terminar): ");
    if (texto.toLowerCase() === "salir") break;

    let res = simbolosEquilibrados(texto);

    if (res === -1) {
        console.log("Perfecto:)");
    } else {
        console.log("Error en la posición :() " + res);
    }
}
console.log("\n¡terminado :V!");
//esta dificil
