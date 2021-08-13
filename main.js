//OBJETIVO DE PROYECTO
/*
1- EL newslleter
2- El form de contacto
3- El form de compras
4- form de compras 2
5- el carrito de compras

¿Que tengo que hacer?
1- Newslleter: la persona tiene que ingresar un correo electronico, el cual tiene que ser guardado, para 
luego poder enviarle propaganda "x" por emai. Dentro del correo tiene que tener la explicacion de como 
cancelar automaticamente dicho proceso.

2-form de contacto: en este proceso, se deberá tomar los datos de "Nombre" "email" "comentario". 
Y almacenar esos datos para poder identificar y poder responderle su comentario.

3- Acá solo se tomara la cantidad de productos a comprar, y se aceptara dicha compra.

4- Se hara el ingreso de los datos de compra del cliente: "NOMBRE" 
"APELLIDO" "E-MAIL" "DIRECCION" "CODIGO POSTAL" 
4-b "NOMBRE DE TITULAR TJ" "NUMERO DE TJ" "FEHCA VENCIMIENTO" "CODIGO" 
4-c"FORMA DE PAGO" "CHECK OUT" "COMPRAR FINAL BOTTON"
"La informacion del carrito" se recibira aca, donde dependiendo la forma de pago (cantidad de cuotas 
elgidas divido total), se mostraa dicho resultado.
Se decidio dividir en tres para poder trabajar mejor la division de infomracion.

5-Carrito de compras:se tendra que tomar datos de form compras con respecto a la prenda seleccionada
y la cantidad de unidadas, donde se mostrara la suma total de cada item (visibles), el precio + iva
(precio total).
*/



//Correo
class CajasDeCorreo{
    constructor(pIdClienteC){
        this.idClient = pIdClienteC;
        this.correoArray = [];
    }
    //Poner email ingresado en el array emailArray.
    guardarCorreo(pCorreoCliente){
        this.correoArray.push(pCorreoCliente);
    }
    amplitudCaja(pCorreoCliente){//Consultar bien para que se hacia esto. Lo entiendo un poco, 
        for (let i = 0; i < pCorreoCliente.length; i++){ //pero me falta una explicación.
            this.correoArray.push(pCorreoCliente[i]);
        }
    }
}

class Correo{
    constructor (pIdCorreo, pCorreo ){
        this.idCorreo = pIdCorreo;
        this.correo = pCorreo;
    }
}
var correo = alert(prompt("Ingrese correo (ejemplo@gmail.com)"));
var correoIngresado = new Correo(1, correo);



//Nombre y apellido
class BoxNameClient{
    constructor(pIdCliente){
        this.idNombreCompleto = pIdCliente;
        this.NomCompArray= [];
    }
    //Sumar cadena de caracteres
    // sumaNombreCompleto(pFullName){
    //    // this.client = const suma = (pName, pLastName) => {
    //    //      let resultadoName = pName + pLastName
    //    //     return resultadoName
    //    // } //Asi se redacta una funcion flecha? PORQUE
    //    this. client = function sumar (pName, pLastName){ return pName + pLastName} 
    //    //Puedo nombrar de manera global pNombre
    }
    guardarNombreCompleto(pNombreCompleto)
    {
        this.NomCompArray.push(pNombreCompleto);
    }
    amplitudCaja(pNombreCompleto)
    {//Consultar bien para que se hacia esto. Lo entiendo un poco, 
        for (let i = 0; i < pNombreCompleto.length; i++){ //pero me falta una explicación.
            this.NomCompArray.push(pNombreCompleto[i]);
        }    
    }

class NombreCliente
{
    constructor (pIdNomComp, pIngNombComp){
        this.idCorreo = pIdNomComp;
        this.ingNombComp = pIngNombComp;
    }
}
var nombre = alert(prompt("Ingrese su Nombre"));
var apellido = alert(prompt("Ingrese su Apellido"));
const sumarNombre = (nombre, apellido) => { return (nombre + " " + apellido)}
var resSumNomb = sumarNombre(nombre, apellido);
var IngNombComp = new NombreCliente (1, resSumNomb)
//ACA sigo pensando como hacer para que el "1" del id de pIdNomComp se aumente solo.