// ejercicio 3

let biblioteca = new Map();
let salir = false;

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
        case 'a':
            const libro = window.prompt("Introduce el ISBN:");
            if (biblioteca.has(libro)) {
                console.log("Ya existe el libro");
            } else {
                const titulo = window.prompt("Introduce el titulo:");
                const autor = window.prompt("Introduce el autor:");
                const ejemplares = window.prompt("Introduce el numero de ejemplares:");

                biblioteca.set(libro, titulo, autor, ejemplares);
                console.log("Libro añadido");
            }
            console.table(biblioteca);
            break;
        case 'b':
            const eliminar = window.prompt("Introduce el ISBN:");
            if (biblioteca.has(eliminar)) {
                biblioteca.delete(eliminar);
            } else {
                console.log("No se encuentra ese libro");
            }
            console.table(biblioteca);
            break;
        case 'c':
            const consultar = window.prompt("Introduce el ISBN:");
            if (biblioteca.has(consultar)) {
                biblioteca.get(consultar);
                console.log("ISBN: " + consultar);
            } else {
                console.log("El libro no existe");
            }
            break;
        case 'd':
            console.log("total: " + biblioteca.size);
            for (let isbn of biblioteca.keys()) {
                let libro = biblioteca.get(isbn);
                console.log("[" + isbn + "] " + libro.titulo + " - " + libro.autor + " (" + libro.ejemplares + " ejemplares)");
            }
            console.table(biblioteca);
            break;
        case 'e':
            const isbnMod = window.prompt("Introduce el ISBN del libro:");
            const nuevaCant = Number(window.prompt("Introduce la nueva cantidad de ejemplares:"));

            break;
        case 'f':
            const autorBuscar = window.prompt("Introduce el nombre del autor:");

            break;
        case 'g':
            const isbnPrestar = window.prompt("Introduce el ISBN del libro a prestar:");

            break;
        case 'h':
            const isbnDevolver = window.prompt("Introduce el ISBN del libro a devolver:");

            break;
        case 'i':

            break;
        case 'j':

            break;
        case 'k':
            salir = true;
            break;
        default:
            console.error("Introduce un valor correcto");
            break;
    }

} while (!salir);
