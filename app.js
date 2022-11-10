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


let mailUsuarioVerificar = document.querySelector('.correo');
let passUsuarioVerificar = document.querySelector('.contrasenia');
let btnIngresar = document.querySelector('.ingresar');

let usuariosLogueados = traerUsuariosLogueados();

btnIngresar.addEventListener('click', direccionarBienvenido);


function validarUsuarios() {
 let bandera;
 for (let i = 0; i < usuariosLogueados.length; i++) {
  let correo = usuariosLogueados[i].email.toString();
  let clave = usuariosLogueados[i].password.toString();
  if (mailUsuarioVerificar.value.toString().match(correo) &&
   passUsuarioVerificar.value.toString().match(clave)) {
   bandera = true;
   alert('Bienvenido');
   break
  }
  else {
   bandera = false;
   alert('los datos son incorrectos o no existe el usuario');
   break
  }
 }
 return bandera
}

function direccionarBienvenido() {
 let validacion = validarUsuarios();
 if (validacion == true) {
  //window.location = 'bienvenido.html';
  alert('ksksksk')
 }
}


