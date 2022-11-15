

let mailUsuarioVerificar = document.querySelector('.correo');
let passUsuarioVerificar = document.querySelector('.contrasenia');
let btnIngresar = document.querySelector('.ingresar');

//let usuariosLogueados = traerUsuariosLogueados();

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


