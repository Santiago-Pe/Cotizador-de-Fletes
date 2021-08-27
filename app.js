//CLASES
//Datos Producto
class Producto
{
    constructor(id, nombre, talle, marca, precio)
    {
        this.id = id
        this.nombre = nombre.toUpperCase();
        this.talle = talle.toUpperCase();
        this.marca = marca.toUpperCase();
        this.precio = parseFloat(precio);
    }
    
    sumaIva()
    {
        this.precio = this.precio * 1.21;
    }
}
//Datos Cliente
class Cliente
{
    constructor(nombre, apellido, email, direccion, prod)
    {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.direccion = direccion;
    this.prod = prod;
    }
}
//Datos Tarjeta
class ClienteTarjeta
{
    constructor(tarjeta, titular, num16, fechaVto, codigo3)
    {
        this.tarjeta = tarjeta;
        this.titular = titular;
        this.numeroDor = num16;
        this.vto = fechaVto;
        this.codigo = codigo3;
    }
}
//FUNCIONES
//Datos personales
function PedirNombreCliente()
{
    let pedirNombre = prompt("Ingresar nombre")
}
function PedirApellidCliente()
{
    let pedirApellido = prompt("Ingresar apellido")
}
function PedirEmailCliente()
{
    let pedirEmail = prompt("Ingrese su email (ejemplo@gmail.com)");
}
function PedirDireccionCliente()
{
    let pedirDireccion = prompt("Ingrese su direccion (calle a 1234)")
    let pedirCP = parseInt(prompt("Ingrese su codigo postal"))
}
//Datos de tarjeta
function PedirDatosTarjeta()
{
    let tj = prompt("Ingrese tipo de tarjeta (VISA/MASTERCARD");
    let tjNombre = prompt("Ingrese nombre del titutar");
    let tjNum16 = prompt("Ingrese los 16 nros de la parte frontal");
    let tjVto = prompt("Ingrese fecha de vencimiento");
    let tjCod = prompt("Ingrese el codigo de 3 digitos de la parte de atras");
    
}


//Listado de Productos
//Adidas
var prod1 = new Producto(1,"Buzo RBW", "XL", "Adidas", 6500);
var prod2 =  new Producto(2,"Buzo Black Red", "M", "Adidas", 6000);
var prod3 =  new Producto(3,"Buzo Three Stripes", "L", "Adidas", 5000);
var prod4 =  new Producto(4,"Buzo Goalkeeper", "L", "Adidas", 5500);
var prod5 =  new Producto(5,"Buzo Classic", "XL", "Adidas", 7000);
//Nike
var prod6 = new Producto(1,"Buzo Brown", "XL", "Nike", 7000);
var prod7 =  new Producto(2,"Buzo Dark Green", "M", "Nike", 6500);
var prod8 =  new Producto(3,"Buzo Beige", "L", "Nike", 6000);
var prod9 =  new Producto(4,"Buzo Ligth Blue", "L", "Nike", 7000);

var prod10 = new Producto(1,"Buzo Gray", "XL", "Puma", 5500);
var prod11 =  new Producto(2,"Buzo Black Beige", "M", "Puma", 5000);
//DC
var prod12 = new Producto(1,"Gorra Black", "XL", "DC", 4000);
var prod13 =  new Producto(2,"Gorra Ligth Brown", "M", "DC", 4500);
var prod14 =  new Producto(3,"Gorra Beige", "L", "DC", 4500);
var prod15 =  new Producto(4,"Gorra White", "L", "DC", 4000);

var listadoProducto = [];

let nombre = PedirNombreCliente();
let apellido = PedirApellidCliente();
let emialCliente = PedirEmailCliente ();
let direccionCliente = PedirDireccionCliente();

//Meter seleccion de productos al carrito.
let pushCarro = parseInt(prompt("Ingrese del 1 al 5 para Buzos Adidas, el 6 al 9 para Buzos Nike, del 10 al 11 para Buzo Puma y del 12 al 15 para Gorras DC. (0 PARA SALIR) ")); 
//Como hacer para mejorar este procesos. Para hacerlo mas especifico: idea, usando herramientas de arrays,
//crear sub arrays de cada marca, y de ahi volver a pedir que ingrese, ya datos mas especificos. Por lo que 
//se asemeja mas a la seleccion de productos.
while((pushCarro != 0) && (pushCarro < 16))
{
    switch(pushCarro)
    {
        case 1:
        listadoProducto.push(prod1)
        break
        case 2:
        listadoProducto.push(prod2)
        break
        case 3:
        listadoProducto.push(prod3)
        break
        case 4:
        listadoProducto.push(prod4)
        break
        case 5:
        listadoProducto.push(prod5)
        break
        case 6:
        listadoProducto.push(prod6)
        break
        case 7:
        listadoProducto.push(prod7)
        break
        case 8:
        listadoProducto.push(prod8)
        break
        case 9:
        listadoProducto.push(prod9)
        break
        case 10:
        listadoProducto.push(prod10)
        break
        case 11:
        listadoProducto.push(prod11)
        break
        case 12:
        listadoProducto.push(prod12)
        break
        case 13:
        listadoProducto.push(prod13)
        break
        case 14:
        listadoProducto.push(prod14)
        break
        case 15:
        listadoProducto.push(prod15)
        break
    }
    pushCarro = parseInt(prompt("Ingrese del 1 al 5 para Buzos Adidas, el 6 al 9 para Buzos Nike, del 10 al 11 para Buzo Puma y del 12 al 15 para Gorras DC. (0 PARA SALIR) ")); 
}

let datosTarjeta = PedirDatosTarjeta();

let clienteUs = new Cliente(nombre, apellido, emialCliente, direccionCliente, listadoProducto);
console.log(clienteUs);
// let clienteUsTj = new ClienteTarjeta(datosTarjeta.tj, datosTarjeta.tjNombre, datosTarjeta.tjNum16, datosTarjeta.tjVto, datosTarjeta.tjCod);
// console.log(datosTarjeta);
let clienteUsTj = new ClienteTarjeta(PedirDatosTarjeta(tj), 
PedirDatosTarjeta(tjNombre), PedirDatosTarjeta(tjNum16), 
PedirDatosTarjeta(tjVto), PedirDatosTarjeta(tjCod));
console.log(clienteUsTj);
