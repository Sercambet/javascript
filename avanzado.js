const nombres = [
    { nombres: "Juan", apellido: "Pérez", edad: 30 , altura: 1.75 , peso: 70},
    { nombres: "María", apellido: "González", edad: 25 , altura: 1.65 , peso: 60},
    { nombres: "Pedro", apellido: "Rodríguez", edad: 35 , altura: 1.80 , peso: 80}
];

console.log("Los nombres son:");
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i].nombres);
}

