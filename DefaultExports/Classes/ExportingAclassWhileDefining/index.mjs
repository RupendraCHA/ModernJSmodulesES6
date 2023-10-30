import details from './expression.mjs'

const detailsObject = new details('Rupendra', 'Male', 24)

console.log(detailsObject)

console.log(`My name is ${detailsObject.name}.`)
console.log(`I am ${detailsObject.age} years old.`)
