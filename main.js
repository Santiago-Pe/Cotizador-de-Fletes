//CLASS
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
class Envio
{
    constructor(nombreProducto, cantidadPallet, valorProducto, pesoProducto, provincia, costoTotal)
    {
    this.producto = nombreProducto;
    this.cantidad = cantidadPallet,
    this.valor = valorProducto,
    this.peso = pesoProducto,
    this.provincia = provincia;
    this.costo = costoTotal;
    }
}

//FUNCIONES
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
//3) Cargar opciones de seleccion de destino de envio.
function cargarOptionsSelecDesti()
{
    // let selectDestinos = document.getElementsByName(".destinos");
    for (const destino of destinosArray)
    {
        provincia.append(new Option(destino.provincia, destino.provincia));
    }
}
//4)Validar Form a completar del usuario.
function validarFormulario()
{
    nombreRemitente = formApp.children[1].value;
    apellidoRemitente = formApp.children[2].value;
    telefonoRemitente = formApp.children[3].value;
    emailRemitente = formApp.children[4].value;

    nombreReceptor = formApp.children[6].value;
    apellidoReceptor = formApp.children[7].value;
    telefonoReceptor = formApp.children[8].value;
    emailReceptor = formApp.children[9].value;

    nombreProducto = formApp.children[11].value;
    cantidadPallet = formApp.children[12].value;
    valorProducto = formApp.children[13].value;
    pesoProducto = formApp.children[14].value;
    
    if ((nombreRemitente == "") || (apellidoRemitente == "") || (telefonoRemitente == "") || (emailRemitente == ""))
    {
        alert("Por favor complete todos los campos del 'Remitente'.")
        return
    }
    else if  ((nombreReceptor == "") || (apellidoReceptor == "") || (telefonoReceptor == "") || (emailReceptor == ""))
    {
        alert("Por favor complete todos los campos del 'Receptor'.")
        return
    }
    else if((nombreProducto == "") || (cantidadPallet == "") || (valorProducto == "") || (pesoProducto == ""))
    {
        alert("Por favor complete todos los campos de 'Producto a Enviar'.")
        return
    }
    else if ((cantidadPallet > 20) || (pesoProducto > 28))
    {
        alert("Maximo 20 pallet o 28 tn. Usted requiere más de 1 equipo. Por favor contactarse con Logística.")
    }
    else if (provincia.value == "")
    {
        alert("Por favor elija un destino.")
    }
}
//5)Calculo de el precio x distancia segun cantidad de pallet
function calcularEnvio()
{
    let costo = 0;
    let precioXKm = 0;
    if(cantidadPallet <= 5) 
    {  
        precioXKm = 100;
        switch(provincia.value)
        {
            case "Buenos Aires":
                costo = precioXKm * 300;
                break;
            case "Catamarca":
                costo = precioXKm * 850;
                break;      
            case "Chaco":
                costo = precioXKm * 850;
                break;     
            case "Chubut":
                costo = precioXKm * 710;
                break;     
            case "Cordoba":
                costo = precioXKm * 400;
                break;     
            case "Corrientes":
                costo = precioXKm * 730;
                break;     
            case "Entre Rios":
                costo = precioXKm * 205;
                break;
            case "Formosa":
                costo = precioXKm * 880;
                break;  
            case "Jujuy":
                costo = precioXKm * 1200;
                break; 
            case "La Pampa":
                costo = precioXKm * 640;
                break;
            case "La Rioja":
                    costo = precioXKm * 840;
                    break;
            case "Mendoza":
                costo = precioXKm * 880;
                break; 
            case "Misiones":
                costo = precioXKm * 900;
                break;  
            case "Neuquen":
                costo = precioXKm * 1150;
                break;  
            case "Rio Negro":
                costo = precioXKm * 1020;
                break;  
            case "Salta":
                costo = precioXKm * 1670;
                break; 
            case "San Juan":
                costo = precioXKm * 940;
                break;
            case "San Luis":
                costo = precioXKm * 610;
                break; 
            case "Santa Cruz":
                costo = precioXKm * 2600;
                break;
            case "Santa Fe":
                costo = precioXKm * 180;
                break;  
            case "Santiago Del Estero":
                costo = precioXKm * 750;
                break; 
            case "Tierra Del Fuego":
                costo = precioXKm * 3170;
                break;
            case "Tucuman":
                costo = precioXKm * 950;
                break; 
        } 
    }   
    else if(cantidadPallet <= 10) 
    {
        precioXKm = 110;
        switch(provincia.value)
        {
            case "Buenos Aires":
                costo = precioXKm * 300;
                break;
            case "Catamarca":
                costo = precioXKm * 850;
                break;      
            case "Chaco":
                costo = precioXKm * 850;
                break;     
            case "Chubut":
                costo = precioXKm * 710;
                break;     
            case "Cordoba":
                costo = precioXKm * 400;
                break;     
            case "Corrientes":
                costo = precioXKm * 730;
                break;     
            case "Entre Rios":
                costo = precioXKm * 205;
                break;
            case "Formosa":
                costo = precioXKm * 880;
                break;  
            case "Jujuy":
                costo = precioXKm * 1200;
                break; 
            case "La Pampa":
                costo = precioXKm * 640;
                break;
            case "La Rioja":
                    costo = precioXKm * 840;
                    break;
            case "Mendoza":
                costo = precioXKm * 880;
                break; 
            case "Misiones":
                costo = precioXKm * 900;
                break;  
            case "Neuquen":
                costo = precioXKm * 1150;
                break;  
            case "Rio Negro":
                costo = precioXKm * 1020;
                break;  
            case "Salta":
                costo = precioXKm * 1670;
                break; 
            case "San Juan":
                costo = precioXKm * 940;
                break;
            case "San Luis":
                costo = precioXKm * 610;
                break; 
            case "Santa Cruz":
                costo = precioXKm * 2600;
                break;
            case "Santa Fe":
                costo = precioXKm * 180;
                break;  
            case "Santiago Del Estero":
                costo = precioXKm * 750;
                break; 
            case "Tierra Del Fuego":
                costo = precioXKm * 3170;
                break;
            case "Tucuman":
                costo = precioXKm * 950;
                break; 
        } 
    }   
    else if(cantidadPallet <= 15) 
    {
        precioXKm = 130;
        switch(provincia.value)
        {
            case "Buenos Aires":
                costo = precioXKm * 300;
                break;
            case "Catamarca":
                costo = precioXKm * 850;
                break;      
            case "Chaco":
                costo = precioXKm * 850;
                break;     
            case "Chubut":
                costo = precioXKm * 710;
                break;     
            case "Cordoba":
                costo = precioXKm * 400;
                break;     
            case "Corrientes":
                costo = precioXKm * 730;
                break;     
            case "Entre Rios":
                costo = precioXKm * 205;
                break;
            case "Formosa":
                costo = precioXKm * 880;
                break;  
            case "Jujuy":
                costo = precioXKm * 1200;
                break; 
            case "La Pampa":
                costo = precioXKm * 640;
                break;
            case "La Rioja":
                    costo = precioXKm * 840;
                    break;
            case "Mendoza":
                costo = precioXKm * 880;
                break; 
            case "Misiones":
                costo = precioXKm * 900;
                break;  
            case "Neuquen":
                costo = precioXKm * 1150;
                break;  
            case "Rio Negro":
                costo = precioXKm * 1020;
                break;  
            case "Salta":
                costo = precioXKm * 1670;
                break; 
            case "San Juan":
                costo = precioXKm * 940;
                break;
            case "San Luis":
                costo = precioXKm * 610;
                break; 
            case "Santa Cruz":
                costo = precioXKm * 2600;
                break;
            case "Santa Fe":
                costo = precioXKm * 180;
                break;  
            case "Santiago Del Estero":
                costo = precioXKm * 750;
                break; 
            case "Tierra Del Fuego":
                costo = precioXKm * 3170;
                break;
            case "Tucuman":
                costo = precioXKm * 950;
                break; 
        } 
    }   
    else if(cantidadPallet <= 20) 
    {
        precioXKm = 150;
        switch(provincia.value)
        {
            case "Buenos Aires":
                costo = precioXKm * 300;
                break;
            case "Catamarca":
                costo = precioXKm * 850;
                break;      
            case "Chaco":
                costo = precioXKm * 850;
                break;     
            case "Chubut":
                costo = precioXKm * 710;
                break;     
            case "Cordoba":
                costo = precioXKm * 400;
                break;     
            case "Corrientes":
                costo = precioXKm * 730;
                break;     
            case "Entre Rios":
                costo = precioXKm * 205;
                break;
            case "Formosa":
                costo = precioXKm * 880;
                break;  
            case "Jujuy":
                costo = precioXKm * 1200;
                break; 
            case "La Pampa":
                costo = precioXKm * 640;
                break;
            case "La Rioja":
                    costo = precioXKm * 840;
                    break;
            case "Mendoza":
                costo = precioXKm * 880;
                break; 
            case "Misiones":
                costo = precioXKm * 900;
                break;  
            case "Neuquen":
                costo = precioXKm * 1150;
                break;  
            case "Rio Negro":
                costo = precioXKm * 1020;
                break;  
            case "Salta":
                costo = precioXKm * 1670;
                break; 
            case "San Juan":
                costo = precioXKm * 940;
                break;
            case "San Luis":
                costo = precioXKm * 610;
                break; 
            case "Santa Cruz":
                costo = precioXKm * 2600;
                break;
            case "Santa Fe":
                costo = precioXKm * 180;
                break;  
            case "Santiago Del Estero":
                costo = precioXKm * 750;
                break; 
            case "Tierra Del Fuego":
                costo = precioXKm * 3170;
                break;
            case "Tucuman":
                costo = precioXKm * 950;
                break; 
        } 
    }     
    return costo;      
}
//6)Calcular el costo de iva del envio
function calcularIva()
{
    let costoIva = costoEnvio * 0.21;
    return costoIva
}
//7)Calculo del seguro del valor del producto a transportar
function calculoSeguroProducto()
{
    return (valorProducto * 3) / 100;
}
//8)Suma de todos los costos
function sumaCostoTotal()
{
    let suma = costoEnvio + iva + seguroProducto;
    return suma    
}
//9)Se creaa la cotizacion con estilo y los datos correspondientes
function agregarAlDom()
{
    contenedorCotizacion.innerHTML =   
        `<div class= "contenedorCotiDom">
            <div class ="titleCotizacion">
                <h3>Cotización</h3>
            </div>
            <hr>
            <div class="superior">
                <div class = "text">
                    <h4 class ="subTitleC">Datos Remitente</h4>
                    <p><strong>Nombre:</strong> ${nombreRemitente}</p>
                    <p><strong>Apellido:</strong> ${telefonoRemitente}</p>
                    <p><strong>Télefono:</strong> ${telefonoRemitente}</p>
                    <p><strong>Email:</strong> ${emailRemitente} </p>
                </div>
                <div class = "text">
                    <h4 class ="subTitleC">Datos Receptor</h4>
                    <p><strong>Nombre:</strong> ${nombreReceptor}</p>
                    <p><strong>Apellido:</strong> ${apellidoReceptor}</p>
                    <p><strong>Télefono:</strong> ${telefonoReceptor}</p>
                    <p><strong>Email:</strong> ${emailReceptor}</p>
                </div>
            </div>
            <hr> 
            <div class="medio">   
                <div class = "text">
                    <h4 class ="subTitleC"> Datos del producto a enviar</h4>
                    <p><strong>Nombre producto:</strong> ${nombreProducto}</p>
                    <p><strong>Cantidad de pallet:</strong> ${cantidadPallet}</p>
                    <p><strong>Valor del producto:</strong> $${valorProducto}</p>
                    <p><strong>Peso:</strong> ${pesoProducto}tn.</p>
                </div>
                <div class = "text">
                    <h4 class ="subTitleC">Detalle de envio</h4>
                    <p><strong>Origen:</strong> Rosario, SF.</p>
                    <p><strong>Destino:</strong> ${provincia.value}</p>
                </div>
            </div>
            <hr> 
            <div class="final">   
                <div class = "text">
                    <h4 class ="subTitleC">Detalles de Costo</h4>
                    <p><strong>Costo de envio:</strong> $${costoEnvio}</p>
                    <p><strong>Iva 21%:</strong> $${iva}</p>
                    <p><strong>Seguro de envio:</strong> $${seguroProducto}</p>
                </div>
                <div class = "text">
                    <p class= "textoFinal"><strong>Costo total:</strong> $${costoTotal}</p>
                </div>
            </div>
        </div>
        <div class= "btnConfirmarBox">
            <button class="btnConfirmar">Confirmar</button>
        </div>`;

    $(".contenedorCotiDom").css(
        {   
            "display": "flex",
            "flex-wrap": "wrap",
            "flex-direction": "row",
            "flex-wrap": "wrap",
            "justify-content": "center",

            "width": "auto",
            "margin": "2rem",
            "padding": "1rem",

            "border-radius": "10px",
            "background-color": " rgb(240, 205, 152)"
        }
    );
    $("hr").css(
        {
            "border": "0.2px solid black",

            "width": "100%",

            "margin-top": "0.5rem",
            "margin-bottom": "0.5rem"
        }
    );
    $(".titleCotizacion").css(
        {   
            "font-family":"Quicksand",
            "font-weight": "800",
            "font-size": "25px", 
            "text-align": "center"
        }
    );
    $(".subTitleC").css(
        {   
            "font-family":"Quicksand",
            "font-weight": "700",
            "font-size": "20px",
            "text-align": "start",

            "margin-bottom": "1rem",
            "margin-top": "1rem"
        }
    );
    $(".text").css(
        {   
            "font-family":"Quicksand",
            "font-weight": "500",
            "font-size": "16px",

            "width": "325px",
            "height": "auto",

            "text-align": "justify",

            "flex-direction": "column",
            "flex-wrap": "wrap",
            "align-items": "stretch"
        }
    );
    $(".textoFinal").css(
        {
            "font-weight": "700",
            "font-size": "25px",
        }    
    )    
    $(".superior").css(
        {   
            "display": "flex",
            "flex-direction": "row",
            "flex-wrap": "wrap",
            "align-items": "flex-start",
            "justify-content": "space-evenly",

            "width": "100%",

            "margin-bottom": "1rem",
            "margin-top": "1rem",
        }
    );
    $(".medio").css(
        {   
            "display": "flex",
            "flex-direction": "row",
            "flex-wrap": "wrap",
            "align-items": "flex-start",
            "justify-content": "space-evenly",

            "width": "100%",

            "margin-bottom": "1rem",
            "margin-top": "1rem"
        }
    );
    $(".final").css(
        {   
            "display": "flex",
            "flex-direction": "row",
            "flex-wrap": "wrap",
            "align-items": "flex-end",
            "justify-content": "space-evenly",

            "width": "100%",

            "margin-bottom": "1rem",
            "margin-top": "1rem"
        }
    );
    $(".btnConfirmar").css(
        {
           "width": "200px",
            "height": "50px",
        
            "border-radius": "10px",
            "border": "none",
        
            "background-color": "rgb(39, 39, 39)",
            "color": "rgb(242, 184, 98)",
        
            "font-family":"Quicksand",
            "font-weight": "700",
            "font-size": "35px"
        }
    )
    $(".btnConfirmarBox").css(
        {
            "margin-top": "2rem",
            "margin-bottom": "2rem",

            "display": "flex",
            "justify-content": "center"
        }
    )
         
}
//10)Confirmacion de cotizacion y desplieuge
function finalizarCotizacionButton() 
{   
    $(".btnConfirmar").on("click", function(){
        guardarDatosCoti();
        guardarLocalStorage ();
        alert("Su cotización acaba de ser enviada a nuestro sector de ventas. En 24hs nos contactaremos. Muchas gracias!")
        $("#contApp").slideUp(1000);
    })
}
//11) Blanqueo mis inputs y select en mi form
function blanqueoDeFomr()
{
    formApp.children[1].value ="";
    formApp.children[2].value ="";
    formApp.children[3].value ="";
    formApp.children[4].value ="";

    formApp.children[6].value="";
    formApp.children[7].value="";
    formApp.children[8].value="";
    formApp.children[9].value="";

    formApp.children[11].value="";
    formApp.children[12].value="";
    formApp.children[13].value="";
    formApp.children[14].value="";

    document.querySelector(".destino").value ="";

}
//12) Blanqueo mi contenedor de la cotizacion
function blanqueoDeMiDivContCoti()
{
    contenedorCotizacion.innerHTML="";
}
//13) Creo un nuevo array que me contenga toda la informacion.
function guardarDatosCoti()
{
    datosClientes = arrayRemitente.concat(arrayReceptor);
    datosCoti = datosClientes.concat(arrayEnvio);
}
//14) Guardamos en un localStoarge simulando que es una base de datos
function guardarLocalStorage ()
{
    datosCotiLocalStorage = ("cotizacionConfirmada", JSON.stringify(datosCoti));
}
//13) Agraga al dom, limpia campos y pushea en mis array/clases
function agregarDatos(e)
{
    debugger    
        e.preventDefault(e)
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
        arrayEnvio.push(new Envio(nombreProducto, cantidadPallet, valorProducto, pesoProducto, provincia.value, costoTotal));
        agregarAlDom();
        finalizarCotizacionButton();
        blanqueoDeFomr();
    }
    else
    {
        blanqueoDeMiDivContCoti();
    }    
}

