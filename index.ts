import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName : string ='Python'
let version : number= 16.5;
let userName : string= 'Enrique19'

console.log(systemName + ' '+ version + '\n¡Bienvenido, ' + userName +'!');
// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();