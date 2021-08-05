/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2020-11-17 15:14:23
**/

// 测试snapshot快照功能
const { conf1, conf2 } = require('./snapshot.conf')

test("测试 conf1 对象", () => {
  expect(conf1).toMatchSnapshot()
})

// test("测试 conf2 对象", () => {
//   expect(conf2)
// })
