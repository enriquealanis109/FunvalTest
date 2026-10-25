import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName: string = "Python";
let version: number = 16.5;
let userName: string = "Enrique19";

console.log(systemName + " " + version + "\n¡Bienvenido, " + userName + "!");

interface task {
  id: number;
  titulo: string;
  completado: boolean;
}

//Declarar un arreglo vacio
let tituloTareas: task[] = [];
let id: number = 1;
let opcion: string;

const addTask = (titulo: string) => {
  const nuevaTarea: task = { id: id, titulo: titulo, completado: false };
  tituloTareas.push(nuevaTarea);
  id++;
  console.log(`Tarea "${titulo}" agregada`);
};

const listTask = () => {
  if (tituloTareas.length === 0) {
    console.log("No hay tareas registradas!");
  }
  const lineas = tituloTareas.map((tarea) => {
    const { id, titulo, completado } = tarea;
    let estado = "pendiente";
    if (completado) {
      estado = "completado";
    }
    return `[${estado}] ${id}.- ${titulo}`;
  });
  lineas.forEach((linea) => console.log(linea));
};

const removeTask = () => {
  const eliminada = tituloTareas.pop();
  if (eliminada === undefined) {
    console.log("No hay tarea para eliminar");
  } else {
    console.log("La tarea " + eliminada.titulo + " ha sido eliminada");
  }
};

//Funciones de filtrado y modificacion
const markCompleted = (idTarea: number) => {
  const tarea = tituloTareas.find((t) => t.id === idTarea);
  if (tarea) {
    tarea.completado = true;
    console.log(`Tarea "${tarea.titulo}" marcada como completada`);
  } else {
    console.log("No existe tarea con ese id");
  }
};

const filterPending = () => {
  return tituloTareas.filter((t) => t.completado === false);
};

const filterCompleted = () => {
  return tituloTareas.filter((t) => t.completado === true);
};

do {
  console.log("\nMenú de Tareas");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Listar tareas");
  console.log("4. Marcar tarea como completada");
  console.log("5. Ver tareas pendientes");
  console.log("6. Ver tareas completadas");
  console.log("7. Salir");

  opcion = await rl.question("Elige una opción: ");

  switch (opcion) {
    case "1":
      const titulo: string = await rl.question(
        "Escribe el nombre de la tarea: ",
      );
      addTask(titulo);
      break;

    case "2":
      removeTask();
      break;

    case "3":
      listTask();
      break;

    case "4":
      const respuesta: string = await rl.question(
        "Escribe el id de la tarea: ",
      );
      markCompleted(Number(respuesta));
      break;

    case "5":
      const pendientes = filterPending();
      pendientes.forEach((t) => console.log(`${t.id}.- ${t.titulo}`));
      break;

    case "6":
      const completadas = filterCompleted();
      completadas.forEach((t) => console.log(`${t.id}.- ${t.titulo}`));
      break;

    case "7":
      console.log("Hasta luego!");
      break;

    default:
      console.log("Opcion no valida, intente de nuevo");
  }
} while (opcion !== "7");
rl.close();
