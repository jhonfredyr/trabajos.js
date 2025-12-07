function repetidos(lista) {
  let resultado = [];

  for (let i = 0; i < lista.length; i++) {
    for (let j = i + 1; j < lista.length; j++) {

      if (lista[i] === lista[j]) {
        resultado[resultado.length] = lista[i];
      }

    }
  }

  return resultado;
}

console.log(repetidos([10, 3, 5, 3, 10])); 
//esta dificil

