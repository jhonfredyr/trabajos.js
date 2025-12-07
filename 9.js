function calcu(a,b,op){
  if(op=="+") return a+b;
  if(op=="-") return a-b;
  if(op=="*") return a*b;
  if(op=="/"||op=="%") return b? (op=="/"? a/b : a%b) : null;
  return null;
}


console.log(calcu(3,4,"*"));
console.log(calcu(3,0,"/")); 
console.log(calcu(6,3,"%")); 
//esta dificil