//ARRAYS
let destinosArray = []; //donde traigo mis datos del json
let arrayRemitente = [];
let arrayReceptor = [];
let arrayEnvio = [];

//VARIABLES
const destinosUrlJSON = "destinos.json"
let datosOk = true;
let datosCoti;
let datosCotiLocalStorage = "";

//FORM
let formApp = document.getElementById("idFormApp");
//Remitente
let nombreRemitente = formApp.children[1];
let apellidoRemitente = formApp.children[2];
let telefonoRemitente = formApp.children[3];
let emailRemitente = formApp.children[4];
//Receptor
let nombreReceptor = formApp.children[6];
let apellidoReceptor = formApp.children[7];
let telefonoReceptor = formApp.children[8];
let emailReceptor = formApp.children[9];

//Producto
let nombreProducto = formApp.children[11];
let cantidadPallet = formApp.children[12];
let valorProducto = formApp.children[13];
let pesoProducto = formApp.children[14];

//Destino
let provincia = document.querySelector(".destino");

//Botones
let btnEjecutarApp = document.getElementById('idBtnSubmit'); 
let btnDesplegarApp = document.getElementsByClassName(".btnApp")
//Contenedor donde se despliega la cotizacion
let contenedorCotizacion = document.getElementById('contenedorCotizacion');

// Algoritmo de funciones
domReady();
mostrarOcultarApp();
$.getJSON(destinosUrlJSON, function (respuesta, estado) 
{
    if(estado === "success")
    {
        destinosArray = respuesta;
        cargarOptionsSelecDesti();
    }
    else  (estado === "error")
});
formApp.addEventListener('submit', agregarDatos);