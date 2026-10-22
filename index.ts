import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName : string ='Python'
let version : number= 16.5;
let userName : string= 'Enrique19'

console.log(systemName + ' '+ version + '\n¡Bienvenido, ' + userName +'!');

interface task{
    id: number;
    titulo: string;
    completado: boolean;
}
//Declarar un arreglo vacio
let tituloTareas : task[] = [];
let id: number =1;
let opcion : string;

const addTask = (titulo:string) => {
    const nuevaTarea: task = {id: id, titulo:titulo, completado: false};
    tituloTareas.push(nuevaTarea);
    id++;
    console.log(`Tarea "${titulo}" agregada`);
}

const listTask = () => {
    if(tituloTareas.length === 0){
        console.log('No hay tareas registradas!');
    }
    for(let i =0; i < tituloTareas.length; i++){
        let estado ='pendiente';
        if (tituloTareas[i].completado){
            estado='completado';
        }
        console.log(tituloTareas[i].id +".- "+ tituloTareas[i].titulo +" - "+ estado );
    }
}

const removeTask=()=>{
    const eliminada= tituloTareas.pop();
    if (eliminada === undefined) {
        console.log('No hay tarea para eliminar');
    }else{
        console.log('La tarea ' +eliminada.titulo+' ha sido eliminada');
    }
}

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
            addTask(titulo);
            break;

        case '2':
            removeTask();
            break;
        
        case '3':
            listTask();
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


