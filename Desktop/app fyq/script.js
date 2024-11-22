// Datos de los elementos de la tabla periódica (solo las columnas 1, 2, 13, 14, 15, 16, 17, 18)
const elementos = [
    // Columna 1 (Metales alcalinos)
    { nombre: "Hidrógeno", simbolo: "H", numeroAtomico: 1, grupo: 1, periodo: 1, tipo: "no-metales" },
    { nombre: "Litio", simbolo: "Li", numeroAtomico: 3, grupo: 1, periodo: 2, tipo: "metales" },
    { nombre: "Sodio", simbolo: "Na", numeroAtomico: 11, grupo: 1, periodo: 3, tipo: "metales" },
    { nombre: "Potasio", simbolo: "K", numeroAtomico: 19, grupo: 1, periodo: 4, tipo: "metales" },
    { nombre: "Rubidio", simbolo: "Rb", numeroAtomico: 37, grupo: 1, periodo: 5, tipo: "metales" },
    { nombre: "Cesio", simbolo: "Cs", numeroAtomico: 55, grupo: 1, periodo: 6, tipo: "metales" },
    { nombre: "Francio", simbolo: "Fr", numeroAtomico: 87, grupo: 1, periodo: 7, tipo: "metales" },
    
    // Columna 2 (Metales alcalinotérreos)
    { nombre: "Helio", simbolo: "He", numeroAtomico: 2, grupo: 18, periodo: 1, tipo: "gases-nobles" },
    { nombre: "Berilio", simbolo: "Be", numeroAtomico: 4, grupo: 2, periodo: 2, tipo: "metales" },
    { nombre: "Magnesio", simbolo: "Mg", numeroAtomico: 12, grupo: 2, periodo: 3, tipo: "metales" },
    { nombre: "Calcio", simbolo: "Ca", numeroAtomico: 20, grupo: 2, periodo: 4, tipo: "metales" },
    { nombre: "Estroncio", simbolo: "Sr", numeroAtomico: 38, grupo: 2, periodo: 5, tipo: "metales" },
    { nombre: "Bario", simbolo: "Ba", numeroAtomico: 56, grupo: 2, periodo: 6, tipo: "metales" },
    { nombre: "Radio", simbolo: "Ra", numeroAtomico: 88, grupo: 2, periodo: 7, tipo: "metales" },
    
    // Columna 13 (Metales del grupo del boro)
    { nombre: "Boro", simbolo: "B", numeroAtomico: 5, grupo: 13, periodo: 2, tipo: "metales" },
    { nombre: "Aluminio", simbolo: "Al", numeroAtomico: 13, grupo: 13, periodo: 3, tipo: "metales" },
    { nombre: "Galio", simbolo: "Ga", numeroAtomico: 31, grupo: 13, periodo: 4, tipo: "metales" },
    { nombre: "Indio", simbolo: "In", numeroAtomico: 49, grupo: 13, periodo: 5, tipo: "metales" },
    { nombre: "Talio", simbolo: "Tl", numeroAtomico: 81, grupo: 13, periodo: 6, tipo: "metales" },
    { nombre: "Flerovio", simbolo: "Fl", numeroAtomico: 114, grupo: 13, periodo: 7, tipo: "metales" },

    // Columna 14 (Metaloides y no-metales)
    { nombre: "Carbono", simbolo: "C", numeroAtomico: 6, grupo: 14, periodo: 2, tipo: "no-metales" },
    { nombre: "Silicio", simbolo: "Si", numeroAtomico: 14, grupo: 14, periodo: 3, tipo: "no-metales" },
    { nombre: "Germanio", simbolo: "Ge", numeroAtomico: 32, grupo: 14, periodo: 4, tipo: "no-metales" },
    { nombre: "Estaño", simbolo: "Sn", numeroAtomico: 50, grupo: 14, periodo: 5, tipo: "metales" },
    { nombre: "Plomo", simbolo: "Pb", numeroAtomico: 82, grupo: 14, periodo: 6, tipo: "metales" },
    { nombre: "Oganesón", simbolo: "Og", numeroAtomico: 118, grupo: 14, periodo: 7, tipo: "metales" },

    // Columna 15 (Nitrogenoides)
    { nombre: "Nitrógeno", simbolo: "N", numeroAtomico: 7, grupo: 15, periodo: 2, tipo: "no-metales" },
    { nombre: "Fósforo", simbolo: "P", numeroAtomico: 15, grupo: 15, periodo: 3, tipo: "no-metales" },
    { nombre: "Arsénico", simbolo: "As", numeroAtomico: 33, grupo: 15, periodo: 4, tipo: "no-metales" },
    { nombre: "Antimonio", simbolo: "Sb", numeroAtomico: 51, grupo: 15, periodo: 5, tipo: "no-metales" },
    { nombre: "Bismuto", simbolo: "Bi", numeroAtomico: 83, grupo: 15, periodo: 6, tipo: "metales" },

    // Columna 16 (Anfígenos)
    { nombre: "Oxígeno", simbolo: "O", numeroAtomico: 8, grupo: 16, periodo: 2, tipo: "no-metales" },
    { nombre: "Azufre", simbolo: "S", numeroAtomico: 16, grupo: 16, periodo: 3, tipo: "no-metales" },
    { nombre: "Selenio", simbolo: "Se", numeroAtomico: 34, grupo: 16, periodo: 4, tipo: "no-metales" },
    { nombre: "Telurio", simbolo: "Te", numeroAtomico: 52, grupo: 16, periodo: 5, tipo: "no-metales" },
    { nombre: "Polonio", simbolo: "Po", numeroAtomico: 84, grupo: 16, periodo: 6, tipo: "no-metales" },

    // Columna 17 (Halógenos)
    { nombre: "Flúor", simbolo: "F", numeroAtomico: 9, grupo: 17, periodo: 2, tipo: "no-metales" },
    { nombre: "Cloro", simbolo: "Cl", numeroAtomico: 17, grupo: 17, periodo: 3, tipo: "no-metales" },
    { nombre: "Bromo", simbolo: "Br", numeroAtomico: 35, grupo: 17, periodo: 4, tipo: "no-metales" },
    { nombre: "Yodo", simbolo: "I", numeroAtomico: 53, grupo: 17, periodo: 5, tipo: "no-metales" },
    { nombre: "Astato", simbolo: "At", numeroAtomico: 85, grupo: 17, periodo: 6, tipo: "no-metales" },

    // Columna 18 (Gases nobles)
    { nombre: "Neón", simbolo: "Ne", numeroAtomico: 10, grupo: 18, periodo: 2, tipo: "gases-nobles" },
    { nombre: "Argón", simbolo: "Ar", numeroAtomico: 18, grupo: 18, periodo: 3, tipo: "gases-nobles" },
    { nombre: "Kriptón", simbolo: "Kr", numeroAtomico: 36, grupo: 18, periodo: 4, tipo: "gases-nobles" },
    { nombre: "Xenón", simbolo: "Xe", numeroAtomico: 54, grupo: 18, periodo: 5, tipo: "gases-nobles" },
    { nombre: "Radón", simbolo: "Rn", numeroAtomico: 86, grupo: 18, periodo: 6, tipo: "gases-nobles" },
    { nombre: "Oganesón", simbolo: "Og", numeroAtomico: 118, grupo: 18, periodo: 7, tipo: "gases-nobles" }
];

