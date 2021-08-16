//CLASS Y OBJETOS
//OBJETO CLIENTE: compuesto por un Id, Nombre completo y un Correo.
class BoxCLientContact{
    constructor(pIidCliente, pNombreCompleto, pEmail){
    this.id = pIidCliente;
    this.nombreCompleto = pNombreCompleto;
    this.email = pEmail;
    this.backUp = [];
    }
    // 
    

    //COMO Hacer para que cada vez que ingreso un cliente, me aumente en 1 el numero de id
}

class Carrito{
    constructor(pIdUsuario) {
        this.idUsuario = pIdUsuario
        this.productosAlm = [];
    }
    ponerProdCarr(pProductos) {
        this.productos.push(pProductos);
    }
    guardarProd(pProductos) {
        for (let i = 0; i < pProductos.length; i++) {
            this.productos.push(pProductos[i]); //Esto consultar que onda.
        }
    } 
}

class Producto{
    constructor(pIdProd, pName, pMarca, pTalle, pPrecio) {
        this.idProd = pIdProd;
        this.name = pName;
        this.marca = pMarca;
        this.talle = pTalle;
        this.precio = pPrecio
    }
}
function sumaItems(){
     
}
//Objeto form , objeto ClienteComprador, objetoResumenCompra : aca tengo que crear un objeto de formualrio, que tome propiedades y metodos
//de otros objetos. Para crear su funcionalidad. Te tiene que pedir tu nombre y apellido,
//email, direccion, codigo postal, telefono, tarjeta, (datos de tarjeta), forma de pago, cuotas, productos,
//total, etc. Ver porque se repiten mucho la info.

//FUNCIONES
function pedirNombreCompleto() {
    let ingreseNombre = prompt("Ingrese su nombre");
    let ingreseApellido = prompt ("Ingrese su apellido");
    let pNombreCompleto = ingreseNombre + " "+ ingreseApellido;
    return pNombreCompleto;
}
function pedirEmail() {
    let ingreseEmail = prompt("Ingrese su email (ejemplo@email.com)");
    let pEmail = ingreseEmail;
    return pEmail;
}
function gaurdarDatosCliente(pNombreCompleto, pEmail) {
    datosCliente.push(pNombreCompleto);
    datosCliente.push(pEmail);
}

//VARIABLES 
var productosAlm = [];
var pIidCliente = 0;
var iva = 1.21;
var datosCliente = [pNombreCompleto, pEmail];
var cliente = new BoxCLientContact(pNombreCompleto, pEmail);

//const infoCliente = {nombre: pNombreCompleto, email: pEmail, direccion: "Falta"}

//PRODUCTOS
var prod1 = new Producto(1, "Campera Blanca", "Adidas", "L", 6000);
var prod2 = new Producto(2, "Campera Negra", "Adidas", "XL", 6500);
var prod3 = new Producto(3, "Campera Gris", "Puma", "M", 5000);

var prod4 = new Producto(4, "Remera Blanca", "Nike", "L", 4000);
var prod5 = new Producto(5, "Remera Negra", "Nike", "XL", 4500);
var prod6 = new Producto(6, "Campera Gris", "Puma", "XXL", 3000);

var prod7 = new Producto(7, "Gorra Blanca", "DC", "L", 3000);
var prod8 = new Producto(8, "Gorra Negra", "DC", "M", 3500);
var prod9 = new Producto(9, "Gorra Gris", "DC", "M", 2000);

//ALGORITMO
var pNombreCompleto = pedirNombreCompleto();
var pEmail = pedirEmail();
gaurdarDatosCliente(pNombreCompleto, pEmail);
var textInfo1 = alert(cliente);