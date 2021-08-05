const { runCallback } = require('./mock')

test('测试 callback 函数', () => {
    // 生成一个
    const func1 = jest.fn()
    // 设定func1这个函数的返回值，第一次返回222，第二次返回333
    func1
        .mockReturnValueOnce(222)
        .mockReturnValueOnce(333)

    // 设定一个func2函数，并定义函数体为返回456
    const func2 = jest.fn(() => 456)
    func2.mockImplementation(() => 456)

    runCallback(func1)
    runCallback(func1)
    runCallback(func1)
    runCallback(func2)

    // 断言
    // 被执行
    expect(func1).toBeCalled()
    // 调用次数为3
    expect(func1).toBeCalledTimes(3)
    // 传入参数
    expect(func1).toHaveBeenCalledWith(123)
    expect(func1).toBeCalledWith(123)
    // 返回结果
    expect(func2.mock.results[0].value).toBe(456)

    // 输出mock
    console.log('func1 mock is ', func1.mock)
    console.log('func2 mock is ', func2.mock)
})
