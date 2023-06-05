function agregarLegajo() {
    let legajoCompleto = prompt("Ingresar Legajo:");
    return (legajoCompleto)
}
function agregarEvaluacion() {
    let evaluacion = parseInt(prompt("Ingresar Evaluacion del Empleado:"));
    return (evaluacion)
}
function calcular(dividendo, divisor) {
    return dividendo / divisor;
}
alert("calcula el promedio de evaluacion anual del empleado");
alert("Ingresar legajo y evaluacion del empleado");
alert("Para termirar escriba Evaluacion completa");
let legajoCompleto = agregarLegajo();
let i = 0;
let evaluaciones = 0;
let evaluacion = 0;
while (legajoCompleto != "Evaluacion completa") {
    evaluacion = agregarEvaluacion()
    if (evaluacion > 11 || evaluacion < 1) {
        alert("evaluacion fuera del rango permitido 1..11")
    }
    else {
        evaluaciones = evaluaciones + evaluacion;
        legajoCompleto = agregarLegajo();
        i + -1;
    }
}
alert("La evaluacion anual es: " + calcular(evaluaciones, i))

