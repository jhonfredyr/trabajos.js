function simbEquilibrados(str){
  let s=[]
  for(let i=0;i<str.length;i++){
    let c=str[i]
    if("([{".includes(c)) s.push(c)
    else if(")]}".includes(c)){
      if(!s.length) return i
      if("([{".indexOf(s.pop())!=="([{".indexOf(c)) return i
    }
  }
  return s.length?0:-1
}

console.log(simbEquilibrados("[1+x+3*(y-5)]")) /
console.log(simbEquilibrados("[1+x)"))        
console.log(simbEquilibrados("}1+x")) 
//esta dificil
