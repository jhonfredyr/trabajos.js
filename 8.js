function normalizar(frase){
  let vocales = ['a','e','i','o','u'];
  let vocacent = ['á','é','í','ó','ú'];
  let ind, j;
  let normal=''; 
  frase = frase.toLowerCase();
  for(ind =0; ind < frase.length; ind++){
    j = vocacent.indexOf(frase[ind]);
    if(j >= 0){
      normal += vocales[j];
    }
    else{
      if((frase[ind].match(/[a-z0-9]/i)) != null){
        normal += frase[ind]
      }
    }
  }
  return normal;
}
function cuentaCars(frase){
  let lista = [];
  let ind=0;
  frase = normalizar(frase);console.log(frase);
  for(let c = 0; c < frase.length; c++){
    ind = lista.findIndex((v)=>v.car == frase[c]);
    if( ind >= 0){
      lista[ind].veces++;
    } 
    else{
      
        lista.push({car: frase[c], veces:1});
    }
  }

  lista.sort((a,b)=>(a.car > b.car)?1:-1);
  return lista; 

}
//esta dificil
