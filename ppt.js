

let numeros = [1,2,3,4,5,6,7,8,9,10];
let pares = [];
let impares = [];    

for (let i =1; i <= 10; i++){
    if (i % 2 === 0) {
        console.log(i + "es par");
        pares.push(i);
    } else {
        console.log(i + "es impar");
        impares.push(i);
    }
}


console.log("Los numeros pares son: " + pares);
console.log("Los numeros impares son: " + impares);