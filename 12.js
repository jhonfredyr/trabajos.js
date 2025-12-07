function conteoOrdenado(lista) {
  const obj = {};
  for (let item of lista) obj[item] = (obj[item] || 0) + 1;
  return Object.keys(obj)
.sort((a,b) => obj[a]-obj[b])
.map(k => ({[k]: obj[k]}));
}


let colores = ['verde', 'azul', 'verde', 'azul','azul', 'gris'];
console.log(conteoOrdenado(colores));
//esta dificil
