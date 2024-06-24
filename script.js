'use strict'
// Array Destructuring - Scomporrere Array
const arr11 = [1, 2, 4, [8, 0, 2, [2, 3]]]
console.log(arr11[3][3][0]) // return 2
console.log(arr11[3][1]) // return 0
const [hello, , , ...hello2] = arr11
console.log(hello, hello2)
const [first = 1, second = 1, tirth = 1, fourth = 1, fifth = 1] = arr11
console.log(first, second, tirth, fourth, fifth)
const arrSecond = []
for (const i of arr11[3][3]) arrSecond.push(arr11[3][3][0])
console.log(arrSecond) // [2, 2]
//
const arrSplit = 'rabbit,dog,cat,snake,wolf'.split(',') // string method return array
const myName = 'bruno casamassima'.split(' ')
const [a, b, , , e = 9, y = 8, ...oth] = arrSplit // valori di default
const [f = 1, , , ...g] = arrSplit
const [firstEl, secondEl] = (arrSplit && myName) || (myName && arrSplit) // circuito corto
console.log(oth, a, b, y, e, f, g)

///////
//////////////
// Sets - Valori unici
const arraySecondary = ['Hello', 'Hello', 'Mamma', 'Bruno', 'Mamma']
const arraySecondaryUnique = new Set(arraySecondary)
let numberCas = Math.trunc(Math.random() * arraySecondaryUnique.size + 1)
const mySet = new Set([
  'Hello world! First',
  'Hello world! First',
  'Hello world! Tirth',
  'Hello world! Fourth',
  'Hello world! Tirth',
  'Hello world! Fifth',
])

console.log(mySet.has('Hello'))
mySet.add('Hello!')
mySet.add('Hello!')
mySet.delete('Hello!')
console.log(!mySet.has('Hello!') && arraySecondaryUnique.has('Mamma')) // !false && true = true
console.log(mySet.size, arraySecondaryUnique.size)
console.log(mySet, arraySecondaryUnique)
mySet.clear()
for (const i of mySet) console.log(i) // Sets are iterable

///////
//////////////
// Maps
const arrayMapFirst = new Map() // Declare empty
const arrKey = ['29', '04', '02'] // array key allowed, object key entries

arrayMapFirst.set('1', 'Ciao!')
arrayMapFirst.set(true, 'Si sono vero!')
arrayMapFirst.set(false, 'Falso!')
arrayMapFirst.set(2, 'Si!!')
arrayMapFirst.set([1, 2], 'Sarò mai mostrato?') // not correct
arrayMapFirst.set(arrKey, 'Questo è corretto') // correct

console.log(arrayMapFirst.get([1, 2])) // undefined not the same object
console.log(arrayMapFirst.get(arrKey)) // correct
console.log(arrayMapFirst.get('1'))
console.log(arrayMapFirst.has('1'))
console.log(arrayMapFirst.delete('1'))
console.log(arrayMapFirst.size)
console.log(arrayMapFirst)
console.log(arrayMapFirst.get(10 > 8 || 6 < 3))

///////
//////////////
// Functions
//

// Capitalize function
const capitalizeWord = function (word) {
  const wordArr = word.split(' ')
  const newArr = []
  for (const i of wordArr) newArr.push(i.replace(i[0], i[0].toUpperCase()))
  let stringFinally = `${newArr.join(' ')}`
  return stringFinally
}

console.log(capitalizeWord('hello everyone, javascript is fun!'))
//


// Nascondere le cifre di una carta senza le ultime 4
const hiddenCard = function (cardNum) {
  const numCardString = cardNum + '' // cardNum Number, in String
  const numCardSlice = numCardString
    .slice(-4) // update method strings
    .padStart(numCardString.length, '*')
  return numCardSlice
}

console.log(hiddenCard(prompt('Type your number card')))
console.log(hiddenCard(5111444564553099))
//

// Metodo 1 Addizione
const addictionAll = function (...numeri) {
  let somma = 0
  for (const i of numeri) somma += i
  return somma
}

addictionAll(20, 20, 20)

// Metodo 2 Addizione
const test = prompt('Type number followed by space').split(' ')
let sum = 0
for (const i of test) sum += Number(i)
alert(sum)

///////
//////////////
// String Methods
console.log(secondEl.split('s'))
console.log(secondEl.split('a').join('---------'))
console.log(a.padEnd(a.length + 10, '+'))
console.log(e.padStart(e.length + 15, '+').padEnd(e.length + 30, '+'))
console.log(firstEl.split('r')) // ['b', 'uno']
console.log(firstEl.split('r').join('---')) // b--uno
console.log(firstEl.slice(-firstEl.length)) //
console.log(firstEl.slice(0, 2).toUpperCase()) //
console.log(firstEl.includes('o') && secondEl.includes('asa')) // true
console.log(firstEl.includes('b')) // true
console.log(firstEl.startsWith('B')) // false
console.log(firstEl.endsWith('o')) // true
console.log(secondEl.indexOf('ss')) // 6
console.log(secondEl.lastIndexOf('s')) // 7
console.log(secondEl.replace('ssima', 'oh shit')) // caoamaoh shit
console.log(secondEl.replace(/s/g, 'o')) // caoamaooima // old
console.log(secondEl.replaceAll('s', 'o')) // caoamaooima // new
console.log(` ${secondEl}`.trim())
console.log(` ${secondEl} `.trim().toLowerCase())
console.log(` ${secondEl} `.trim().toUpperCase())
