function Colores() {
    var color = prompt("Introduzca Un Color Verde, Rojo, Azul o Amarillo");

    if (color.toLowerCase() == "rojo") {
        document.body.style.backgroundColor = "red";

    } else if (color.toLowerCase() == "amarillo") {
        document.body.style.backgroundColor = "yellow";

    } else if (color.toLowerCase() == "verde") {
        document.body.style.backgroundColor = "green";
        
    } else if (color.toLowerCase() == "azul") {
        document.body.style.backgroundColor = "blue";
    }else{
        alert("Introduzca un color entre Rojo, Amarillo, Verde o Azul");
        Colores()
    }
    
}