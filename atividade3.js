const prompt = require('prompt-sync')();

const segundosString = prompt ('Quantos segundos durou o evento? ')
const segundos = Number(segundosString)

const horas = Math.floor (segundos / 3600)
const minutos = Math.floor ((segundos % 3600) / 60)
const segundos2 = (segundos % 3600) % 60

console.log(`O evento durou durou ${horas} horas, ${minutos} minutos, ${segundos2} segundos`)