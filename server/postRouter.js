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
            sortId: 15,
            userid: req.body.userid,
            pageSize: 100,
            pageNum: 1
        }
    })
    const post_view_list = await request({
        url: '/user/getUserView',
        method: 'post',
        body: {
            sortId: req.body.sortId
        }
    })
    const com_sort_list = await request({
        url: '/sort/getSortList',
        method: 'get',
        body: {}
    })
    const com_class_list = await request({
        url: '/sort/getClassList',
        method: 'get',
        body: {}
    })
    const com_hot_article = await request({
        url: '/article/getHotArticle',
        method: 'post',
        body: {}
    })

    if (!isEmpty(post_article_list) && !isEmpty(post_message_list) && !isEmpty(com_sort_list)) {
        res.send(Response.sendSuccess({
            post_article_list,
            post_message_list,
            com_sort_list,
            com_class_list,
            post_view_list,
            com_hot_article,
            com_label_integer: 1,
            html_head_info: {
                headTitle: 'ELEVEN', 
                headKeywords: 'js和java的博客分享,eleven,ELEVEN,HAOZENGRUN,haozengrun,react,canal,数仓,郝增润,郝增润的博客,vue', 
                headDescription: 'js和java的博客分享,eleven,ELEVEN,HAOZENGRUN,haozengrun,react,canal,数仓,郝增润,郝增润的博客,vue', 
                author: 'ELEVEN'
            }, 
        }))
    } else {
        res.send(Response.sendError())
    }
}

