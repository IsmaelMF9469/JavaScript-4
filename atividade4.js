const prompt = require('prompt-sync')();

const aString = prompt ('Digite o valor de A: ')
const A = Number(aString)

const bString = prompt ('Digite o valor de B: ')
const B = Number(bString)

const cString = prompt ('Digite o valor de C: ')
const C = Number(cString)

const R = Math.pow (A + B,2.0)
const S = Math.pow(B + C,2.0)
const D = (R + S)/ 2

console.log(`O valor de D é: ${D}`)