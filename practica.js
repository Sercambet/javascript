// 1. Contar cuantas caracteres tiene cada marca:


//aqui definí una constante con las marcas de carros que vamos a contar en el ejericicio
const marcas = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan" , "BMW", "Mercedes-Benz", "Volkswagen", "Audi", "Hyundai"]; 

//aqui procedí a abrir un bucle con el contador + condicion + el incremento para recorrer el array
for (let i = 0; i < marcas.length; i++) {
 //procedo a imprimir las marcas utilizando [i] para acceder a cada elemento del array + marcas[i].length para contar los caracteres.

    console.log("La marca " + marcas[i] + " tiene " + marcas[i].length + " caracteres."); 
}

//mostrar las marcas en lista de abajo hacia arriba en un console.log


//vuelvo a abrir un bucle con el contador que lo defino como marcas.lenght-1 para que cuente desde el ultimo elemento del array
//la condicion es que el contador sea mayor o igual a 0 para que se quede dentro del array
//por ultimo, el incremento es negativo para que vaya hacia atras en el array

for (let i = marcas.length - 1; i >= 0; i--) {
    //aqui imprimo  las marcas utilizando [i] para acceder a cada elemento del array
    console.log(marcas[i]);
}

// mostrar la palabra mas corta y mas larga

//aqui defino una variable para setear la marca mas corta, pongo [0] para que tome la primera marca del array como referencia
let marcamascorta=marcas[0];
//aqui defino otra variable para configurar la marca mas larga
let marcamaslarga=marcas[0];

//procedo a abrir el bucle, condicionando el contador = 1 para que cuente 
//procedo a definir la condicion donde i es < menor que marcas.lenght
//por ultimo seteo el incremento estandar
for (let i = 1; i < marcas.length; i++) {
    //entonces, procede  a contar los caractéres de cada marca utilizando marcas[i].lenght<marcamascorta.length para definir cual es la marca mas corta
    if (marcas[i].length < marcamascorta.length) {
        //y aqui explica que la marca mas corta = a marcas [i] citando la variable de arriba
        marcamascorta = marcas[i];
    }

    //luego, hago lo mismo, pero con la mas larga, donde agarro la condidicion ">" para definir cual es la mas larga
    if (marcas[i].length > marcamaslarga.length) {
        //y luego procedo a setear el resultado anidandolo con la variable "marcamaslarga"
        marcamaslarga = marcas[i];
    }
}

//aqui imprimo todo
console.log("La marca con la palabra mas corta es: " + marcamascorta);
console.log("La marca con la palabra mas larga es: " + marcamaslarga);

