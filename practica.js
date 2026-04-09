// contar cuantas caracteres tiene cada marca

const marcas = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan" , "BMW", "Mercedes-Benz", "Volkswagen", "Audi", "Hyundai"];

for (let i = 0; i < marcas.length; i++) {
    console.log(marcas[i]);
    console.log("La marca " + marcas[i] + " tiene " + marcas[i].length + " caracteres.");
}

//mostrar las marcas en lista de abajo hacia arriba en un console.log

for (let i = marcas.length - 1; i >= 0; i--) {
    console.log(marcas[i]);
}

// mostrar la palabra mas corta y mas larga

let marcamascorta=marcas[0];
let marcamaslarga=marcas[0];

for (let i = 1; i < marcas.length; i++) {
    if (marcas[i].length < marcamascorta.length) {
        marcamascorta = marcas[i];
    }
    if (marcas[i].length > marcamaslarga.length) {
        marcamaslarga = marcas[i];
    }
}

console.log("La marca mas corta es: " + marcamascorta);
console.log("La marca mas larga es: " + marcamaslarga);