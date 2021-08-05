/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2020-11-18 20:53:25
**/

const addDivToBody = require('./dom')
const $ = require('jquery')

test('测试 addDivToBody', () => {
  addDivToBody()
  console.log('div length is ', $('body').find('div').length)
})