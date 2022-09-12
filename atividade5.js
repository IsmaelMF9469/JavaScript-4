const prompt = require('prompt-sync')();

const n1Spring = prompt ('Digite a primeira nota: ')
const n1 = Number(n1Spring)

const n2Spring = prompt ('Digite a segunda nota: ')
const n2 = Number(n2Spring)

const n3Spring = prompt ('Digite a terceira nota: ')
const n3 = Number(n3Spring)

media = (n1/2) + (n2/3) + (n3/5)

console.log(`Média final: ${media} `)