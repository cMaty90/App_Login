let infoUsuario = JSON.parse(localStorage.getItem('usuarioBienvenido'));
let nombreEnSesion = infoUsuario[0];
let nombreUsuarioEnSesion = infoUsuario[1];


let nombre = document.querySelector('.nombre');
let nombreUsuario = document.querySelector('.nombre-usuario');
let btnCerrarSesion = document.querySelector('.cerrar-sesion');

window.addEventListener('load', () => {
 nombre.textContent = `nombre: ${nombreEnSesion}`;
 nombreUsuario.textContent = `usuario: ${nombreUsuarioEnSesion}`; 
})

btnCerrarSesion.addEventListener('click', () => {
 alert('esta por cerrar sesion');
 window.location = './login.html';
 localStorage.removeItem('usuarioBienvenido');
})