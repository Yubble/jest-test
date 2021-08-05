/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2020-11-17 15:05:30
**/

test('case1 被跳过', () => {
  console.log('被跳过的case1')
})

test.only('只测试这个用例，跳过其他case', () => {
  console.log('可以使用的测试方式')
})

test('case2 也会被跳过', () => {
  console.log('需要跳过的case2')
})
