/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2020-11-24 11:27:35
**/
const { getData } = require('./mock')
const axios = require('axios')

jest.mock('axios')
test('模拟 axios 请求', async () => {
    axios.get.mockResolvedValueOnce({ data: 'hello' })
    try {
        const res = await getData()
        console.log('请求成功，res is ', res)
    } catch (err) {
        console.log('请求失败')
    }
})