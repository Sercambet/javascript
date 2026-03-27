
let valorcena=Number(prompt('Cuanto costó la cena?')); //500.0000
let comensales=Number(prompt('Cuantos comensales hubo?'));
let consumomayor=String(prompt('Quien comió más?'));
let consumomenor=String(prompt('Quien comió menos?'))

let cxpersona=valorcena/comensales; 
console.log(cxpersona) 

let juanpaga=cxpersona*2 
console.log(consumomayor + 'tiene que pagar' + juanpaga) 

let valorpedro=cxpersona/2
console.log(consumomenor + 'solo tiene que pagar' + valorpedro + 'porque comió poquito')

let comensalessinjuan=Number=comensales-2;
console.log('se divide el resto entre ' + comensalessinjuan + ' personas ')

let valorcuentasinjuan=valorcena-juanpaga-valorpedro
console.log('el saldo a pagar de los demás es' + valorcuentasinjuan)

let valorpagarlos3=valorcuentasinjuan/comensalessinjuan
console.log('el valor a pagar por cabeza de los restantes es' + valorpagarlos3)

let sumadetodos=juanpaga+valorpagarlos3*comensalessinjuan
console.log(consumomayor + ' paga ' + juanpaga + ' por tragón ' + consumomenor + ' que consumió poquito solo paga ' + valorpedro +' los demás deben pagar ' + valorcuentasinjuan + ' esto consolidando la cuenta total de ' + (valorpedro+valorcuentasinjuan+juanpaga)  )

