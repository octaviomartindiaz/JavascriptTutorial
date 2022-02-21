// const cars2 = new Array('Ford', 'Renault', 'Seat') // Not recommended

// Array
const cars = [ 'Saab', 'Volvo', 'BMW' ]

const firstCarBrand = cars[0]
console.log(firstCarBrand)  // Prints Saab

cars[0] = 'Mercedes' // Notice that cars were declared as const, 
console.log(cars)    // but its elements can be changed! 
cars = ['Toyota']    // Error: assignment to constant variable

// Array
const cars = [ 'Saab', 'Volvo', 'BMW' ]

console.log(cars.length) // Prints 3

cars.push('Honda')      // Appends Honda as last element
console.log(cars)       // Prints ['Saab','Volvo','BMW','Honda']

const poppedCar = cars.pop() // Removes last element (Honda)
console.log(`popped car ${poppedCar}`) // Prints Honda
console.log(cars)       // Prints ['Saab','Volvo','BMW']

cars.shift()            // Removes first element (Saab)
console.log(cars)       // Prints ['Volvo','BMW']

cars.unshift('Lexus')   // Adds Lexus as first element
console.log(cars)       // Prints ['Lexus','Volvo','BMW']

// Array
const cars = ['Lexus', 'Volvo', 'BMW']

cars.splice(2, 0, 'Audi', 'Tesla')   // Insert elems from position 2 deleting 0 elems
console.log(`Spliced cars: ${cars}`) // Prints Spliced cars: Lexus,Volvo,Audi,Tesla,BMW
                                     // Notice using ${} prints the elems, not the array!
cars.splice(3, 2) // Using splice to remove 2 elems from position 3 (Tesla and BMW)
console.log(cars) // Prints ['Lexus','Volvo','Audi']

const cars2 = ['Ford', 'Renault', 'Seat']

const mergedArrays = cars.concat(cars2) // Merges the two arrays into one
console.log(mergedArrays)        // Prints ['Lexus','Volvo','Audi','Ford','Renault','Seat']

const cars3 = mergedArrays.slice(1, 3) // Returns elems from the start argument (1), 
                                       // up to (but not including) the end argument (3)
                                       // so that mergedArray is not modified
console.log(cars3)                     // Prints ['Volvo','Audi']

// Array
const cars = ['Volvo','Audi','Mercedes','Lexus','BMW','Seat']

cars.forEach(printElement) // Array iteration.
// The function will be called for each item of the array cars
function printElement (item) {
  console.log(item)
}

cars.forEach(item => console.log(item)) // Lambda function
// It is the equivalent inline arrow function to printElement

const longNamedBrands = cars.filter(brandName => brandName.length > 4)
console.log(longNamedBrands)
// The lambda function filters the cars to be printed


const array1 = [1, 2, 3, 4]

// total (the reduced or aggregated value so far)
// value (the value of the current element)
const reducer = (total, value) => total + value
console.log(array1.reduce(reducer))   // Prints 10
// Runs a function on each element to produce (reduce it to) a single value
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)) // Prints 15
// Reduce may accept an initial value (5)
// 5 + 1 + 2 + 3 + 4

const array2 = [1, 4, 9, 16]
const map1 = array2.map(x => x * 2)  
// Creates a new array by computing a value for each element
// To do so, a function to map is passed
console.log(map1)  // Prints [2,8,18,32]
