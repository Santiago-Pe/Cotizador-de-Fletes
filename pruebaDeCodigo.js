//FUNCIONES DE CALCULO
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

//VARIABLES
let km1 = 130; //camion completo.
let km2 = 110; // 3/4 de camion.
let km3 = 90; // 1/2 camion.
let km4 = 70; // 1/4 de camion.
let cantPallet = miFormProd.children[3];
let destino = miFormInfo.children[1];
//¿tengo que usar retour?
let costo = calcularFlete();
let costoIva = sumarIva();
let costoSeguro = sumarSeguro();
let costoEmba = sumarEmbalaje();
let costoTotal = sumarTotal();

//FUNCIONES DE ARRAY