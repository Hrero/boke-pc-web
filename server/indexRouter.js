const config = require('./config');
const axios = require('axios');
const request = require('./request');
const Response = require('./response');
const { isEmpty } = require('zgl-utils-js');

module.exports = async (req, res) => {
    const index_message_list = await request({
        url: '/message/getMessageList',
        method: 'get',
        body: {}
    })
    const index_article_list = await request({
        url: '/article/getArticleList',
        method: 'post',
        body: {
            pageSize: 100,
            pageNum: 1
        }
    })
    const index_view_list = await request({
        url: '/user/getUserView',
        method: 'post',
        body: {}
    })

    if (!isEmpty(index_message_list) && !isEmpty(index_article_list) && !isEmpty(index_view_list)) {
        res.send(Response.sendSuccess({
            index_article_list,
            index_message_list,
            index_view_list
        }))
    } else {
        res.send(Response.sendError())
    }
}