// Función para crear la tabla
function crearTabla() {
    const contenedor = document.getElementById("tabla-periodica");
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar los elementos

    // Crear las casillas de los elementos
    elementos.forEach(elemento => {
        const divElemento = document.createElement("div");
        divElemento.classList.add("elemento", elemento.tipo);
        divElemento.innerHTML = `
            <span>${elemento.simbolo}</span><br>
            <span class="numero">${elemento.numeroAtomico}</span>
        `;
        divElemento.addEventListener("click", () => resaltarElemento(divElemento));

        // Posicionamos el elemento en la tabla
        const row = elemento.periodo - 1;
        const col = elemento.grupo - 1;
        divElemento.style.gridRow = row + 1;
        divElemento.style.gridColumn = col + 1;
        contenedor.appendChild(divElemento);
    });

    // Rellenamos los huecos de los metales de transición
    for (let row = 0; row < 7; row++) {
        for (let col = 2; col < 12; col++) {
            const bloqueVacío = document.createElement("div");
            bloqueVacío.classList.add("bloque-vacio");
            contenedor.appendChild(bloqueVacío);
        }
    }

    contenedor.style.gridTemplateColumns = "repeat(18, 1fr)";
}

// Función para resaltar un elemento
function resaltarElemento(elemento) {
    // Eliminar el resalto de todos los elementos
    const todosElementos = document.querySelectorAll(".elemento");
    todosElementos.forEach(el => el.classList.remove("resaltado"));

    // Resaltar el elemento clicado
    elemento.classList.add("resaltado");
}

// Llamar a la función para crear la tabla
crearTabla();
