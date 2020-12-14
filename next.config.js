const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        customkey: 'value' // 环境变量
    }
}

