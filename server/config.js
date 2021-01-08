const dev = process.env.NODE_ENV === 'production';

const config = {}

if (dev) {
    config.serverUrl = 'http://121.196.178.118:9001'
} else {
    config.serverUrl = 'http://127.0.0.1:9001'
}

module.exports = config

