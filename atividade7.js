const prompt = require('prompt-sync')();

const aSpring = prompt('Qual o valor de A: ')
const A = Number(aSpring)

const bSpring = prompt('Qual o valor de B: ')
const B = Number(bSpring)

const cSpring = prompt('Qual o valor de C: ')
const C = Number(cSpring)

const dSpring = prompt('Qual o valor de D: ')
const D = Number(dSpring)

const eSpring = prompt('Qual o valor de E: ')
const E = Number(eSpring)

const fSpring = prompt('Qual o valor de F: ')
const F = Number(fSpring)

const X= ((C*E)-(B*F))/((A*E)-(B*D))
const Y= ((A*F)-(C*D))/((A*E)-(B*D))

console.log(`O valor de X: ${X}, e Y: ${Y}`)
