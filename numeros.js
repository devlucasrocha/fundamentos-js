const n1 = 1.0
const n2 = Number('2.0')

console.log(n1, n2)
console.log(Number.isInteger(n1))
console.log(Number.isInteger(n2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * n1 + avaliacao2 * n2
const media = total / (n1 + n2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // Em binario
console.log(typeof media)
console.log(typeof Number)