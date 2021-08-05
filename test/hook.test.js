/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2020-11-17 12:56:09
**/
// hook 钩子函数
test('测试 jest 的钩子', () => {})
test('测试 钩子第二部', () => {})

beforeAll(() => {
  console.log('beforeAll')
})
afterAll(() => {
  console.log('afterAll')
})
beforeEach(() => {
  console.log('beforeEach')
})
afterEach(() => {
  console.log('afterEach')
})
