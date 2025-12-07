function insert(lista){
  let res=[]
  for(let n of lista){
    res.push(n)
    if(n%2===0) res.push(0)
  }
  return res
}
console.log(insert([2,4,5,7]))
console.log(insert([1,4,7,8]))
console.log(insert([])) 
//esta dificil

