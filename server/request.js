const config = require('./config');
const axios = require('axios');

module.exports = ({url, method, body}) => {
    return new Promise((r, e) => {
        let requstServer = {};
        if (method === 'get') {
            const params = {};
            Object.keys(body).map(key => {
                params[key] = body.key;
            })
            requstServer = {
                params
            }
        }
        if (method === 'post') {
            requstServer = body;
        }
        console.log(config.serverUrl + url, 'config.serverUrl>>>>>>>>>>');
        axios[method](config.serverUrl + url, requstServer).then(response => {
            r(response.data)
        }).catch(error => {
            e()
            catchError({
                method, 
                url: config.serverUrl + url,
                body
            })
        });
    })
    function catchError({method, url, body}) {
        console.log('请求类型*************', method);
        console.log('请求地址*************', url);
        console.log('请求参数*************', JSON.stringify(body));
    }
}