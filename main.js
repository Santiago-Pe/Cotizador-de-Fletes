class Remitente
{
    constructor(nombre1, apellido1, telefono1, email1)
    {
        this.nombre = nombre1;
        this. apellido = apellido1;
        this.telefono = parseInt(telefono1);
        this.email = email1;
    }
}
class Receptor
{
    constructor(nombre2, apellido2, telefono2, email2)
    {
        this.nombre = nombre2;
        this. apellido = apellido2;
        this.telefono = parseInt(telefono2);
        this.email = email2;
    }
}

//1) Verificacion del DOM
function domReady()
{
    $( document ).ready(function() {
        console.log('El DOM esta listo');
    });
}    
//2) Motrar y ocultar app
function mostrarOcultarApp()
{
    $(".btnApp").on("click", function(){
        $("#contApp").toggle(1000, "swing");
    })
}
//3) Validacion de los datos ingresados
function validarFormulario()
{
    debugger
    nombreRemitente = formApp.children[2].value;
    apellidoRemitente = formApp.children[4].value;
    telefonoRemitente = formApp.children[6].value;
    emailRemitente = formApp.children[8].value;

    nombreReceptor = formApp.children[11].value;
    apellidoReceptor = formApp.children[13].value;
    telefonoReceptor = formApp.children[15].value;
    emailReceptor = formApp.children[17].value;

    nombreProducto = formApp.children[20].value;
    cantidadPallet = formApp.children[22].value;
    valorProducto = formApp.children[24].value;
    pesoProducto = formApp.children[26].value;



    //  Remitente
    if ( nombreRemitente === '' || apellidoRemitente === '' || telefonoRemitente === '' || emailRemitente === '')
    {
        alert = ('Por favor complete bien los datos del Remitente')
        datosOk = false;
    }
    else if (  nombreReceptor === '' || apellidoReceptor === '' || telefonoReceptor === '' || emailReceptor === '')
    {
        alert = ('Por favor complete bien los datos del Receptor')
        datosOk = false;
    }
    else if (  nombreProducto === '' || cantidadPallet === '' || valorProducto === '' || pesoProducto === '')
    {
        alert = ('Por favor complete bien los datos del Receptor')
        datosOk = false;
    }
    else
    {
        console.log("los datos fueron bien ingresados")
        datosOk = true;
    }

}
function calcularEnvio()
{
    let costo = 0;
    let precioXKm = 0;
    if(cantidadPallet <= 5) 
    {  
        precioXKm = 80;
        switch(destino.value)
        {
            case "CABA, BA":
                costo = precioXKm * 300;
                break;
            case "La Plata, BA":
                costo = precioXKm * 400;
                break;      
            case "San Fernando del Valle de Catamarca, CA":
                costo = precioXKm * 850;
                break;     
            case "Resistencia, CH":
                costo = precioXKm * 710;
                break;     
            case "Rawson, CT":
                costo = precioXKm * 1460;
                break;     
            case "Córdoba, CBA":
                costo = precioXKm * 400;
                break;     
            case "Corrientes, CR":
                costo = precioXKm * 730;
                break;
            case "Paraná, ER":
                costo = precioXKm * 205;
                break;      
        } 
    }   
    else if(cantidadPallet <= 10) 
    {
        precioXKm = 100;
        switch(destino.value)
        {
            case "CABA, BA":
                costo = precioXKm * 300;
                break;
            case "La Plata, BA":
                costo = precioXKm * 400;
                break;      
            case "San Fernando del Valle de Catamarca, CA":
                costo = precioXKm * 850;
                break;     
            case "Resistencia, CH":
                costo = precioXKm * 710;
                break;     
            case "Rawson, CT":
                costo = precioXKm * 1460;
                break;     
            case "Córdoba, CBA":
                costo = precioXKm * 400;
                break;     
            case "Corrientes, CR":
                costo = precioXKm * 730;
                break;
            case "Paraná, ER":
                costo = precioXKm * 205;
                break;      
        } 
    }
    else if(cantidadPallet <= 15) 
    {
        precioXKm = 120;
        switch(destino.value)
        {
            case "CABA, BA":
                costo = precioXKm * 300;
                break;
            case "La Plata, BA":
                costo = precioXKm * 400;
                break;      
            case "San Fernando del Valle de Catamarca, CA":
                costo = precioXKm * 850;
                break;     
            case "Resistencia, CH":
                costo = precioXKm * 710;
                break;     
            case "Rawson, CT":
                costo = precioXKm * 1460;
                break;     
            case "Córdoba, CBA":
                costo = precioXKm * 400;
                break;     
            case "Corrientes, CR":
                costo = precioXKm * 730;
                break;
            case "Paraná, ER":
                costo = precioXKm * 205;
                break;      
        } 
    }
    else if(cantidadPallet <= 20) 
    {
        precioXKm = 140;
        switch(destino.value)
        {
            case "CABA, BA":
                costo = precioXKm * 300;
                break;
            case "La Plata, BA":
                costo = precioXKm * 400;
                break;      
            case "San Fernando del Valle de Catamarca, CA":
                costo = precioXKm * 850;
                break;     
            case "Resistencia, CH":
                costo = precioXKm * 710;
                break;     
            case "Rawson, CT":
                costo = precioXKm * 1460;
                break;     
            case "Córdoba, CBA":
                costo = precioXKm * 400;
                break;     
            case "Corrientes, CR":
                costo = precioXKm * 730;
                break;
            case "Paraná, ER":
                costo = precioXKm * 205;
                break;      
        } 
    }
    // else(cantidadPallet > 20)
    // {
    //     alert("Usted requiere de más de 1 camion para transportar este pedido. Llamar directamente a Logisitca.")
    // }    
    return costo;      
}
function calcularIva()
{
    let costoIva = costoEnvio * 0.21;
    return costoIva
}
function calculoSeguroProducto()
{
    return (valorProducto * 10) / 100;
}
function sumaCostoTotal()
{
    let suma = costoEnvio + iva + seguroProducto;
    return suma    
}
function agregarAlDom()
{
    contenedorCotizacion.innerHTML =    `<h3> Cotizacion</h3>
                                        <h4> Remitente</h4>
                                        <p><strong> Nombre : </strong> ${nombreRemitente}</p>
                                        <p><strong> Apellido : </strong> ${apellidoRemitente}</p>
                                        <p><strong> Teléfono : </strong> ${telefonoRemitente}</p>
                                        <p><strong> Email : </strong> ${emailRemitente}</p>

                                        <h4> Receptor</h4>
                                        <p><strong> Nombre : </strong> ${nombreReceptor}</p>
                                        <p><strong> Apellido : </strong> ${apellidoReceptor}</p>
                                        <p><strong> Teléfono : </strong> ${telefonoReceptor}</p>
                                        <p><strong> Email : </strong> ${emailReceptor}</p>

                                        <h4> Datos del producto a enviar </h4>
                                        <p><strong> Nombre del producto : </strong> ${nombreProducto}</p>
                                        <p><strong> Cantidad de pallet : </strong> ${cantidadPallet}</p>
                                        <p><strong> Valor del producto : </strong> $${valorProducto}</p>
                                        <p><strong> Peso en TN : </strong> ${pesoProducto}tn.</p>

                                        <h4> Detalle de Envio </h4>
                                        <p><strong>Origen:</strong> Rosario, Santa Fe.</p>
                                        <p><strong>Destino:</strong> ${destino.value} </p>

                                        <h4> Detalle de Costos </h4>
                                        <p><strong> Costo de envio: </strong>$${costoEnvio}</p>
                                        <p><strong> Iva 21%: </strong> $${iva}</p>
                                        <p><strong> Seguro de envio: </strong> $${seguroProducto}</p>
                                        <p><strong> Costo total: </strong>$${costoTotal}</p>
                                        `;
}
//4) Agregar informacion al Array de Remitente
function agregarDatos(e)
{
    e.preventDefault();
    validarFormulario();
    if(datosOk)
    {   
        
        let remitente = e.target;
        arrayRemitente.push(new Remitente(nombreRemitente, apellidoRemitente, telefonoRemitente, emailRemitente));
        arrayReceptor.push(new Receptor(nombreReceptor, apellidoReceptor, telefonoReceptor, emailReceptor));
        costoEnvio = calcularEnvio();
        iva = calcularIva();
        seguroProducto = calculoSeguroProducto();
        costoTotal = sumaCostoTotal();
    }
    //blanqueo mis campos de input
    formApp.children[2].value ="";
    formApp.children[4].value ="";
    formApp.children[6].value ="";
    formApp.children[8].value ="";

   formApp.children[11].value="";
   formApp.children[13].value="";
   formApp.children[15].value="";
   formApp.children[17].value="";

   formApp.children[20].value="";
   formApp.children[22].value="";
   formApp.children[24].value="";
   formApp.children[26].value="";

   

    //PORQUE USO CONTENEDORCOTIZACION.INNERHTML
    contenedorCotizacion.innerHTML="";
    agregarAlDom();
}


