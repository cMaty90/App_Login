//import { vectorUsuarios, vectorLogueados } from './registrarse';

// let mailUsuarioVerificar = document.querySelector('.correo').value.toString();
// let passUsuarioVerificar = document.querySelector('.contrasenia').value.toString();

// vectorUsuarios
// vectorLogueados

let btnIngresar = document.querySelector('.ingresar');
 
let usuariosLogueados =  JSON.parse(localStorage.getItem('vectorLogueados'));

btnIngresar.addEventListener('click', direccionarBienvenido);

function direccionarBienvenido() {
 let validacion = validarUsuarios();
 if (validacion) {
  window.open('./bienvenido.html');
 }
 else {
  alert('ocurrio un error al direccionar')
 }
}

function validarUsuarios(e) {
 let bandera;
 for (let i = 0; i < usuariosLogueados.length; i++) {
  if (usuariosLogueados[i].email == document.querySelector('.correo').value &&
      usuariosLogueados[i].password == document.querySelector('.contrasenia').value) {
   alert(usuariosLogueados[i].email)
   alert(usuariosLogueados[i].password)
   bandera = true
   break
  }  
  else {
  bandera = false;
  }
 }
 return bandera
 e.preventDefault();
}



