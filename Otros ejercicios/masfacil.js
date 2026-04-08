let dinero=Number(prompt('Cuanto dinero quiere invertir en CDT'))
let meses=Number(prompt('Cuantos meses desea ahorrarlo'))
let tasaanual=0.1
let tasamensual=(meses/tasaanual);

console.log(dinero*meses/tasamensual)
console.log('su ahorro a final de ' + meses + ' meses ' + ' es de '+ (dinero*tasamensual*tasaanual))
