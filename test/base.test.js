/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2020-11-17 12:56:09
**/
// 基础匹配器测试

test('jest 匹配器：基础操作', () => {
    const a = 1
    const b = { one: 1 }
    const c = null
    const d = undefined
    const e = { foo: 123 }
    const f = true
    const g = false
    const h = false
    // 等于某个值
    expect(a).toBe(1)
    // 是否相等
    expect(b).toEqual({ one: 1 })
    // 是否为null
    expect(c).toBeNull()
    // 是否为undefined
    expect(d).toBeUndefined()
    // 是否已声明
    expect(e.foo).toBeDefined()
    // 是否为真
    expect(f).toBeTruthy()
    // 是否为假
    expect(g).toBeFalsy()
    // 取非
    expect(h).not.toBeTruthy()
})

test('jest 匹配器：数字类型', () => {
    // 浮点数比较
    expect(0.2 + 0.3).toBeCloseTo(0.5)
    // 大于
    expect(4).toBeGreaterThan(0.3)
    // 小于
    expect(1).toBeLessThan(7)
    // 大于等于
    expect(7).toBeGreaterThanOrEqual(7)
    // 小于等于
    expect(3).toBeLessThanOrEqual(4)
})

test('jest 匹配器：字符串', () => {
    expect('www.yubble.com').toMatch('yubble')
})

test('jest 匹配器：数组', () => {
    const arr = [324, 'ronnieo', true]
    // 数组中是否包含
    expect(arr).toContain(324)
})

test('jest 匹配器：对象', () => {
    const obj = { status: { data: 332 } }
    expect(obj).toMatchObject({ status: { data: 332 } })
})

test('jest 匹配器：异常', () => {
    const a = () => { throw new Error('this is a new Error') }
    expect(a).toThrow()
    expect(a).toThrow('this is a new Error')
})
