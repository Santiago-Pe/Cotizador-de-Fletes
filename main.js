//Aun no esta armado el algoritmo de procedimientos.
//PRODUCTOS
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

//Listado de Productos
productosArray = []
productosArray.push ( new Producto(1,"Buzo RBW", "XL", "Adidas", 6500));
productosArray.push ( new Producto(2,"Buzo Black Red", "M", "Adidas", 6000));
productosArray.push ( new Producto(3,"Buzo Three Stripes", "L", "Adidas", 5000));
productosArray.push ( new Producto(4,"Buzo Goalkeeper", "L", "Adidas", 5500));
productosArray.push ( new Producto(5,"Buzo Classic", "XL", "Adidas", 7000));

for (const productoFor of productosArray)
{
    productoFor.sumaIva();
}

const buzosXL = productosArray.find(buzo => buzo === "XL");
const buzosL = productosArray.find(buzo => buzo === "L");
const buzosM = productosArray.find(buzo => buzo === "M");

const productosPromo = productosArray.map(productoFor => productoFor.precio * 0.85);


//CLIENTES
class BoxCLientContact{
    constructor(id, nombreCompleto, email){
    this.id = id;
    this.nombreCompleto = nombreCompleto;
    this.email = email;
    }
}
//falta agregar las condiciones para que se cumplan nuestros requisitos de orden
//primero apellido y luego apellido. Y poner esta accion dentro de una funcion 
//do while o for, porque es una accion que la hace el cliente cada vez que realize
//una compra nueva.

gaurdarDatosCliente(nombre, correo) 
{
    datosCliente.push(nombreCompleto);
    datosCliente.push(email);
}


var nombreCompleto = prompt("Ingrese su nombre completo");
var email = prompt("ingrese su email (ejemplo@gmail.com)")
const datosCliente = []
gaurdarDatosCliente(nombreCompleto, email);
