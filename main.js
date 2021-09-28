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
    constructor(nombreProducto, cantidadPallet, valorProducto, pesoProducto, provinciaSeleccionada, costoTotal)
    {
    this.producto = nombreProducto;
    this.cantidad = cantidadPallet,
    this.valor = valorProducto,
    this.peso = pesoProducto,
    this.provincia = provinciaSeleccionada;
    this.costo = costoTotal;
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
    else if (destino.value == "")
    {
        alert("Por favor elija un destino.")
    }
 // 
}
//4) Calcuclo del costo de flete
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
    return costo;      
}
//5) Calculo del iva sobre el costo del flete
function calcularIva()
{
    let costoIva = costoEnvio * 0.21;
    return costoIva
}
// 6) Calculo del seguro sobre el valor de porudcto ingresadp
function calculoSeguroProducto()
{
    return (valorProducto * 3) / 100;
}
//7) Suma de todos los costos
function sumaCostoTotal()
{
    let suma = costoEnvio + iva + seguroProducto;
    return suma    
}
// 8) Se agrega etiquetas + estilos a la cotizacion
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
                    <p><strong>Destino:</strong> ${destino.value}</p>
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
// 9) Botton que confimra y despliega para arriba la cotizacion
function finalizarCotizacionButton() 
{   
    $(".btnConfirmar").on("click", function(){
        alert("Su cotización acaba de ser enviada a nuestro sector de ventas. En 24hs nos contactaremos. Muchas gracias!")
        $("#contApp").slideUp(1000);
    })
}
//10) Agraga al dom, limpia campos y pushea en mis array/clases
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
        arrayEnvio.push(new Envio(nombreProducto, cantidadPallet, valorProducto, pesoProducto, destino.value, costoTotal));

         //blanqueo mis campos de input
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
         contenedorCotizacion.innerHTML="";
        
    }   
    agregarAlDom();//cuando lo pongo mal, me avisa, pero lo agrega igual
    finalizarCotizacionButton();
    
}



//Datos a Guardar para el Prespupuesto
let arrayRemitente = [];
let arrayReceptor = [];
let arrayEnvio = [];


let datosOk = true;
let seguroProducto = 0;
let costoEnvio = 0;
let iva = 0;
let costoTotal = 0;


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
let destino = document.querySelector(".destino");

let btnEjecutarApp = document.getElementById('idBtnSubmit'); 
let contenedorCotizacion = document.getElementById('contenedorCotizacion');





// Algoritmo de funciones
domReady();
mostrarOcultarApp();
formApp.addEventListener('submit', agregarDatos);

