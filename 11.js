function cadMinima(muestra, palabra) {
  for (let i = 0; i < palabra.length; i++) {
    for (let j = i + muestra.length; j <= palabra.length; j++) {
      let sub = palabra.slice(i, j);
      let cumple = true;
      for (let c of muestra) if (sub.split(c).length - 1 < muestra.split(c).length) cumple = false;
      if (cumple) return sub;
    }
  }
  return "";
}

console.log(cadMinima('nasa', 'antesala')); 

console.log(cadMinima('nesa', 'antesala'));
//esta dificil
