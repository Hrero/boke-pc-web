const config = require('./config');
const axios = require('axios');

module.exports = (req, res) => {
    let url = req.headers['api-url'];
    if (req.headers['api-method'] === 'get') {
        const params = Object.keys(req.body).map(key => {
            return key + '=' + req.body.key + '&';
        })
        url = url + params;
    }
    axios[req.headers['api-method']](config.serverUrl + url).then(response => {
        res.send(response.data)
    }).catch(error => {
        console.log('请求类型*************', req.headers['api-method']);
        console.log('请求地址*************', config.serverUrl + url);
        console.log('请求参数*************', JSON.stringify(req.body));
    });
}


