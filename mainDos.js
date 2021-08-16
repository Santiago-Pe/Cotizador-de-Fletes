//CLASS Y OBJETOS
//OBJETO CLIENTE: compuesto por un Id, Nombre completo y un Correo.
class BoxCLientContact{
    constructor(pIidCliente, pNombreCompleto, pEmail){
    this.id = pIidCliente;
    this.nombreCompleto = pNombreCompleto;
    this.email = pEmail;
    datosCliente= [];
    }
    pedirNombreCompleto() {
        let ingreseNombre = prompt("Ingrese su nombre");
        let ingreseApellido = prompt ("Ingrese su apellido");
        let pNombreCompleto= ingreseNombre + " "+ ingreseApellido;
        return pNombreCompleto;
    }
    pedirEmail() {
        let ingreseEmail = prompt("Ingrese su email (ejemplo@email.com)");
        let pEmail = ingreseEmail;
        return pEmail;
    }
    gaurdarDatosCliente(pNombreCompleto, pEmail) {
        datosCliente.push(pNombreCompleto);
        datosCliente.push(pEmail);
    }
}
/*
//FUNCIONES
function pedirNombreCompleto() {
    let ingreseNombre = prompt("Ingrese su nombre");
    let ingreseApellido = prompt ("Ingrese su apellido");
    return ingreseNombre + " "+ ingreseApellido;
}
function pedirEmail() {
    let ingreseEmail = prompt("Ingrese su email (ejemplo@email.com)");
    return ingreseEmail;
}
function gaurdarDatosCliente(pNombreCompleto, pEmail) {
    datosCliente.push(pNombreCompleto);
    datosCliente.push(pEmail);
}
*/
// //VARIABLES GLOBALES
// var pNombreCompleto = cliente.pedirNombreCompleto();
// var pEmail = cliente.pedirEmail();
// var datosCliente = [pNombreCompleto, pEmail];
// gaurdarDatosCliente(pNombreCompleto, pEmail);
var cliente = new BoxCLientContact(); //ACA ESTA EL PROBLEMA
cliente.pedirNombreCompleto();
cliente.pedirEmail();
cliente.datosCliente;

