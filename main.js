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

//Arrays
let fletes = [] //Para que quede registrado todos los destinos
let cliente = [] //Con el class Remitente.

//Functions


//PROGRAMA PRINCIPAL
//Arrays
let fletes = [] //Para que quede registrado todos los destinos
let cliente = [] //Con el class Remitente.
//Variables
let miFormRemitente = document.getElementsByClassName('formInfo');
let nombreCliente = miFormRemitente.children[1];
let apellidoCliente = miFormRemitente.children[3];
let telCliente = miFormRemitente.children[5];

let miFormReceptor = document.getElementsByClassName('formInfo2');
let nombreCliente2 = miFormReceptor.children[1];
let apellidoCliente2 = miFormReceptor.children[3];
let telCliente2 = miFormReceptor.children[5];

let miFormProd = document.getElementsByClassName('formInfo3');
let producto = miFormProd.children[1];
let cantidad = miFormProd.children[3];
let valor = miFormProd.children[5];
let peso = miFormProd.children[7];


