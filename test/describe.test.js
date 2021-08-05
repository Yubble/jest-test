/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2020-11-17 14:03:31
**/
describe('测试分组和钩子函数', () => {
  beforeEach(() => {
    console.log('describe描述每次执行')
  })

  describe('测试分组1', () => {
    test('第一分组下的测试用例', () => {
      const a = 1
      expect(a).toEqual(1)
    })
  })

  describe('测试分组2', () => {
    test('第二份租下的测试实例', () => {
      const a = 1
      expect(a).toEqual(1)
    })
  })
})
