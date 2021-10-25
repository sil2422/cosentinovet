document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(){
 
    var txtNombre = document.getElementById('name').value;
    var txtMensaje = document.getElementById('msg').value;
    var txtCorreo = document.getElementById('mail').value;
    //Test campo obligatorio
    if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
        alert('ERROR: El campo nombre no debe ir vacío');
        return false;
      }
      //Test campo obligatorio
    if(txtMensaje == null || txtMensaje.length == 0 || /^\s+$/.test(txtNombre)){
        alert('ERROR: El campo mensaje no debe ir vacío ');
        return false;
      }
       //Test correo
    if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
        alert('ERROR: Debe escribir un correo válido');
        return false;
      }
      alert("Muchas gracias por enviar el formulario");
}