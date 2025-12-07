function conteoOrdenado(lista){
  let obj = {}
  for(let i of lista) obj[i] = (obj[i]||0)+1
  return Object.keys(obj).sort((a,b)=>obj[a]-obj[b]).map(k=>({[k]:obj[k]}))
}


let colores = ['verde','azul','verde','azul','azul','gris']
console.log(conteoOrdenado(colores))
//esta dificil
