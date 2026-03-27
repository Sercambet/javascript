
let valorcena=Number(prompt('Cuanto costó la cena?')); //500.0000
let comensales=Number(prompt('Cuantos comensales hubo?'));
let consumomayor=String(prompt('Quien comió más?'));

let cxpersona=valorcena/comensales; //500.000 / 4
console.log(cxpersona) //$125.000

let juanpaga=cxpersona*2 // $125.000 * 2
console.log(consumomayor + 'tiene que pagar' + juanpaga) // $250.000


let comensalessinjuan=Number=comensales-1;
console.log('se divide el resto entre ' + comensalessinjuan + ' personas ')

let valorcuentasinjuan=valorcena-juanpaga
console.log('el saldo a pagar de los demás es' + valorcuentasinjuan)

let valorpagarlos3=valorcuentasinjuan/comensalessinjuan
console.log('el valor a pagar por cabeza es de ' + valorpagarlos3)

let sumadetodos=juanpaga+valorpagarlos3*comensalessinjuan
console.log(consumomayor + ' paga' + juanpaga +' mientras que los demás reunen en total '+  valorpagarlos3 + ' para saldar la cuenta total de ' + sumadetodos )

