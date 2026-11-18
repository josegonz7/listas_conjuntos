// ejercicio 2

let participantes = new Set();
let salir = false;

do {
    let opc = window.prompt("Elige una operación: \n" +
        "a. Inscribir un participante \n" +
        "b. Dar de baja un participante \n" +
        "c. Comprobar inscripción \n" +
        "d. Mostrar participantes \n" +
        "e. Vaciar inscripciones \n" +
        "f. Salir");

    switch (opc) {
        // A. Inscribir un participante
        case 'a':
            const nombre = window.prompt("nombre de un participante:");
            if (participantes.has(nombre)) {
                console.log("ya está inscrito, introduce otro");
            } else {
                participantes.add(nombre);
                console.log(nombre + " inscrito");
            }
            console.table(participantes);
            break;
        // B. Dar de baja un participante
        case 'b':
            const baja = window.prompt("nombre:");
            if (participantes.has(nombre)) {
                participantes.delete(nombre);
            } else {
                console.log("no se encuentra inscrito");
            }
            console.table(participantes);
            break;
        // C. Comprobar inscripción
        case 'c':
            const nombre2 = window.prompt("nombre:");
            if (participantes.has(nombre)) {
                console.log("si esta inscrito");
            } else {
                console.log(" no esta inscrito");
            }
            break;
        // D. Mostrar participantes
        case 'd':
            console.log("total: " + participantes.size);
            for (let persona of participantes) {
                console.log(persona);
            }
            break;
        // E. Vaciar inscripciones: Eliminar todos los participantes del conjunto.
        case 'e':
            participantes.clear();
            console.table(participantes);
            break;
        case 'f':
            salir = true;
            break;
        default:
            console.error("Introduce un valor correcto");
            break;
    }

} while (!salir);