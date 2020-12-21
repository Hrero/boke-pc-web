const config = require('./config');
const axios = require('axios');
const request = require('./request');
const Response = require('./response');
const { isEmpty } = require('zgl-utils-js');

module.exports = async (req, res) => {
    const post_message_list = await request({
        url: '/message/getMessageList',
        method: 'get',
        body: {}
    })
    const post_article_list = await request({
        url: '/article/getArticleList',
        method: 'post',
        body: {
            pageSize: 100,
            pageNum: 1
        }
    })
    const post_view_list = await request({
        url: '/user/getUserView',
        method: 'post',
        body: {}
    })

    if (!isEmpty(post_article_list) && !isEmpty(post_message_list) && !isEmpty(post_view_list)) {
        res.send(Response.sendSuccess({
            post_article_list,
            post_message_list,
            post_view_list
        }))
    } else {
        res.send(Response.sendError())
    }
}


