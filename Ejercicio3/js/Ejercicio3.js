function Inicio() {
  evaluar()
}

function evaluar() {


  var nombre = document.getElementById("nombre");
  var edad = document.getElementById("edad");
  

  if (!nombre.value) {
    alert("No puede haber un campo vacio Introzuzca un nombre");
    nombre.focus();
   

  } else if (!edad.value) {
    alert("No puede haber un campo vacio Introzuzca la Edad");
    edad.focus();
    
  } else if ((edad.value > 0) && (edad.value < 100)) {
    alert("El Nonbre introducido es: " + nombre.value + " y tiene : " + edad.value + " Años");
    nombre.style.backgroundColor = "green";
   
  } else {
    alert("La edad tiene que estar conprendida entre 0 y 100 años");

  }
}

function focu() {
  nombre.focus();
}