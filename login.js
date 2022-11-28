

let usuariosLogueados = JSON.parse(localStorage.getItem('vectorLogueados'));
let btnIngresar = document.querySelector('.ingresar');
btnIngresar.addEventListener('click', direccionarBienvenido);

function direccionarBienvenido() {
 let validacion = validarUsuarios();
 if (validacion) {
  window.open('./bienvenido.html');
 }
 else {
  alert('ocurrio un error al iniciar sesion, revise que los datos sean correctos');
 }
}

function validarUsuarios() {
 let bandera;
 for (let i = 0; i < usuariosLogueados.length; i++) {
  if (usuariosLogueados[i].email == document.querySelector('.correo').value &&
   usuariosLogueados[i].password == document.querySelector('.contrasenia').value) {
   
   let infoUsuarioBienvenido = [usuariosLogueados[i].name, usuariosLogueados[i].username];
   localStorage.setItem('usuarioBienvenido', JSON.stringify(infoUsuarioBienvenido));
   bandera = true;
   break
  }  
  else {
  bandera = false;
  }
 }
 return bandera
}



