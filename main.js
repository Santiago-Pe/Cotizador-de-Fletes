//Ejercictacion de Objetos.
/*
Cargas de personas para vacunar contra covid.

1) Cargar las personas
2) Definir por algun criterio, prioridad en la fila.
3) Mostrar la lista prioritaria a vacunar.
4) Mostrar porcentaje de personas a vacunar con prioridad.
*/

class Persona{
    constructor(pDNI,pNombre,pEdad,pEsencial){
        this.dni = pDNI;
        this.nombre = pNombre;
        this.edad = pEdad;
        this.esencial = pEsencial;

        this.prioritario = pEdad >= 65 && pEsencial;
    }
}

var acumuladorDeAtendidos = 0;
var acumuladorPrioritarios = 0;

while(true){
    let pDNI = Number.parseInt(prompt("Ingresa tu DNI"));

    if (isNaN(pDNI)) break; //Detenemos el bucle // Que es isNaN
    let pNombre = Number.parseInt(prompt("Ingresa tu Nombre"));
    let pEdad = Number.parseInt(prompt("Ingresa tu Edad"));
    let pEsencial = Number.parseInt(prompt("Ingresa (s/n) si sos esencial") === "si");

    var personalActual = new Persona(pDNI, pNombre, pEdad, pEsencial);

    if(personalActual.prioritario){
        console.log("La persona " + personalActual.nombre + "va a ser atendida en este momento");
        acumuladorPrioritarios++;
    }
    acumuladorDeAtendidos++;

}

console.log (
    "El total de personas atendidas es :" +
    acumuladorDeAtendidos + "y el % de prioritarios es: " +
    (acumuladorPrioritarios * 100) / acumuladorDeAtendidos
);