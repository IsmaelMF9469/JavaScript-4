const prompt = require('prompt-sync')();

const cfString = prompt('Custo de fabrica: ')
const CF = Number(cfString)

const pD = (28 * CF) / 100
const i = (45 * CF) / 100
const cC = CF + pD + i

console.log(`O custo do consumidor será: ${cC}`)