/* Desafio 1 complementario */

/*for(let index = 1; index < 11; index++){
    let nombre = prompt("ingrese su nombre");
    let resultado = `${nombre} eres el cliente nº ${index} de la pagina`;
    alert(resultado);
}
alert("Ya no quedan turnos disponibles, vuelva mañana") */

/* Desafio 1 entregable */

alert("Bienvenido a Tuscasamientos.com, a continuacion podras ver los precios y seleccionar el que mas te guste")
let choose = parseInt(prompt("Elija su paquete 1-Banquete clásico 2-Banquete tipo cóctel 3-Banquete tipo buffet"))
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;
let paquete1 = 10000;
let paquete2 = 8000;
let paquete3 = 12000;
let descuentos = 500;
// Restando impuestos 
let desPaquete1 = resta(paquete1, descuentos);
let desPaquete2 = resta(paquete2, descuentos);
let desPaquete3 = resta(paquete3, descuentos);
// Calculando iva
let ivaPaquete1 = suma(desPaquete1, iva(paquete1));
let ivaPaquete2 = suma(desPaquete2, iva(paquete2));
let ivaPaquete3 = suma(desPaquete3, iva(paquete3));
// Espera
function mensajeEspera() {
    alert("Estamos calculando el valor de su paquete (incluyendo iva y restando descuentos). Un momento por favor");
}
mensajeEspera();
// Total
switch (choose) {
    case 1:
        let precioFinal1 = "Precio final" + " " + ivaPaquete1;
        alert(precioFinal1)
        break;
    case 2:
        let precioFinal2 = "Precio final" + " " + ivaPaquete2;
        alert(precioFinal2)
        break;
    case 3:
        let precioFinal3 = "Precio final" + " " + ivaPaquete3;
        alert(precioFinal3)
        break;
}