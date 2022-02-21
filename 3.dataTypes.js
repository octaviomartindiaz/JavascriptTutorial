// boolean, string, number (decimal or not), object

const isEmpty = true
const message = 'Hello!'
const size = 3
const height = 1.75

// Object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  }
}

person.firstName = 'Paul'
console.log(person.fullName()) // Prints Paul Due
person = { firstName: 'Paul' } // Error: assignment to constant variable

// Array 
const cars = [   'Saab',   'Volvo',   'BMW' ]

console.log(cars[0])

// const height = 1.75
// Comparison for equal values
if (height == 1.75) {
  console.log('height == 1.75 is true')
}
if (height == '1.75') {
  console.log('height == \'1.75\' is true')
}
// Comparison for equal values and types
if (height === 1.75) {
  console.log('height === 1.75 is true')
}
if (height === '1.75') {
  console.log('height === \'1.75\' is true')
} else {
  console.log('height === \'1.75\' is false')
}
