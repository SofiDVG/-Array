
const alumnos = ["Kaz", "Zelda", "Rory nite", "michael", "Osip"];

function listarAlumnos() {
    let reporte = "Lista de alumnos:\n";
    let indice = 0;

    for (const alumno of alumnos) {
        const linea = indice + ". " + alumno;
        console.log(linea);
        reporte += linea + "\n";
        indice++;
    }

    alert(reporte);
}

function calcularPromedio(nombre) {
    const cantidad = parseInt(prompt("¿Cuántas notas tiene " + nombre + "?"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad no válida");
        return;
    }

    let suma = 0;
    for (let i = 0; i < cantidad; i++) {
        const nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + " de " + nombre + ":"));
        if (isNaN(nota)) {
            alert("Nota no válida");
            return;
        }
        suma += nota;
    }

    const promedio = suma / cantidad;
    console.log("Promedio de " + nombre + ": " + promedio);

    if (promedio >= 7) {
        alert(nombre + " está APROBADO con un promedio de " + promedio.toFixed(2));
    } else {
        alert(nombre + " está DESAPROBADO con un promedio de " + promedio.toFixed(2));
    }
}

// 2. Manipulación dinámica de extremos
function agregarAlumno() {
    const nombre = prompt("Nombre del alumno a agregar:");
    if (!nombre) {
        alert("Nombre no válido");
        return;
    }

    const alFinal = confirm("¿Agregar al FINAL de la lista? (Cancelar = agregar al PRINCIPIO)");
    if (alFinal) {
        alumnos.push(nombre);    
    } else {
        alumnos.unshift(nombre);   
    }
    console.log("Se agregó a " + nombre);
    listarAlumnos();
}

function quitarUltimoAlumno() {
    if (alumnos.length === 0) {
        alert("La lista está vacía");
        return;
    }
    const eliminado = alumnos.pop();
    const mensaje = "Se ha eliminado el elemento: " + eliminado;
    console.log(mensaje);
    alert(mensaje);
}


function buscarAlumno() {
    const buscado = prompt("Nombre del alumno a buscar:");
    if (!buscado) {
        alert("Nombre no válido");
        return;
    }

    if (alumnos.includes(buscado)) {
        const posicion = alumnos.indexOf(buscado);
        alert(buscado + " está en la posición (índice) " + posicion);
    } else {
        alert(buscado + " no está en la lista");
    }
}

function corregirNombre() {
    listarAlumnos();
    const indice = parseInt(prompt("Índice del alumno a corregir (0 a " + (alumnos.length - 1) + "):"));

    if (isNaN(indice) || indice < 0 || indice >= alumnos.length) {
        alert("Índice no válido");
        return;
    }

    const nuevoNombre = prompt("Nuevo nombre:");
    if (!nuevoNombre) {
        alert("Nombre no válido");
        return;
    }

    const anterior = alumnos[indice];
    alumnos.splice(indice, 1, nuevoNombre);  
    console.log(anterior + " fue reemplazado por " + nuevoNombre);
    listarAlumnos();
}

function iniciarSimulador() {
    let opcion = "";

    while (opcion !== "0") {
        const respuesta = prompt(
            "Elegí una opción:\n" +
            "1 - Ver alumnos\n" +
            "2 - Agregar alumno\n" +
            "3 - Quitar el último alumno\n" +
            "4 - Buscar alumno\n" +
            "5 - Corregir nombre (índice)\n" +
            "6 - Calcular promedio de un alumno\n" +
            "0 - Salir"
        );

        opcion = respuesta === null ? "0" : respuesta.trim();

        switch (opcion) {
            case "1":
                listarAlumnos();
                break;
            case "2":
                agregarAlumno();
                break;
            case "3":
                quitarUltimoAlumno();
                break;
            case "4":
                buscarAlumno();
                break;
            case "5":
                corregirNombre();
                break;
            case "6": {
                const nombre = prompt("¿De qué alumno querés calcular el promedio?");
                if (nombre) {
                    calcularPromedio(nombre);
                }
                break;
            }
            case "0":
                console.log("Programa terminado");
                alert("Programa terminado");
                break;
            default:
                alert("Opción no válida");
                break;
        }
    }
}

iniciarSimulador();
