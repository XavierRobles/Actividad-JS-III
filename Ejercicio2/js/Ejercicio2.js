class Empresa {
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }

    mostraDatos() {
        alert("La empresa " + this.nombre + " que esta en " + this.direccion);
    }
}

class Empleado {
    constructor(nombre, apellidos, edad, puesto, empresa) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.puesto = puesto;
        this.empresa = empresa;
    }


    mostraDatos() {
        alert("El empleado " + this.nombre + " trabaja como " + this.puesto + 
        ".\n Tiene " + this.edad + " años y trabaja en la empresa " + this.empresa.nombre +
         "\n que esta en la " + this.empresa.direccion);

    }
}

Martinez = new Empresa("Martines y asociados","Calle rios, nº 3." );
Carnes = new Empresa("Carnes de Avila","Calle Falsa nº 123." );
Carlos = new Empleado("Carlos", "Martinez", "27", "Consultor", Martinez);
Alfonso = new Empleado("Alfonso", "Muñoz", "63", "Jefe de seccion", Carnes);
