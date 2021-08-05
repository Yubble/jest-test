/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2020-11-18 21:28:22
**/

exports.fetch1 = (fn) => {
  setTimeout(() => {
    fn({
      msg: 'async1 done'
    })
  }, 1000)
}

exports.fetch2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        msg: 'async2 done'
      })
    }, 4000)
  })
}