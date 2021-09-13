//Class
class Remitente
{
    constructor(id1, nombre1, apellido1, telefono1)
    {
        this.id = id1.toUpperCase();
        this.nombre = nombre1.toUpperCase();
        this. apellido = apellido1.toUpperCase();
        this.telefono = parseInt(telefono1); 
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
class CostosExtra
{
    constructor(costoIva, costoSeguro, costoEmba, costoTotal)
    {
        this.costoIva = costoIva;
        this.costoSeguro = costoSeguro;
        this.costoEmba = costoEmba;
        this.costoTotal = costoTotal;
    }
}
//sumamos un calss de prespuesto que contega info mezcladad de los class anteriores?



//Functions
function mostrarApp () // hacer
{
    //EFECTO JQUERY
}
function validarForm () //revisar
{
    // Remitente
if ( nombreCliente == '' || apellidoCliente == '' || telCliente == '' || emailCliente == '')
{
    alert = ('Por favor complete bien los datos del Remitente')
    datosOk = false;
}
// Receptor
else if ( nombreCliente2 == '' || apellidoCliente2 == '' ||telCliente2 == '' || emailCliente2 == '')
{
    alert = ('Por favor complete bien los datos del Destinatario')
    datosOk = false;
}
// Flete
else if ( producto == '' || cantidad == '' || valor == '' || peso == '')
{
    alert = ('Por favor complete bien los datos del Envio')
    datosOk = false;
}
//Condciones de compra
//aca usar else if para verificar que se selecciono algo, pero como?
else
{
    console.log("Todos los campos estan bien completados")
}

}
function agregArrayPresp () //revisar, ver de guardar en un localstorage.
{
    //Si confimra presupuesto enviar un email y sumar a mi array. Crear una nueva funcion para el push de fletes, y ver de que manera se puede hacer que aumente mi ID por cada vez que un client me confirme una cotizacion
    
    presupuesto.push('1', nombreCliente, apellidoCliente, telCliente, 'Rosario', destino, precio)
}
function calcularFlete(e)
{
    prevent.Default();
    if(cantPallet <= 5)
    {
        switch (destino)
        { 
            case ".bsAs":
            km4 * 400
            break;
            case ".capi":
            km4 * 300
            break;
            case ".cata":
            km4 * 900
            break;
            case ".chaco":
            km4 * 300
            break;
        }
    }
    else if(cantPallet <= 10)
    {
         switch (destino)
        { 
            case ".bsAs":
            km3 * 400
            break;
            case ".capi":
            km3 * 300
            break;
            case ".cata":
            km3 * 900
            break;
            case ".chaco":
            km3 * 300
            break;
        }
    }
    else if(cantPallet <= 15)
    {
         switch (destino)
        { 
            case ".bsAs":
            km2 * 400
            break;
            case ".capi":
            km2 * 300
            break;
            case ".cata":
            km2 * 900
            break;
            case ".chaco":
            km2 * 300
            break;
        }
    }
    else if(cantPallet <= 20)
    {
         switch (destino)
        { 
            case ".bsAs":
            km1 * 400
            break;
            case ".capi":
            km1 * 300
            break;
            case ".cata":
            km1 * 900
            break;
            case ".chaco":
            km1 * 300
            break;
        }
    }
    else
    {
        alert("Su pedido requiere mas de 1 equipo completo. Por favor comunicarse con el sector ventas")
    }
       
}
function sumarIva()
{
    let operacion1 = (costo * 21) / 100;
}
function sumarSeguro()
{
 let operacion2 = (costo * 15) / 100;
}
function sumarEmbalaje()
{
 operacion3 = (costo * 10) / 100;
}
function sumaTotal()
{
    let operacion4 = costo + costoIva +costoSeguro + costoEmba; 
}
function guardarSession()// hacer
{
    sessionStorage.setItem(clave, valor);
}
function traerSession()// hacer
{
    sessionStorage.getItem(clave, valor);
}
function agregarDomRt() // rehacer con jquery
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
function mostrarRemito () // hacer
{
    //EFECTO JQUERY
}
function reiniciarPage() //hacer
{

}



//Arrays
let presupuesto = [] 
//Aca van los datos que vamos a usar el el rto (clientee1, cliente2, producto, felte y precios.)

//Variables y constantes
let datosOk = true; //preguntar que onda, usamos esto porque estaba en la clase.

//PROGRAMA PRINCIPAL

//Formulario Informacion Cliente
let miFormRemitente = document.getElementsByClassName('formInfo');
let nombreCliente = miFormRemitente.children[1];
let apellidoCliente = miFormRemitente.children[3];
let telCliente = parseInt(miFormRemitente.children[5]);
let emailCliente = miFormRemitente.children[7];

//Formulario Informacio Receptor
let miFormReceptor = document.getElementsByClassName('formInfo2');
let nombreCliente2 = miFormReceptor.children[1];
let apellidoCliente2 = miFormReceptor.children[3];
let telCliente2 = parseInt(miFormRemitente.children[5]);
let emailCliente2 = miFormRemitente.children[7];

//Formualio de Flete
let miFormProd = document.getElementsByClassName('formInfo3');
let producto = miFormProd.children[1];
let cantPallet = miFormProd.children[3];
let valor = miFormProd.children[5];
let peso = miFormProd.children[7];

//Formulario de Envio
let miFormInfo = document.getElementsByClassName('destino');




//ALGORITMO (eventos)
//1- Mostrar app con JS
mostrarApp();
//2- La persona ingresa datos de remitente, receptor, producto y destino.
validarForm();
//3- Agrego al array de "presupuesto"
agregArrayPresp();
//4- cuando haga click en el button "cotizar", ejecutara todos los calculos.
calcularFlete();
sumarIva();
sumarSeguro();
sumarEmbalaje();
//5- guardo todo en un localstorage
guardarSession();
//6- traigo la info del local storage
traerSession();
//7- Luego volcara toda la informacion en un rto de html creado en js
agregarDom(); //agrega al html.
//8- Con la animacion de jquey le damos estio y efecto a la accion "mostrar prespuesto"
mostrarRemito();
//9- cuando se de click en el boton confimrar, se reiniciara todo  para poder volver a cotizar desde 0.
reiniciarPage();





