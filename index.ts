import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { isOptionalChain } from 'typescript';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName : string ='Python'
let version : number= 16.5;
let userName : string= 'Enrique19'

console.log(systemName + ' '+ version + '\n¡Bienvenido, ' + userName +'!');

//Declarar un arreglo vacio
let tituloTareas : string[] = [];
let opcion : string;

do{
    console.log('\nMenú de Tareas');
    console.log('1. Agregar tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Listar tareas');
    console.log('4. Salir');

    opcion = await rl.question('Elige una opción: ')

    switch(opcion){
        case '1':
            const titulo: string = await rl.question('Escribe el nombre de la tarea: ');
            tituloTareas.push(titulo);
            console.log(`Tarea "${titulo}" agregada`);
            break;

        case '2':
        const eliminada = tituloTareas.pop(); 
            if(eliminada === undefined){
                console.log('No hay tarea para eliminar');
            }else{
                console.log(`La tarea ${eliminada} ha sido eliminada`);
            }
            break;
        
        case '3':
            if(tituloTareas.length === 0){
                console.log('No hay tareas registradas!');
            }
            for(let i=0; i < tituloTareas.length; i++){
                console.log(`${i+1}. ${tituloTareas[i]}`)
            }
            break;

        case '4':
            console.log('Hasta luego!');
            break;

        default:
            console.log('Opcion no valida, intente de nuevo');
    }
}
    while(opcion !== '4');
rl.close();
