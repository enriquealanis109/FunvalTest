console.log("Hola mundo");

console.log("Estoy ejecutando TypeScript correctamente"); //Imprimir cosas en consola

/**Este
 * en un comentario
 * en varios lineas
 */

//TIPOS DE DATOS
let edad: number = 32;
let apPaterno: string = "Alanis";
let salva: boolean = false; // o true
let resultado: null = null; //
let noDefinido: undefined;
let numeroGigante: bigint = 28399423808933498n;
let idUnico: symbol = Symbol("id");
//TIOIS DE DATOS EXCLUSIVOS DE TYPESCRIPT
let comodin: any = "Texto plano";
comodin = 32;
comodin = true;

let dato: unknown = "mensaje";
let vacio: void;

//CREAR VARIABLES Y CONSTANTES EN TYPESCRIPT

//VARIABLES
let apellidoPaterno



//Ejercicio de estacionamiento
let tarifaPorHora: number = 20;
let horas: number = 3;
let total: number = tarifaPorHora * horas;

console.log("Horas: " + horas);
console.log("Total a cobrar: $" + total);