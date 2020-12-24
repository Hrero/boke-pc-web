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
    const com_label_integer = await request({
        url: '/sort/getSortList',
        method: 'get',
        body: {}
    })

    if (!isEmpty(post_article_list) && !isEmpty(post_message_list) && !isEmpty(post_view_list) && !isEmpty(com_label_integer)) {
        res.send(Response.sendSuccess({
            post_article_list,
            post_message_list,
            post_view_list,
            com_label_integer
        }))
    } else {
        res.send(Response.sendError())
    }
}


