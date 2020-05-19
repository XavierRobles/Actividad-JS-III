 
  function Enviar() {
  
  
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    
  
    if (!pass1.value) {
      alert("Tiene que introducir una contraseña");
      pass1.focus();
     
  
    } else if (!pass2.value) {
      alert("Tiene que confirmar una contraseña");
      pass2.focus();
      
    } else if ((pass1.value) == (pass2.value)) {
      alert("La contraseñas son correctas");
    
     
    } else {
      alert("Las contraseñas no coinciden");
  
    }
  }
