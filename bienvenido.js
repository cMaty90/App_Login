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
 alert('ha cerrado sesion y se borro info de LS')
 window.location = './index.html';
 localStorage.removeItem('usuarioBienvenido');
})