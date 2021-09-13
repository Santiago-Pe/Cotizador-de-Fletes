//como debe quedar mi array
arrayDeseado = 
[
    { id: 1, cliente1: "Santiago Peña", tel: 3412272025, emial:"santi.raul97@gmail.com"}, //remitente.
    { id: a1, cliente2:"Jose Piro", tel2: 3435552542, emial2: "josepiro@gmail.com"}, //receptor.
    {id: b1, nombre: "adoquines", cantidad: 18, valor: 150.000, peso: 28}, //producto a despachar.
    {id: c1, origen: "Rosario", destino: "buenos aires", precio: 22.000}, //sacado con la funcion "calcular costo". Datos del flete
    {id: d1, costoIva: 5000, costoSeguro: 2500, costoEmba: 2500, costoTotal: 32000} //costos.
]

//Ahora con todo esos datos, yo los debo volcar en el prespuesto de html.
/*
 que creo que puedo hacer:
 crear un array por cada objeto. Guardarlo en el SessionStorage. 
 Luego, vovler a traerlos a otros arrays diferentes. 
 Luego usar algun metodo de array que me fucione todo, y crear un nuevo array
 que contenga todo los datos de rto. 
 y de ahi pasarlo al rto de html
 
*/