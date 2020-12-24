const request = require('./request');
const Response = require('./response');
const { isEmpty } = require('zgl-utils-js');

module.exports = async (req, res) => {
    const info_Article_Vo = await request({
        url: '/article/getArticleInfo',
        method: 'post',
        body: req.body
    })
    const info_message_list = await request({
        url: '/message/getMessageList',
        method: 'get',
        body: {}
    })
    const info_view_list = await request({
        url: '/user/getUserView',
        method: 'post',
        body: {}
    })
    const com_label_integer = await request({
        url: '/sort/getSortList',
        method: 'get',
        body: {}
    })

    if (!isEmpty(info_Article_Vo) && !isEmpty(info_message_list) && !isEmpty(info_view_list) && !isEmpty(com_label_integer)) {
        res.send(Response.sendSuccess({
            info_Article_Vo,
            info_message_list,
            info_view_list,
            com_label_integer
        }))
    } else {
        res.send(Response.sendError())
    }
}


