// convertidor a edad canina

let edadHumano=(prompt('digita tu edad humana'));
alert ('tu edad perruna es '  + edadHumano*7);

// convetidor pesos a dolares

let COP=(prompt('digita tu valor en PESOS (COP)'));
alert(COP + ' COP equivalen a $'  + (COP/3693).toFixed(2) + 'USD');

let USD=(prompt('digita tu valor en dolares'));
alert(USD + ' USD equivalen a $ ' + (USD*3963).toLocaleString('es-CO') + ' COP ');

// convertidor de grados celcius a farenheit

let celcius=(prompt(' digita tu temperatura celcius '));
let farenheit=(celcius*9/5) + 32;
alert(' tu temperatura en farenheit es ' + (farenheit) + ' F° ');

let farenheit1=(prompt('digita tu temperatura farenheit'));
let celcius1=(farenheit1-32)*5/9;
alert(' tu temperatura en celcius es ' + (celcius1) + ' C° ');

// calculadora de area de un cuadrado

let area1=(prompt('digita el largo en metros de tu lote'));
let area2=(prompt('digita el ancho en metros de tu lote'));
alert('el area de tu lote es ' + (area1*area2) + ' m2 ');

//calculadora de IMC


// convertidor de milimetros a centimetros

let medida=(prompt ('digita tu medida en milímetros') );
console.log('ok tu medida es' + medida)
alert ('confirmo que tu medida en milimetros es: ' + medida +' milímetros')
alert ('entonces tu medida en centimetros es: ' + medida/10 +' centímetros')

