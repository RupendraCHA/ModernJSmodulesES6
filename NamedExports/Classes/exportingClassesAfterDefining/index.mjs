import {books, constituencies} from './expression.mjs'

let Books = new books('G.C.Leong', 'Ramesh Singh')
let electorate = new constituencies(175, 25)

console.log(Books)
console.log(electorate)
