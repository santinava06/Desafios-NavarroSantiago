
/* Desafio complementario 2 */
class paquetes{
    constructor(nombre,precio){
        this.nombre = nombre
        this.precio = precio
    }
}
const paquete1 = new paquetes("Enamorados", parseInt(48000), 1);
const paquete2 = new paquetes("Familiar", parseInt(64000), 2);
const paquete3 = new paquetes("Presidencial", parseInt(95000), 3);
const paquete = [];
paquete.push(paquete1);
paquete.push(paquete2);
paquete.push(paquete3);
alert("Bienvenido a Tuscasamientos.com, a continuacion podras ver los precios y seleccionar el que mas te guste");
// Total
let choose = parseInt(prompt("Elija su paquete 1-Enamorados 2-Presidencial 3-Familiar"));
switch (choose) {
    case 1:
        let precioFinal1 = "Precio final + IVA =" + " " + (paquete1.precio);
        alert(precioFinal1);
        break;
    case 2:
        let precioFinal2 = "Precio final + IVA" + " " + (paquete2.precio);
        alert(precioFinal2);
        break;
    case 3:
        let precioFinal3 = "Precio final + IVA" + " " + (paquete3.precio);
        alert(precioFinal3);
        break;
}
