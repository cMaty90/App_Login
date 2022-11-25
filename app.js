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

localStorage.setItem('vectorLogueados', JSON.stringify(vectorUsuarios));

let usuariosLogueados = JSON.parse(localStorage.getItem('vectorLogueados'));
let btnIngresar = document.querySelector('.ingresar');
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
   alert(usuariosLogueados[i].email);
   alert(usuariosLogueados[i].password);
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
 e.preventDefault();
}



