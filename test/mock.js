const axios = require('axios')

exports.getData = () => {
    return axios.get('/api').then(res => res.data)
}

exports.runCallback = callback => {
    console.log('func1 is ', callback(123))
}
