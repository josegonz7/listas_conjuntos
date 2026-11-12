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
        case 'a':
            const nota1 = window.prompt("dime la primera nota");
            notaA(nota1);
            break;
        case 'b':
            const nota2 = window.prompt("dime la ultima nota");
            notaB(nota2);
            break;
        case 'c':
            const puntos = window.prompt("cuantos puntos quieres sumar");
            notaC(puntos);
            break;
        case 'd':
            notaD();
            break;
        case 'e':
            notaE();
            break;
        case 'f':
            const nota3 = window.prompt("el número de notas que desea genera");
            notaF(nota3);
            break;
        case 'g':
            notaG(notas);
            break;
        case 'h':
            notaH(notas);
            break;
        case 'i':
            notaI(notas);
            break;
        case 'j':
            break;
        case 'k':
            break;
        case 'l':
            break;
        case 'm':
            salir = true;
            break;
        default:
            console.error("Introduzca un valor correcto");
            break;
    }

} while (!salir);

// A. Introducir una nota al principio
function notaA(nota1) {
    notas.unshift(nota1);
    console.table(notas);
}

// B. Introducir una nota al final
function notaB(nota2) {
    notas.push(nota2);
    console.table(notas);
}

// C. Subir todas las notas X puntos
function notaC(puntos) {

    console.table(notas);
}

// // D. Calcular estadísticas actuales
function notaD() {
    let media;
    notas.sort();

    console.log("la minima es " + notas[0]);

    console.log("El maxima es " + notas[notas.length - 1]);

    console.log("la edad media es " + media / notas.length);

    console.table(notas);
    console.table(notas);
}

function notaE() {
    let notas2 = [];
    notas = notas2;
    console.table(notas);
    console.log("la lista esta vacia");
}

function notaF(nota3) {
    let notas2 = [];
    notas = notas2;
    for (let i = 0; i <= nota3; i++) {

        const nota4 = window.prompt("el valor que tendrán todas esas notas");
        notas2.unshift(nota4);
    }
    console.table(notas);

}

// A. Introducir una nota al principio
function notaG(notas) {
    notas.shift();
    console.table(notas);
}

function notaH(notas) {
    notas.splice(notas.length,1);
    console.table(notas);
}

function notaI(notas) {
    notas.fill(0);
    console.table(notas);
}