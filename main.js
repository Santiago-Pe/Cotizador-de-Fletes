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

const productosPromo = productosArray.map(producto => productoFor.precio * 0.85);