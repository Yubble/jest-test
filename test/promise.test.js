const { fetchData1, fetchData2 } = require('./promise')

test('promise 测试', () => {
    // 用于声明有多少个expect
    expect.assertions(1)
    return fetchData1().then(res => {
        console.log('Promise 成功')
        expect(res).toEqual({ suc: true })
    }).catch(err => {
        console.log('Promise 失败')
        expect(JSON.stringify(err).indexOf('404') > 1).toBe(true)
    })
})

test('async await 处理方式', async (done) => {
    try {
        const res = await fetchData2()
        expect(res).toMatchObject({ suc: true })
        console.log('比对完成成功的处理')
        done()
    } catch (err) {
        expect(JSON.stringify(err).indexOf('404') > 1).toBe(true)
        done()
    }
})
