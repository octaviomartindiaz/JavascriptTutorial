// ESModules style
import { getUsers, getUserById } from './8.exportFunctions.js'

console.log('Get the users')
// Notice that this returns a promise!
// (how can we resolve it?
// =>getUsers()
// .then(users => console.log(users))
// .catch(err => console.err(err))

async function processUsers () {
  try {
    const users = await getUsers()
    console.log(`Users: ${JSON.stringify(users)}`)
  } catch (error) {
    console.log(error)
  }
}

processUsers()

console.log('Get by user ID')
// Notice that this returns a promise!
// (how can we resolve it?
// =>getUserbyId(1)
// .then(user => console.log(user))
// .catch(err => console.err(err))

async function processUserbyId () {
  try {
    const user = await getUserById(1)
    console.log(`Users: ${JSON.stringify(user)}`)
  } catch (error) {
    console.log(error)
  }
}

processUserbyId()
