const items = [
  { id: 1, nombre: "Manzana", categoria: "Frutas", precio: 1500},
  { id: 2, nombre: "Bolsa Leche", categoria: "Lácteos", precio: 3800 },
  { id: 3, nombre: "Pan rollito", categoria: "Panadería", precio: 500 },
  { id: 4, nombre: "Cubeta Huevos", categoria: "Desayunos", precio: 16000 },
  { id: 5, nombre: "Libra de Arroz", categoria: "Granos", precio: 6000 },
];


for (let i = 0; i < items.length; i++) {
    console.log("El item " + items[i].nombre + " pertenece a la sección de " + items[i].categoria +" y tiene un precio de " + items[i].precio + " COP ");
    if (items[i].precio > 5000) {
        console.log("El item " + items[i].nombre + " no se puede fiar por su precio ");
    }
}   
