const request = require('./request');
const { isEmpty } = require('zgl-utils-js');

module.exports = async (req, res) => {
    request({
        url: '/user/addUserView',
        method: 'post',
        body: {
            ip: getClientIp(req)
        }
    })
    const data = await request({
        url: req.headers['api-url'],
        method: req.headers['api-method'],
        body: req.body
    })
    res.send(data)
    function getClientIp(req) {
        var ipAddress;
        var forwardedIpsStr = req.header('x-forwarded-for'); 
        if (forwardedIpsStr) {
            var forwardedIps = forwardedIpsStr.split(',');
            ipAddress = forwardedIps[0];
        }
        if (!ipAddress) {
            ipAddress = req.connection.remoteAddress;
        }
        return ipAddress.split(':ffff:')[1];
    };
}
