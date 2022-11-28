

let vectorUsuarios = [
 {
  userId: 1,
  username: "usu1",
  email: "usuario1_@gmail.com",
  password: "uno123",
  name: "matias",
  lastname:"becerra"
 },

  {
  userId: 2,
  username: "usu2",
  email: "usuario2_@gmail.com",
  password: "dos345",
  name: "franco",
  lastname:"diaz"
  },

  {
  userId: 3,
  username: "usu3",
  email: "usuario3_@gmail.com",
  password: "tres456",
  name: "valentina",
  lastname:"gomez"
  }
 
]


const vectorLogueados = JSON.parse(localStorage.getItem('vectorLogueados'));

agregarNuevoUsuario()

function agregarNuevoUsuario() {
 if (vectorLogueados == null) {
  localStorage.setItem('vectorLogueados', JSON.stringify(vectorUsuarios));
  location.reload();
 }
 else {
  
  document.querySelector('.btnRegistrar').addEventListener('click', (e) => {
   let Correo = document.querySelector('.fila2__correo').value;
   let RepCorreo = document.querySelector('.fila2__rep-correo').value;
   let Clave = document.querySelector('.fila4__clave').value;
   let RepClave = document.querySelector('.fila4__rep-clave').value;

   if (Correo!=RepCorreo) {
    alert('el correo no coinciden');
    e.preventDefault();
   }
   else if (Clave != RepClave) {
    alert('la contraseña no coincide');
    e.preventDefault();
   }
   else {
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
     e.preventDefault();
   }   
  })
  

 }
}



























