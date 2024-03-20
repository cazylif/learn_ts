// var , let , const

//var
let x = 5
let y 
let z: number
y = 1
z = 3
// z = 'hello'

console.log(x)
x = 10
console.log(x)
// x = 'string'
y = 'hello'
console.log(x)
console.log(y)

//const
const a = 3
console.log(a)

const message = 'hi'
console.log(message)

//Example weight

const weight1 = 50
const weight2 = 40

console.log('sum of weight is ' + (weight1 + weight2))
console.log('sum of weight is ' + (weight1 - weight2))

//bmi calculator
const weight = 49
const height = 1.6//in mater
const bmi = weight / (height*height)

console.log((height ^ 2))
console.log('your height is '+ height +'m '+ 'your weight is '+ weight +'kg '+ 'your bmi is ' + bmi)
console.log(`weight is ${weight} height is ${height} bmi is ${bmi}`)


//c to f temreture
const celcius = 40
const fahrenheit = (celcius * (9 / 5)) + 32

console.log('fahrenheit is '+ fahrenheit)