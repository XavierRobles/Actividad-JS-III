function Pagar(Selec) {

    switch (Selec.selectedIndex) {
        case 1:
            document.getElementById("elec").innerHTML = " Titular de la tarjeta <input type='text' name='titu' id='titu'><br><br> Numero de la tarjeta: <input type='number' name='num' id='num'><br><br>CVV <input type='cvv' name='cvv' id='cvv'><br><br></input><input type='submit' name='enviar' value='Enviar Datos' onclick='Vtarjeta()'>";
            break;
        case 2:
            document.getElementById("elec").innerHTML = " Importe efectivo <input type='number' name='efect' id='efect'>€ <br> <br> <input type='submit' name='enviar' value='Enviar Datos' onclick='Vefectivo()'>";
            break;

        default:
            document.getElementById("elec").innerHTML = " <input type='submit' name='enviar' value='Enviar Datos'> ";
            break;
    }

}

function validar() {
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var telefono = document.getElementById("telefono");

    if (nombre.value && apellidos.value && telefono.value) {

    } else {
        alert("Rellene todos lo campos");
    }

}



function Vtarjeta() {
    var titu = document.getElementById("titu");
    var num = document.getElementById("num");
    var cvv = document.getElementById("cvv");

    if (titu.value && num.value && cvv.value) {

        alert("Todos los datos son correctos y han sido enviados");


    } else {
        alert("Rellene todos los campos de la tarjeta");
    }

}
function Vefectivo() {
    var efect = document.getElementById("efect");


    if (efect.value) {

        alert("Todos los datos son correctos y han sido enviados");


    } else {
        alert("Ingrese una cantidad");
    }

}