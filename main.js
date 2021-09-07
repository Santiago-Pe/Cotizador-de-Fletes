//Class
class Remitente
{
    constructor(id1, nombre1, apellido1, telefono1)
    {
        this.id = id1.toUpperCase();
        this.nombre = nombre1.toUpperCase();
        this. apellido = apellido1.toUpperCase();
        this.telefono = parseFloat(telefono1); 
    }
}
class Receptor
{
    constructor(id2, nombre2, apellido2, telefono2)
    {
        this.id = id2.toUpperCase();
        this.nombre = nombre2.toUpperCase();
        this. apellido = apellido2.toUpperCase();
        this.telefono = parseFloat(telefono2); 
    }
}
class Producto
{
    constructor(nombre, cantidad, valor, peso)
    {
        this.nombre = nombre.toUpperCase();
        this.cantidad = parseInt(cantidad);
        this.valor = parseFloat(valor);
        this.peso = parseFloat(peso); 
    }
}
class Flete
{
    constructor(origen, destino, precio)
    {
        this.origen = origen;
        this.destino = destino;
        this.precio = precio;
    }
}
//sumamos un calss de prespuesto que contega info mezcladad de los class anteriores?

//Functions
function calcularFlete(e)
{
    // Buscar forma mas corta de esto:
    /*
    if (document.geElementByClassName('.bsAs) && cantpalellet =< 3)
    {
        km= 400;
        precioXKm = 160 * 0.20 * 1.2
    }
      if (document.geElementByClassName('.bsAs) && cantpalellet =< 6 )
    {
        km= 400;
        precioXKm = 140 * 0.40 * 1.15
    }
        if (document.geElementByClassName('.bsAs) && cantpalellet =< 9 )
    {
        km= 400;
        precioXKm = precioXKm = 160 * 0.60 * 1.1
    }
        if (document.geElementByClassName('.bsAs) && cantpalellet =< 12 )
    {
        km= 400;
        precioXKm = precioXKm = 160 * 0.80 * 1.05

    }
        if (document.geElementByClassName('.bsAs) && cantpalellet =< 15 )
    {
        km= 400;
        precioXKm = 160;
    }
    */
    e.preventDefault();
    var km = 0;
    var precioXKm = 140;
    if (document.getElementsByClassName('.bsAs'))
    {
        km = 400;
    }
    if (document.getElementsByClassName('.capi'))
    {
        km = 300;
    }
    if (document.getElementsByClassName('.cata'))
    {
        km = 830;
    }
    if (document.getElementsByClassName('.chaco'))
    {
        km = 720;
    }
    if (document.getElementsByClassName('.chub'))
    {
        km = 1460;
    }
    if (document.getElementsByClassName('.cordo'))
    {
        km = 400;
    }
    if (document.getElementsByClassName('.corri'))
    {
        km = 740;
    }
    if (document.getElementsByClassName('.entreR'))
    {
        km = 200;
    }
    if (document.getElementsByClassName('.formo'))
    {
        km = 890;
    }
    //ampliar si funciona
    costo = precioXKm * km;
    return costo;
}
function validarForm () //revisar
{
    // Remitente
if ( nombreCliente == '' || apellidoCliente == '' ||telCliente == '')
{
    alert = ('Por favor complete bien los datos del Remitente')
    datosOk = false;
}
// Receptor
if ( nombreCliente2 == '' || apellidoCliente2 == '' ||telCliente2 == '')
{
    alert = ('Por favor complete bien los datos del Destinatario')
    datosOk = false;
}
// Flete
if ( producto == '' || cantidad == '' || valor == '' || peso == '')
{
    alert = ('Por favor complete bien los datos del Envio')
    datosOk = false;
}
//Condciones de compra
if ( producto == '' || cantidad == '' || valor == '' || peso == '')
{
  //Se tiene que seleccionar algo si o si.
}

}
function agregarRto () //revisar, ver de guardar en un localstorage.
{
    //Si confimra presupuesto enviar un email y sumar a mi array. Crear una nueva funcion para el push de fletes, y ver de que manera se puede hacer que aumente mi ID por cada vez que un client me confirme una cotizacion
    
    presupuesto.push('1', nombreCliente, apellidoCliente, telCliente, 'Rosario', destino, precio)
}
function mostrarResuemn () // hacer
{

}
function agregarDom() // rehacer con jquery
{
    //Usar Jquery
    let cotizacion = document.getElementsByClassName('cotizacion');
    cotizacion.innerHTML =  `<h2> Su presupuesto</h2>
    <h3> Datos del Remitente </h3>
    <p><strong> Nombre : </strong> ${nombreCliente}</p>
    <p><strong> Apellido : </strong> ${apellidoCliente}</p>
    <p><strong> Tel : </strong> ${apellidoCliente}</p>

    <h3> Datos del Destinatario </h3>
    <p><strong> Nombre : </strong> ${nombreCliente2}</p>
    <p><strong> Apellido : </strong> ${apellidoCliente2}</p>
    <p><strong> Tel : </strong> ${apellidoCliente2}</p>

    <h3> Datos del Envio </h3>
    <p><strong> Producto : </strong> ${producto}</p>
    <p><strong> Cantidad (en und de pallet): </strong> ${cantidad}</p>
    <p><strong> Valor (en pesos) : </strong> ${valor}</p>
    <p><strong> Peso en Kg : </strong> ${peso}</p>

    <h3> Costo de envio </h3>
    <p><strong> Costo de envio : </strong> ${costo2}</p>
    <p><strong> + IVA : </strong> ${precio}</p> 
    <button class = "btnAceptar"> Aceptar </buttoon>` //falta algo. Revisar;
}
function sumarIva() //hacer
{

}
function sumarSeguro() //hacer
{

}
function sumarEmbalaje() //hacer
{

}




//Arrays
let presupuesto = [] //Aca van datos de class = cliente y flete que generaran un prespuesto/rto

//Variables y constantes
const iva = 1.21;
let datosOk = true;

//PROGRAMA PRINCIPAL

//Formulario Informacion Cliente
let miFormRemitente = document.getElementsByClassName('formInfo');
let nombreCliente = miFormRemitente.children[1];
let apellidoCliente = miFormRemitente.children[3];
let telCliente = miFormRemitente.children[5];

//Formulario Informacio Receptor
let miFormReceptor = document.getElementsByClassName('formInfo2');
let nombreCliente2 = miFormReceptor.children[1];
let apellidoCliente2 = miFormReceptor.children[3];
let telCliente2 = miFormReceptor.children[5];

//Formualio de Flete
let miFormProd = document.getElementsByClassName('formInfo3');
let producto = miFormProd.children[1];
let cantidad = miFormProd.children[3];
let valor = miFormProd.children[5];
let peso = miFormProd.children[7];

//Formulario de Envio

//EVENTOS

