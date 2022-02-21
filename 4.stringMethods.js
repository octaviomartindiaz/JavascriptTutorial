
const str1 = 'My dog is "Haru"'
const str2 = "My dog is 'Haru'"
const str3 = "It's my dog!"

const str = 'Apple,Banana,Kiwi'
const start = 6                     // Starting from zero
const end = 12                      // Non-inclusive end
console.log(str.length)             // Prints 17
console.log(str.indexOf('Banana'))  // Prints 6
console.log(str.indexOf('Orange'))  // Prints -1
console.log(str.slice(start, end))  // Prints Banana
console.log(str.slice(start))       // Prints Banana,Kiwi
console.log(str.charAt(6))          // Prints B
console.log(str[0])                 // Prints A
console.log(str.split(','))               // Prints ['Apple', 'Banana', 'Kiwi']
console.log(str.replace('Kiwi','Orange')) // Prints Apple,Banana,Orange

const firstName = 'John'
const lastName = 'Doe'
// Using the concat operator +
console.log('Welcome ' + firstName + ', ' + lastName + '!')
// Using string interpolation (preferred)
console.log(`Welcome ${firstName}, ${lastName}!`) 
