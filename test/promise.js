exports.fetchData1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (false) {
                resolve({
                    suc: true
                })
            } else {
                reject({
                    code: 404
                })
            }
        }, 10)
    })
}

exports.fetchData2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve({
                    suc: true
                })
            } else {
                reject({
                    code: 404
                })
            }
        }, 300)
    })
}
