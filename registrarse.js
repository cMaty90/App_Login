
let vectorUsuarios = [
 user1 = {
  userId: 1,
  username: "usu1",
  email: "usuario1_@gmail.com",
  password: "uno123",
  name: "matias",
  lastname:"becerra"
 },

 user2 = {
  userId: 2,
  username: "usu2",
  email: "usuario2_@gmail.com",
  password: "dos345",
  name: "franco",
  lastname:"diaz"
 },

 user3 = {
  userId: 3,
  username: "usu3",
  email: "usuario3_@gmail.com",
  password: "tres456",
  name: "valentina",
  lastname:"gomez"
 }
 
]

localStorage.setItem('vectorUsuarios', JSON.stringify(vectorUsuarios));


 
const agregarNuevoUsuario = () => {
 let nroUsuario = vectorUsuarios.length+1;
 let userName = document.querySelector('.nombre-usuario').value;
 let correo = document.querySelector('.correo-usuario').value;
 let contrasenia = document.querySelector('.clave').value;
 let nombre = document.querySelector('.nombre').value;
 let apellido = document.querySelector('.apellido').value;
 
 let usuarioNuevo = {
  userId: nroUsuario,
  username: userName.toString(),
  email: correo.toString(),
  password: contrasenia.toString(),
  name: nombre.toString(),
  lastname:apellido.toString()
 }

 vectorUsuarios.push(usuarioNuevo);
 //let usuarioAgregado = vectorUsuarios[vectorUsuarios.length - 1];
 return vectorUsuarios
}


let form = document.querySelector('.formulario');
form.addEventListener('submit', (e) => {
 e.preventDefault();
 let vectorConNuevosUsuarios = agregarNuevoUsuario();
 for (let i = 0; i < vectorConNuevosUsuarios.length; i++) {
 localStorage.setItem('vectorUsuarios', vectorConNuevosUsuarios[vectorConNuevosUsuarios.length - 1]);
 }
})