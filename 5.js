function generarPassword() {
  let may = "HOLA";
  let min = "hola";
  let num = "123";
  let esp = "!@#";

  let pass = "";

  
  pass += may[Math.floor(Math.random() * may.length)];
  pass += min[Math.floor(Math.random() * min.length)];
  pass += num[Math.floor(Math.random() * num.length)];
  pass += esp[Math.floor(Math.random() * esp.length)];


  let total = 8 + Math.floor(Math.random() * 8);

  let todos = may + min + num + esp;

  while (pass.length < total) {
    pass += todos[Math.floor(Math.random() * todos.length)];
  }

  return pass;
}


console.log(generarPassword());
//esta dificil

