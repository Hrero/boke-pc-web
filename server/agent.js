const config = require('./config');
const axios = require('axios');

module.exports = (req, res) => {
    let url = req.headers['api-url'];
    const method = req.headers['api-method'];
    const requstServer = {};
    if (method === 'get') {
        const params = {};
        Object.keys(req.body).map(key => {
            params[key] = req.body.key;
        })
        requstServer = {
            params
        }
    }
    if (method === 'post') {
        requstServer = req.body;
    }
    axios[method](config.serverUrl + url, requstServer).then(response => {
        res.send(response.data)
    }).catch(error => {
        catchError({
            method, 
            url: config.serverUrl + url,
            body: req.body
        })
    });
    function catchError({method, url, body}) {
        console.log('请求类型*************', method);
        console.log('请求地址*************', url);
        console.log('请求参数*************', JSON.stringify(body));
    }
}


