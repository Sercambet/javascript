
const carros = [
  { icono: "🚗", nombre: "Renault Logan", velocidadMax: 165, terreno: "Huecos de Bogotá", Todoterreno: false, },
  { icono: "🚙", nombre: "Toyota Fortuner", velocidadMax: 180, terreno: "Lodo, ríos, apocalipsis", Todoterreno: true,},
  { icono: "🏎️", nombre: "Ferrari Roma", velocidadMax: 320, terreno: "Solo autopistas con guardia de seguridad", Todoterreno: false, },
  { icono: "🚕", nombre: "Hyundai H1", velocidadMax: 140, terreno: "Donde haya pasajeros", Todoterreno: false, },
  { icono: "🚌", nombre: "Jeep Wrangler", velocidadMax: 170, terreno: "Montañas, ríos, stories de Instagram", Todoterreno: true, },
];

for (let i = 0; i < carros.length; i++) {
    console.log("El carro " + carros[i].nombre + " tiene una velocidad máxima de " + carros[i].velocidadMax + " km/h, es ideal para " + carros[i].terreno + " y su icono es " + carros[i].icono);
    if (carros[i].Todoterreno) {
        console.log("El carro " + carros[i].nombre + " es un todoterreno, perfecto para aventuras extremas.");
    } else {
        console.log("El carro " + carros[i].nombre + " no es un todoterreno, mejor para la ciudad.");
    }
}