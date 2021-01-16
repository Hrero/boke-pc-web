const Response = require('./response');

module.exports = async (req, res) => {
    res.send(Response.sendSuccess({
        user_ip: getClientIp(req)
    }))
}

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
    console.log(req.connection.remoteAddress, ipAddress, forwardedIpsStr,'=======ip====');
    return ipAddress.split(':ffff:')[1];
};