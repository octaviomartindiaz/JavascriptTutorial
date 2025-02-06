// Using ESModules (Ecma Script) with import / export
import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com'
const usersEndpointPath = '/users'

const getUsers = async function () {
  try {
    const response = await axios.get((`${baseUrl}${usersEndpointPath}`))
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const getUserById = async function (id) {
  try {
    const response = await axios.get(`${baseUrl}${usersEndpointPath}\\${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export { getUsers, getUserById }
