function remCharAt(str, pos) {
    
    let arr = str.split('');
    
    arr.splice(pos, 1); 
   
    return arr.join('');
}
    
function permutaciones(mystr) {
   
    if (mystr.length === 1) {
        return [mystr];
    }

    let perm, res = [];

    for (let i = 0; i < mystr.length; i++) {
        
        perm = permutaciones(remCharAt(mystr, i));
        perm = perm.map(function(v) { return this + v }, mystr[i]); 
        res = res.concat(perm);
    }

    res = Array.from(new Set(res)); 
    
    return res;
}

const ejemplo = "abc";
const resultado = permutaciones(ejemplo);
console.log(`Permutaciones de "${ejemplo}" (Total: ${resultado.length}):`);
console.log(resultado.join(' - '));
//esta dificil
