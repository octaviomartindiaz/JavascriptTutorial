const ApiModule = require('./8.apiModule')
const myFunctions = require('./9.exportFunctions')
const { getUsers, getUserById } = require('./9.exportFunctions')

console.log('ApiModule: ')
console.log(ApiModule)

console.log('ApiModule.getUsers(): ')
// Notice that this returns a promise!
// (how can we resolve it?
// => ApiModule.getUsers()
// .then(users => console.log(users))
// .catch(err => console.err(err))
console.log(ApiModule.getUsers())

async function processUsers1 () {
  try {
    const users = await ApiModule.getUsers()
    console.log(`Users: ${JSON.stringify(users)}`)
  } catch (error) {
    console.log(error)
  }
}

processUsers1()

console.log('myFunctions: ')
console.log(myFunctions)
console.log('myFunctions.getUsers(): ')
console.log(myFunctions.getUsers())

async function processUsers2 () {
  try {
    const users = await myFunctions.getUsers()
    console.log(`Users: ${JSON.stringify(users)}`)
  } catch (error) {
    console.log(error)
  }
}

processUsers2()

console.log('getUsers(): ')
console.log(getUsers())

console.log('getUserById(1): ')
console.log(getUserById(1))

async function processUsers3 () {
  try {
    const users = await getUsers()
    console.log(`Users: ${JSON.stringify(users)}`)
  } catch (error) {
    console.log(error)
  }
}

processUsers3()
