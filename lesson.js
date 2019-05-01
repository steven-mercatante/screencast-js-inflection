const inflection = require('inflection')

console.log(inflection.pluralize('keyboard'))

console.log(inflection.singularize('mice'))

const amount = 100
const dollars = inflection.inflect('dollar', amount)
const msg = `You have ${amount} ${dollars} available.`
console.log(msg)

console.log(inflection.ordinalize('I live on 23 street'))