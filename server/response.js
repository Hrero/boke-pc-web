module.exports = {
    sendError: () => {
        return {
            code: 10001,
            data: {},
            msg: '接口出错'
        }
    },
    sendSuccess: (data) => {
        return {
            code: 0,
            data,
            msg: '成功'
        }
    }
}