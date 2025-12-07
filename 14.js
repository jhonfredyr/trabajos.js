function contarOpciones(lista) {

  return lista.reduce((acumulador, elemento) => {

    acumulador[elemento] = (acumulador[elemento] || 0) + 1;
    return acumulador;
  }, {});
}


function ordenarPorFrecuencia(objetoConteo) {

  const entradas = Object.entries(objetoConteo);

  entradas.sort((a, b) => a[1] - b[1]);

  return entradas.map(([nombre, cantidad]) => {
    return { [nombre]: cantidad }; 
  });
}

const colores = ['verde', 'azul','amarillo', 'verde', 'azul', 'azul', 'gris'];


const resultadoConteo = contarOpciones(colores);
console.log("Objeto de recuento:", resultadoConteo);

const resultadoOrdenado = ordenarPorFrecuencia(resultadoConteo);
console.log("Lista ordenada:", resultadoOrdenado);
//esta dificil
