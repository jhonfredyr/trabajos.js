function ordenAsc(lista){
  for(let i=1;i<lista.length;i++) if(lista[i]<lista[i-1]) return false
  return true
}
console.log(ordenAsc([1,2,3,6,7,19])) 
console.log(ordenAsc([12,2,9,6,7,19])) 
console.log(ordenAsc([4]))
console.log(ordenAsc([]))
//esta dificil
