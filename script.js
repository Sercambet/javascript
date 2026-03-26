// convertidor a edad canina

let edadHumano=(prompt('digita tu edad humana'));
alert ('tu edad perruna es '  + edadHumano*7);

// convetidor pesos a dolares

let COP=(prompt('digita tu valor en PESOS (COP)'));
alert(COP + ' COP equivalen a $'  + (COP/3693).toFixed(2) + 'USD');

let USD=(prompt('digita tu valor en dolares'));
alert(USD + 'USD equivalen a $' + (USD*3963).toLocaleString('es-CO') + ' COP ');

// 

//calculadora de IMC


// convertidor de milimetros a centimetros

let medida=(prompt ('digita tu medida en milímetros') );
console.log('ok tu medida es' + medida)
alert ('confirmo que tu medida en milimetros es: ' + medida +' milímetros')
alert ('entonces tu medida en centimetros es: ' + medida/10 +' centímetros')

