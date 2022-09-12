const prompt = require('prompt-sync')();

const x1Spring = prompt ('Digite com o valor de x1 ')
const x1 = Number(x1Spring)

const y1Spring = prompt ('Digite com o valor de y1 ')
const y1 = Number(y1Spring)

const x2Spring = prompt ('Digite com o valor de x2 ')
const x2 = Number(x2Spring)

const y2Spring = prompt ('Digite com o valor de y2 ')
const y2 = Number(y2Spring)

const D = Math.sqrt(Math.pow(x2 - x1,2.0) + Math.pow(y2 - y1,2.0),2.0)

console.log(`A distancia entre eles é: ${ Math.floor(D)}`)