//Array de localStorage con mis datos que no cambian (como una base de datos)
// let arrayDestinos = [{id: 1, provincia: "Buenos Aires", localidad: "Ciudad autonoma de Buenos Aires", distancia: 300},
// {id: 2, provincia: "Buenos Aires", localidad: "La Plata", distancia: 360},
// {id: 3, provincia: "Catamarca", localidad: "San Fernando del Valle de Catamarca", distancia: 850},
// {id: 4, provincia: "Chaco", localidad: "Resistencia", distancia: 710},
// {id: 5, provincia: "Chubut", localidad: "Rawson", distancia: 1460},
// {id: 6, provincia: "Córdoba", localidad: "Córdoba", distancia: 400},
// {id: 7, provincia: "Corrientes", localidad: "Corrientes", distancia: 730},
// {id: 8, provincia: "Entre Rios",localidad: "Paraná", distancia: 205}];

//Datos a Guardar para el Prespupuesto
let arrayRemitente = [];
let arrayReceptor = [];
let arrayEnvio = [];


let datosOk = true;
let seguroProducto = 0;
let costoEnvio = 0;
let iva = 0;
let costoTotal = 0;
// let precioXKm = 140;

//3) Que me tome los datos (eventos)

let formApp = document.getElementById("idFormApp");
//Remitente
let nombreRemitente = formApp.children[2];
let apellidoRemitente = formApp.children[4];
let telefonoRemitente = formApp.children[6];
let emailRemitente = formApp.children[8];
//Receptor
let nombreReceptor = formApp.children[11];
let apellidoReceptor = formApp.children[13];
let telefonoReceptor = formApp.children[15];
let emailReceptor = formApp.children[17];

//Producto
let nombreProducto = formApp.children[20];
let cantidadPallet = formApp.children[22];
let valorProducto = formApp.children[24];
let pesoProducto = formApp.children[26];

//Destino
let destino = document.querySelector(".destino");

// let btnEjecutarApp = document.getElementById('idBtnSubmit'); 
let contenedorCotizacion = document.getElementById('contenedorCotizacion');





// Algoritmo de funciones
domReady();
mostrarOcultarApp();
formApp.addEventListener('submit', agregarDatos);






