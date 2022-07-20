
/* Primera pre-entrega */
// class paquetes{
//     constructor(nombre,precio){
//         this.nombre = nombre
//         this.precio = precio
//     }
// }
// const paquete1 = new paquetes("Enamorados", parseInt(48000), 1);
// const paquete2 = new paquetes("Familiar", parseInt(64000), 2);
// const paquete3 = new paquetes("Presidencial", parseInt(95000), 3);
// const paquete = [];
// paquete.push(paquete1);
// paquete.push(paquete2);
// paquete.push(paquete3);
// alert("Bienvenido a Tuscasamientos.com, a continuacion podras ver los precios y seleccionar el que mas te guste");
// // Total
// let choose = parseInt(prompt("Elija su paquete 1-Enamorados 2-Presidencial 3-Familiar"));
// switch (choose) {
//     case 1:
//         let precioFinal1 = "Precio final + IVA =" + " " + (paquete1.precio);
//         alert(precioFinal1);
//         break;
//     case 2:
//         let precioFinal2 = "Precio final + IVA" + " " + (paquete2.precio);
//         alert(precioFinal2);
//         break;
//     case 3:
//         let precioFinal3 = "Precio final + IVA" + " " + (paquete3.precio);
//         alert(precioFinal3);
//         break;
// }



// const paquetes1 = [
//     {id: 1, nombre: "Enamorados", precio: 48000},
//     {id: 2, nombre: "Familiar", precio: 64000},
//     {id: 3, nombre: "Presidencial", precio: 98000},
// ]


// const masiva = paquetes1.map(elemento => {
//     return {
//         id: elemento.id,
//         nombre: elemento.nombre,
//         precio: elemento.precio + (elemento.precio * 0.21)
//     }
// })
// console.log(masiva);

//No sabia donde agregar el map, pero si necesitas que lo agregue lo reenvio despues


/* Desafio complementario 3 */

let container = document.getElementById("Tucasamiento.com");
let divTitulo1 = document.createElement("div");
let busquedaPaq = document.getElementById("inBusquedax");

divTitulo1.className = "div_titulo";
divTitulo1.innerHTML += `<div class = "div-titulo-contenedor">
<h2> Tu casamiento: <b>Paquetes</b></h2>
<input id="inBusqueda" type="search" placeholder="Buscar...">
</div>`;
tiendaCas.appendChild(divTitulo1);

let nav = document.createElement("nav");

console.log(barraBusqueda);

