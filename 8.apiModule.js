// Loading from node modules folder by its identifier
const axios = require('axios')
const baseUrl = 'https://jsonplaceholder.typicode.com'
const usersEndpointPath = '/users'

// Common JS format is used in Node environments
// ('module.exports' to export, and 'require' to import)
module.exports = {
  getUsers: async () => {
    try {
      const response = await axios.get((`${baseUrl}${usersEndpointPath}`))
      return response.data
    } catch (error) {
      console.log(error)
    }
  },

  getUserById: async (id) => {
    try {
      const response = await axios.get(`${baseUrl}${usersEndpointPath}\\${id}`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}
