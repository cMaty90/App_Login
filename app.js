let vectorUsuarios = [
 usuario1 = {
  userId: 1,
  username: "usu1",
  email: "usuario1_@gmail.com",
  password: "uno123",
  name: "matias",
  lastname:"becerra"
 },

 usuario2 = {
  userId: 2,
  username: "usu2",
  email: "usuario2_@gmail.com",
  password: "dos345",
  name: "franco",
  lastname:"diaz"
 },

 usuario3 = {
  userId: 3,
  username: "usu3",
  email: "usuario3_@gmail.com",
  password: "tres456",
  name: "valentina",
  lastname:"gomez"
 }
 
]

//agrego los 3 primeros usuarios
vectorUsuarios.forEach(usuario => {
 localStorage.setItem(JSON.stringify(usuario.email),JSON.stringify(usuario))
});


const traerUsuariosLogueados = () => {
 let usuario;
 let vectorLogueados = [];
 vectorUsuarios.forEach((u) => {
 usuario = JSON.parse(localStorage.getItem(JSON.stringify(u.email)));
 vectorLogueados.push(usuario);
 })
 return vectorLogueados
}










