const prompt = require('prompt-sync')();


const anosString = prompt('Quantos anos voce tem? ')

const anos = Number(anosString)

const mesesString = prompt('Quantos meses voce tem? ')

const meses = Number(mesesString)

const diasString = prompt('Quantos dias voce tem? ')

const dias = Number(diasString)


const dias2 = ((anos * 365) + (meses *30) + dias)

console.log(`\n\nVocê viveu ${dias2} dias`)