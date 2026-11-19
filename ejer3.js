// ejercicio 3

let salir = false;

class Libro {
    constructor(titulo, autor, ejemplares) {
        this.titulo = titulo;
        this.autor = autor;
        this.ejemplares = ejemplares;
    }
}

let Libro1 = new Libro("El medico", "Noah gordon", 120);
let Libro2 = new Libro("El chaman", "jose", 50);
let Libro3 = new Libro("El doctora cole", "raul", 6);

let biblioteca = new Map();
biblioteca.set("1", Libro1);
biblioteca.set("2", Libro2);
biblioteca.set("3", Libro3);

biblioteca.get("1").ejemplares = 8;


console.log(biblioteca.get("6"));

do {
    let opc = window.prompt("Elige una operación (Biblioteca): \n" +
        "a. Añadir un libro \n" +
        "b. Eliminar un libro \n" +
        "c. Consultar un libro \n" +
        "d. Mostrar catálogo \n" +
        "e. Modificar ejemplares \n" +
        "f. Buscar libros de un autor \n" +
        "g. Prestar un libro \n" +
        "h. Devolver un libro \n" +
        "i. Mostrar estadísticas \n" +
        "j. Vaciar catálogo \n" +
        "k. Salir");

    switch (opc) {
        // A. Añadir un libro
        case 'a':
            const isbn1 = window.prompt("Introduce el ISBN:");
            if (biblioteca.has(isbn1)) {
                console.log("Ya existe el isbn");
            } else {
                const titulo = window.prompt("Introduce el titulo:");
                const autor = window.prompt("Introduce el autor:");
                const ejemplares = parseInt(window.prompt("Introduce el numero de ejemplares:"));

                let Libro4 = new Libro(titulo, autor, ejemplares);
                biblioteca.set(isbn1, Libro4);
            }
            console.table(biblioteca);
            break;
        // B. Eliminar un libro
        case 'b':
            const isbn2 = window.prompt("Introduce el ISBN:");
            if (biblioteca.has(isbn2)) {
                biblioteca.delete(isbn2);
            } else {
                console.log("No se encuentra ese isbn");
            }
            console.table(biblioteca);
            break;
        // C. Consultar un libro
        case 'c':
            const isbn3 = window.prompt("Introduce el isbn:");
            if (biblioteca.has(isbn3)) {
                biblioteca.get(isbn3);
                console.log("isbn: " + isbn3 + " Titulo: " + biblioteca.get(isbn3).titulo +
                    " Autor: " + biblioteca.get(isbn3).autor + " Ejemplares: " +
                    biblioteca.get(isbn3).ejemplares);
            } else {
                console.log("El isbn no existe");
            }
            break;
        // D. Mostrar catálogo
        case 'd':
            console.log("total: " + biblioteca.size);
            for (let isbn of biblioteca.keys()) {
                console.log("isbn: " + isbn + " Titulo: " + biblioteca.get(isbn).titulo +
                    " Autor: " + biblioteca.get(isbn).autor + " Ejemplares: " +
                    biblioteca.get(isbn).ejemplares);
            }
            console.table(biblioteca);
            break;
        // E. Modificar ejemplares
        case 'e':
            const isbn4 = window.prompt("Introduce el isbn:");
            const cantidad = window.prompt("cantidad:");

            if (biblioteca.has(isbn4)) {
                biblioteca.get(isbn4).ejemplares = cantidad;
            } else {
                console.log("El isbn no existe.");
            }
            console.table(biblioteca);
            break;
        // F. Buscar libros de un autor
        case 'f':
            const autor1 = window.prompt("Introduce el autor:");
            if (biblioteca.has(autor1)) {
                console.log("isbn: " + isbn + " Titulo: " + biblioteca.get(isbn).titulo +
                    " Autor: " + biblioteca.get(isbn).autor + " Ejemplares: " +
                    biblioteca.get(isbn).ejemplares);
            } else {
                console.log("El autor no existe.");
            }
            break;
        // G. Prestar un libro
        case 'g':
            const isbn5 = window.prompt("Introduce el isbn:");
            if (biblioteca.has(isbn5)) {
                if (biblioteca.get(isbn5).ejemplares > 0) {
                    biblioteca.get(isbn5).ejemplares - 1;
                } else {
                    console.log("No quedan ejemplares");
                }
            } else {
                console.log("El isbn no existe.");
            }
            console.table(biblioteca);
            break;
        // H. Devolver un libro
        case 'h':
            const isbn6 = window.prompt("Introduce el isbn:");
            if (biblioteca.has(isbn6)) {
                biblioteca.get(isbn6).ejemplares + 1;
            } else {
                console.log("El isbn no existe.");
            }
            console.table(biblioteca);
            break;
        // I. Mostrar estadísticas
        case 'i':
            console.log("total: " + biblioteca.size);
            break;
        // J. Vaciar catálogo: Eliminar todos los libros del mapa.
        case 'j':
            biblioteca.clear();
            console.table(biblioteca);
            break;
        // K. Salir: Finalizar el programa
        case 'k':
            salir = true;
            break;
        default:
            console.error("Introduce un valor correcto");
            break;
    }

} while (!salir);
