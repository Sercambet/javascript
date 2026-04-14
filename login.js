const paises = [
    { nombre: "Argentina", imagen: "https://flagcdn.com/w320/ar.png" },
    { nombre: "Brasil", imagen: "https://flagcdn.com/w320/br.png" },
    { nombre: "México", imagen: "https://flagcdn.com/w320/mx.png" },
    { nombre: "Colombia", imagen: "https://flagcdn.com/w320/co.png" },
    { nombre: "Chile", imagen: "https://flagcdn.com/w320/cl.png" },
    { nombre: "Perú", imagen: "https://flagcdn.com/w320/pe.png" },
    { nombre: "Venezuela", imagen: "https://flagcdn.com/w320/ve.png" },
    { nombre: "Ecuador", imagen: "https://flagcdn.com/w320/ec.png" },
    { nombre: "Bolivia", imagen: "https://flagcdn.com/w320/bo.png" },
    { nombre: "Uruguay", imagen: "https://flagcdn.com/w320/uy.png" },
    { nombre: "Paraguay", imagen: "https://flagcdn.com/w320/py.png" },
    { nombre: "España", imagen: "https://flagcdn.com/w320/es.png" },
    { nombre: "Francia", imagen: "https://flagcdn.com/w320/fr.png" },
    { nombre: "Alemania", imagen: "https://flagcdn.com/w320/de.png" },
    { nombre: "Italia", imagen: "https://flagcdn.com/w320/it.png" },
    { nombre: "Portugal", imagen: "https://flagcdn.com/w320/pt.png" },
    { nombre: "Japón", imagen: "https://flagcdn.com/w320/jp.png" },
    { nombre: "China", imagen: "https://flagcdn.com/w320/cn.png" },
    { nombre: "Estados Unidos", imagen: "https://flagcdn.com/w320/us.png" },
    { nombre: "Canadá", imagen: "https://flagcdn.com/w320/ca.png" },
];


let title = document.querySelector('h1');
title.textContent = 'Paises del mundo';
let container = document.querySelector('section');
console.log(paises);

paises.forEach(pais => {
    let card = document.createElement('div');
    card.classList.add('card');
    let img = document.createElement('img');
    img.src = pais.imagen;
    img.alt = pais.nombre;
    let name = document.createElement('h2');
    name.textContent = pais.nombre;
    card.appendChild(img);
    card.appendChild(name);
    container.appendChild(card);
});







let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", () => {
    alert("¡Bienvenido al juego de Piedra, Papel o Tijera!");
    const opciones = ["piedra", "papel", "tijera"];
    function jugar() {
        const jugador = prompt("Elige: piedra, papel o tijera").toLowerCase().trim();

        if (!opciones.includes(jugador)) {
            alert("Opción inválida. Intenta de nuevo.");
            return jugar();
        }

        const computadora = opciones[Math.floor(Math.random() * 3)];

        let resultado;
        if (jugador === computadora) {
            resultado = "Empate";
        } else if (
            (jugador === "piedra" && computadora === "tijera") ||
            (jugador === "papel" && computadora === "piedra") ||
            (jugador === "tijera" && computadora === "papel")
        ) {
            resultado = "Ganaste";
        } else {
            resultado = "Perdiste";
        }

        alert(`Tu: ${jugador}\nComputadora: ${computadora}\n\n${resultado}!`);

        const repetir = confirm("¿Jugar de nuevo?");
        if (repetir) jugar();
    }
    jugar();
});

btn2.addEventListener("click", () => {
    let mes = (prompt("Ingrese el numero del mes que desea consultar: "));
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    if (mes >= 1 && mes <= 2) {
        console.log("El mes " + meses[mes - 1] + " es un mes de invierno, ideal para tomar chocolate caliente y ver películas.");
    } else if (mes >= 3 && mes <= 5) {
        console.log("El mes " + meses[mes - 1] + " es un mes de primavera, perfecto para salir a caminar y disfrutar de las flores.");
    } else if (mes >= 6 && mes <= 8) {
        console.log("El mes " + meses[mes - 1] + " es un mes de verano, ideal para ir a la playa y tomar el sol.");
    } else if (mes >= 9 && mes <= 10) {
        console.log("El mes " + meses[mes - 1] + " es un mes de otoño, perfecto para disfrutar de los colores de las hojas y tomar café.");
    } else if (mes == 11 || mes == 12) {
        console.log("El mes " + meses[mes - 1] + " es un mes de invierno, ideal para celebrar las fiestas, disfrutar de nieve y compartir con la familia.");
    } else {
        console.log("Número de mes inválido. Por favor, ingrese un número entre 1 y 12.");
    }
    alert("Revisa la consola para ver la descripción del mes que ingresaste.");
}
);


btn3.addEventListener("click", () => {
    const items = [
        { id: 1, nombre: "Manzana", categoria: "Frutas", precio: 1500 },
        { id: 2, nombre: "Bolsa Leche", categoria: "Lácteos", precio: 3800 },
        { id: 3, nombre: "Pan rollito", categoria: "Panadería", precio: 500 },
        { id: 4, nombre: "Cubeta Huevos", categoria: "Desayunos", precio: 16000 },
        { id: 5, nombre: "Libra de Arroz", categoria: "Granos", precio: 6000 },
    ];


    for (let i = 0; i < items.length; i++) {
        console.log("El item " + items[i].nombre + " pertenece a la sección de " + items[i].categoria + " y tiene un precio de " + items[i].precio + " COP ");
        if (items[i].precio > 5000) {
            console.log("El item " + items[i].nombre + " no se puede fiar por su precio ");
        }
    } alert("Revisa la consola para ver los items disponibles en el supermercado y sus precios. Recuerda que los items con precio mayor a 5000 COP no se pueden fiar.");
});


