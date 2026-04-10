let data = [2024, 2026, 3000, 2100 ];
let year = 0;
((year % 4 ===0 && year % 100 !=0) || year % 400 === 0)

console.log("Los años bisiestos son: ");

for (let i = 0; i < data.length; i++) {
    if (((data[i] % 4 === 0 && data[i] % 100 !=0)) || data[i] % 400 ===0) {
        console.log(data[i] + " es un año bisiesto");
    } else {
        console.log(data[i] + " no es un año bisiesto");
    }
}