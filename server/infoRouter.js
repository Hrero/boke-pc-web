const request = require('./request');
const Response = require('./response');
const { isEmpty } = require('zgl-utils-js');

module.exports = async (req, res) => {
    const info_Article_Vo = await request({
        url: '/article/getArticleInfo',
        method: 'post',
        body: {
            ...req.body
        }
    })
    const info_view_list = await request({
        url: '/user/getUserView',
        method: 'post',
        body: {
            articleId: req.body.id
        }
    })
    const com_sort_list = await request({
        url: '/sort/getSortList',
        method: 'get',
        body: {}
    })
    const com_hot_article = await request({
        url: '/article/getHotArticle',
        method: 'post',
        body: {}
    })
    const info_commentList_res = await request({url: '/message/getCommentList', method: 'post' , body: {
        articleId: req.body.id
    }})
    let length = 0;
    info_commentList_res.data && info_commentList_res.data.forEach(element => {
        length = length + element.child.length
    });
    const info_commentList_list = {
        commentList: info_commentList_res.data,
        length: length + info_commentList_res.data.length
    }
    if (!isEmpty(info_Article_Vo) && !isEmpty(info_view_list) && !isEmpty(com_sort_list)) {
        res.send(Response.sendSuccess({
            info_Article_Vo,
            com_hot_article,
            info_view_list,
            com_sort_list,
            info_commentList_list,
            com_label_integer: 1,
            html_head_info: {
                headTitle: info_Article_Vo.data.title, 
                headKeywords: info_Article_Vo.data.headKeywords, 
                headDescription: info_Article_Vo.data.headDescription, 
                author: info_Article_Vo.data.author,
            },
            au_in_for: {
                name: 'ELEVEN', 
                title: info_Article_Vo.data.title,
                picture: "https://static2.zugeliang.com/lease/img/e70d2cb0-46b4-11eb-804e-e7d3fb3f1f4b.png",
                gmtCreated: info_Article_Vo.data.gmt_created,
                message: Math.floor(Math.random() * (100 - 10) + 10),
                reads: info_Article_Vo.data.lookNum
            }
        }))
    } else {
        res.send(Response.sendError())
    }
}