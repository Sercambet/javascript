let mes=(prompt("Ingrese el numero del mes que desea consultar: "));
let meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

if (mes >= 1 && mes <= 2) {
    console.log("El mes " + meses[mes-1] + " es un mes de invierno, ideal para tomar chocolate caliente y ver películas.");
} else if (mes >= 3 && mes <= 5) {
    console.log("El mes " + meses[mes-1] + " es un mes de primavera, perfecto para salir a caminar y disfrutar de las flores.");
} else if (mes >= 6 && mes <= 8) {
    console.log("El mes " + meses[mes-1] + " es un mes de verano, ideal para ir a la playa y tomar el sol.");
} else if (mes >= 9 && mes <= 10) {
    console.log("El mes " + meses[mes-1] + " es un mes de otoño, perfecto para disfrutar de los colores de las hojas y tomar café.");
} else if (mes == 11 || mes == 12) {
    console.log("El mes " + meses[mes-1] + " es un mes de invierno, ideal para celebrar las fiestas, disfrutar de nieve y compartir con la familia.");
} else {
    console.log("Número de mes inválido. Por favor, ingrese un número entre 1 y 12.");
}


