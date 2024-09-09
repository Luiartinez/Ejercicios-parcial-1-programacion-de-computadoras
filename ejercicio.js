//Luis Alexander Hernandez Martinez//

console.log("Programa para calcular el presupuesto familiar");

let gastos = [
    { vivienda: 800 },
    { alimentos: 300 },
    { transporte: 150 },
    { entretenimiento: 100 }
];

let ingresoMensual = 1800;

let totalGastos = (
    gastos[0].vivienda +
    gastos[1].alimentos +
    gastos[2].transporte +
    gastos[3].entretenimiento
);

console.log("El total de gastos es: " + totalGastos);

if (totalGastos < ingresoMensual) {
    let ahorro = ingresoMensual - totalGastos;
    console.log("El presupuesto está equilibrado y tienes un ahorro de: $" + ahorro);
} else if (totalGastos === ingresoMensual) {
    console.log("El presupuesto está equilibrado y no tienes ahorros.");
} else {
    let falta = totalGastos - ingresoMensual;
    console.log("El presupuesto está excedido. Te faltan $" + falta + " para cubrir los gastos.");
}