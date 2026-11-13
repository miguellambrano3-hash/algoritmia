// 1. ESTRUCTURA SECUENCIAL
// Los pasos se ejecutan de forma estricta, uno después de otro.
function calcularCargaHoraria() {
    // Entrada
    let hPresenciales = parseInt(document.getElementById('horasPresenciales').value) || 0;
    let hAutonomas = parseInt(document.getElementById('horasAutonomas').value) || 0;
    let semanas = parseInt(document.getElementById('semanas').value) || 0;

    // Proceso
    let horasSemanales = hPresenciales + hAutonomas;
    let totalSemestre = horasSemanales * semanas;

    // Salida
    let contenedorResultado = document.getElementById('resultadoCarga');
    contenedorResultado.textContent = `La asignatura requiere un total de ${totalSemestre} horas en el periodo.`;
    
    // Modificación visual
    contenedorResultado.style.backgroundColor = "var(--success-bg)";
    contenedorResultado.style.color = "var(--success-text)";
    contenedorResultado.classList.remove('hidden');
}

// 2. ESTRUCTURA CONDICIONAL
// Permite bifurcar el flujo de los datos dependiendo de múltiples condiciones lógicas.
function determinarDesempeno() {
    // Entrada
    let puntaje = parseFloat(document.getElementById('puntaje').value);
    let contenedorResultado = document.getElementById('resultadoDesempeno');

    // Validación inicial
    if (isNaN(puntaje) || puntaje < 0 || puntaje > 100) {
        alert("Por favor ingrese un puntaje válido entre 0 y 100.");
        return;
    }

    // Proceso mediante condicionales en cadena (if / else if / else)
    let nivel = "";
    if (puntaje >= 90) {
        nivel = "SUPERIOR (Supera ampliamente los objetivos)";
        contenedorResultado.style.backgroundColor = "var(--success-bg)";
        contenedorResultado.style.color = "var(--success-text)";
    } else if (puntaje >= 80) {
        nivel = "ALTO (Cumple los objetivos con buen nivel)";
        contenedorResultado.style.backgroundColor = "#e0f2fe"; // Azul claro
        contenedorResultado.style.color = "#0369a1";
    } else if (puntaje >= 60) {
        nivel = "BÁSICO (Cumple los objetivos mínimos)";
        contenedorResultado.style.backgroundColor = "var(--warning-bg)";
        contenedorResultado.style.color = "var(--warning-text)";
    } else {
        nivel = "BAJO (No alcanza los logros previstos)";
        contenedorResultado.style.backgroundColor = "#fee2e2"; // Rojo claro
        contenedorResultado.style.color = "#b91c1c";
    }

    // Salida
    contenedorResultado.textContent = `Desempeño: ${nivel}`;
    contenedorResultado.classList.remove('hidden');
}

// 3. ESTRUCTURA ITERATIVA
// Ejecuta un bloque de instrucciones repetidamente mientras la condición sea verdadera.
function generarRubrica() {
    // Entrada
    let numCriterios = parseInt(document.getElementById('numCriterios').value) || 0;
    let tabla = document.getElementById('tablaRubrica');
    let cuerpoTabla = document.getElementById('cuerpoRubrica');
    
    // Límite para evitar errores de renderizado
    if (numCriterios > 10) numCriterios = 10;

    // Proceso: Limpiar tabla anterior
    cuerpoTabla.innerHTML = "";
    
    // Variable de control para el ciclo While
    let contador = 1;

    // Ciclo While: Se repite MIENTRAS el contador sea menor o igual al número deseado
    while (contador <= numCriterios) {
        // Crear elementos HTML dinámicamente
        let fila = document.createElement('tr');
        
        let celdaNumero = document.createElement('td');
        celdaNumero.textContent = contador;
        
        let celdaCriterio = document.createElement('td');
        celdaCriterio.textContent = `Descripción del criterio #${contador}...`;
        
        let celdaPuntaje = document.createElement('td');
        celdaPuntaje.textContent = `___ / 10`;

        // Ensamblar la fila
        fila.appendChild(celdaNumero);
        fila.appendChild(celdaCriterio);
        fila.appendChild(celdaPuntaje);
        
        // Agregar la fila a la tabla
        cuerpoTabla.appendChild(fila);
        
        // ¡Importante! Incrementar el contador para evitar ciclos infinitos
        contador++;
    }

    // Salida: Hacer visible la tabla
    if (numCriterios > 0) {
        tabla.classList.remove('hidden');
    } else {
        tabla.classList.add('hidden');
    }
}