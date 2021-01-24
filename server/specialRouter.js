const config = require('./config');
const axios = require('axios');
const request = require('./request');
const Response = require('./response');
const { isEmpty } = require('zgl-utils-js');

module.exports = async (req, res) => {
    if (1) {
        res.send(Response.sendSuccess({
            html_head_info: {
                headTitle: 'ELEVEN', 
                headKeywords: 'js和java的博客分享', 
                headDescription: 'js和java的博客分享', 
                author: 'ELEVEN'
            },
        }))
    } else {
        res.send(Response.sendError())
    }
}
