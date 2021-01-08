const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        requestUrl: isProd ? 'http://121.196.178.118:7000' : 'http://127.0.0.1:7000' // 环境变量
    }
}

