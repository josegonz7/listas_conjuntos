// ejercicio 1 

let notas = [];
let salir = false;

do {
    let opc = window.prompt("Elije una operación: \n" +
        "a. introducir nota al principio \n" +
        "b. introducir nota al final \n" +
        "c. subir todas las notas x puntos \n" +
        "d. calcular estadisticas actuales \n" +
        "e. Vaciar notas \n" +
        "f. Inicializar N notas a valor X \n" +
        "g. Eliminar la primera nota \n" +
        "h. Eliminar la segunda nota \n" +
        "i. Establecer a 0 todos los suspensos \n" +
        "j. Sustituir una nota por otra \n" +
        "k. Añadir una nota en una posición determinada \n" +
        "l.  Contar el número de suspensos \n" +
        "m. Salir");

    switch (opc) {
        // A. Introducir una nota al principio
        case 'a':
            const nota1 = parseInt(window.prompt("dime la primera nota"));
            notas.unshift(nota1);
            console.table(notas);
            break;
        // B. Introducir una nota al final
        case 'b':
            const nota2 = parseInt(window.prompt("dime la ultima nota"));
            notas.push(nota2);
            console.table(notas);
            break;
        // C. Subir todas las notas X puntos
        case 'c':
            const puntos = parseInt(window.prompt("cuantos puntos quieres sumar"));
            for (let i = 0; i < notas.length; i++) {
                notas[i] = notas[i] + puntos;
            }
            console.table(notas);
            break;
        // D. Calcular estadísticas actuales
        case 'd':
            notaD();
            break;
        // E. Vaciar notas
        case 'e':
            notas = [];
            console.table(notas);
            console.log("la lista esta vacia");
            break;
        // F. Inicializar N notas a valor X
        case 'f':
            const cantidad = window.prompt("el número de notas que desea generar:");
            const valor = window.prompt("el valor que tendrán todas esas notas:");
            let notas2 = [];
            notas = notas2;
            for (let i = 0; i < cantidad; i++) {
                notas.push(valor);
            }
            console.table(notas);
            break;
        // G. Eliminar la primera nota
        case 'g':
            notas.shift();
            console.table(notas);
            break;
        // H. Eliminar la segunda nota
        case 'h':
            notas.splice(1, 1);
            console.table(notas);
            break;
        // I. Establecer a 0 todos los suspensos
        case 'i':
            for (let i = 0; i < notas.length; i++) {
                if (notas[i] < 5) {
                    notas[i] = 0;
                }
            }
            console.table(notas);
            break;
        // J. Sustituir una nota por otra
        case 'j':
            const notaOri = window.prompt("Nota a sustituir:");
            const notaDes = window.prompt("Nueva nota:");
            for (let i = 0; i < notas.length; i++) {
                if (notas[i] === notaOri) {
                    notas[i] = notaDes;
                }
            }
            console.table(notas);
            break;
        // K. Añadir una nota en una posición determinada
        case 'k':
            const nueva = window.prompt("Introduce la nota:");
            const posicion = window.prompt("posicion:");
            notas.splice(posicion, 0, nueva);
            console.table(notas);
            break;
        // L. Contar el número de suspensos
        case 'l':
            let contador = 0;
            for (let i = 0; i < notas.length; i++) {
                if (notas[i] < 5) {
                    contador++;
                }
            }
            console.log("suspensos: " + contador);
            console.table(notas);
            break;
        case 'm':
            // M. Salir: Finalizar la ejecución del programa
            salir = true;
            break;
        default:
            console.error("Introduce un valor correcto");
            break;
    }

} while (!salir);

function notaD() {

    let ordenadas = [...notas]
    ordenadas.sort();

    let media = 0;

    for (let nota of notas) {
        media += nota;
    }

    console.log("La mínima es: " + ordenadas[0]);
    console.log("La máxima es: " + ordenadas[ordenadas.length - 1]);
    console.log("la nota media es " + media / notas.length);
    console.log("La moda es: " + calcularModa());
    console.table(notas);
}

function calcularModa() {
    let moda;

    let rep = new Map();

    for (let nota of notas) {
        if (rep.has(nota)) {

            rep.set(nota, rep.get(nota) + 1);
        } else {
            rep.set(nota, 1);
        }
    }

    let max = 0;
    for (let nota of rep.keys()) {
        if (max < rep.get(nota)) {
            max = nota;
            moda = nota;
        }
    }

    return moda;
}