const request = require('./request');
const { isEmpty } = require('zgl-utils-js');

module.exports = async (req, res) => {
    const data = await request({
        url: req.headers['api-url'],
        method: req.headers['api-method'],
        body: req.body
    })
    res.send(data)
}
