/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2020-11-18 21:26:02
**/

const { fetch1, fetch2 } = require('./async')

// 如果不用done的话，异步断言是走不到的
test('测试异步方法async1', () => {
  fetch1(data => {
    console.log('比如现在这个方法就不会执行')
    expect(data).toEqual({ msg: 'async1 done' })

    // done()
  })
})

// 如果所有异步方法都不使用done做结尾符，那么异步的断言就执行不到
test('测试异步方法async2', () => {
  fetch2().then(data => {
    console.log('测试到data is ', data)
    expect(data).toEqual({ msg: 'async2 done' })
    // done()
  })
})
