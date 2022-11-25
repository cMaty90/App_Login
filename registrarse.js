let user1;
let user2;
let user3;

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

const vectorLogueados = JSON.parse(localStorage.getItem('vectorLogueados'));

if (vectorLogueados == null) {
 localStorage.setItem('vectorLogueados', JSON.stringify(vectorUsuarios));
 location.reload();
}
else {
 document.querySelector('.btnRegistrar').addEventListener('click', (e) => {
   
  vectorLogueados.push( newUser = {
    userId: vectorLogueados.length+1,
    username: document.querySelector('.fila1__user-name').value,
    email: document.querySelector('.fila2__correo').value,
    password: document.querySelector('.fila4__clave').value,
    name: document.querySelector('.fila1__name').value,
    lastname: document.querySelector('.fila1__last-name').value
  })
  
  localStorage.setItem('vectorLogueados',JSON.stringify(vectorLogueados));
  document.querySelector('.formulario').reset();
  e.preventDefault()
 })
}


























