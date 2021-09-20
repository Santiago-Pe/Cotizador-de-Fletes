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
function validarFormularioRemitente()
{
    nombreRemitente = formRemitente.children[1].value;
    apellidoRemitente = formRemitente.children[3].value;
    telefonoRemitente = formRemitente.children[5].value;
    emialRemitente = formRemitente.children[7].value;
    //  Remitente
    if ( nombreRemitente === ' ' || apellidoRemitente === ' ' || telefonoRemitente === ' ' || emialRemitente === ' ')
    {
        alert = ('Por favor complete bien los datos del Remitente')
        datosOk = false;
    }
    else
    {
        console.log("los datos fueron bien ingresados")
    }

}
function agregarAlDom()
{
    contenedorCotizacion.innerHTML = `<h3> Cotizacion</h3>
    <p><strong> Nombre : </strong> ${nombreRemitente}</p>
    <p><strong> Apellido : </strong> ${apellidoRemitente}</p>
    <p><strong> Teléfono : </strong> ${telefonoRemitente}</p>
    <p><strong> Email : </strong> ${emialRemitente}</p>`;
}
//4) Agregar informacion al Array de Remitente
function agregarDatosRemitente(e)
{
    e.preventDefault();
    validarFormularioRemitente();
    if(datosOk)
    {
        let remitente = e.target;
        arrayRemitente.push(new Remitente(nombreRemitente, apellidoRemitente, telefonoRemitente, emialRemitente));
    }
    //blanqueo mis campos de input
    formRemitente.children[1].value ="";
    formRemitente.children[3].value ="";
    formRemitente.children[5].value ="";
    formRemitente.children[7].value ="";
    //PORQUE USO CONTENEDORCOTIZACION.INNERHTML
    contenedorCotizacion.innerHTML="";
    agregarAlDom();
}

//Datos a Guardar para el Prespupuesto
let arrayRemitente = [];
let datosOk = true;

//3) Que me tome los datos (eventos)
//Remitente
let formRemitente = document.getElementById("idFormRemitente");
let nombreRemitente = formRemitente.children[1];
let apellidoRemitente = formRemitente.children[3];
let telefonoRemitente = formRemitente.children[5];
let emialRemitente = formRemitente.children[7];

let btnEjecutarApp = document.getElementById('idBtnSubmit'); 
let contenedorCotizacion = document.getElementById('contenedorCotizacion');





// Algoritmo de funciones
domReady();
mostrarOcultarApp();
formRemitente.addEventListener('submit', agregarDatosRemitente);



