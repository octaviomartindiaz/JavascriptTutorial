// Let variables can be modified. 

let x, y       // Statement 1 
x = 5          // Statement 2
y = 6          // Statement 3
let z = x + y  // Statement 4

const x = 5      // Global scope

{
  const x = 6    // Block scope, not accesible from outside 
  const y = 7
  console.log(x) // Prints 6
}

console.log(x)   // Prints 5
console.log(y)   // Error: Out-of-scope variable

// Const variables are never reasigned
const myName = 'Alejandro'
const mySurname = 'Fernández-Montes'
console.log(myName + ' ' + mySurname)
