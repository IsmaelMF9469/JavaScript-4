const prompt = require('prompt-sync')();

const idadeString = prompt ('Digite sua idade em dias: ')

const idade = Number(idadeString)

const anos = Math.floor(idade / 365)
const meses = Math.floor((idade % 365) / 30) 
const dias = (idade % 365) % 30

console.log(`Você tem ${anos} anos, ${meses} meses, ${dias} dias`)