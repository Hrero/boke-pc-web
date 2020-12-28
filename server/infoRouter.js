const request = require('./request');
const Response = require('./response');
const { isEmpty } = require('zgl-utils-js');

module.exports = async (req, res) => {
    const info_Article_Vo = await request({
        url: '/article/getArticleInfo',
        method: 'post',
        body: {
            ip: getClientIp(req),
            ...req.body
        }
    })
    const info_message_list = await request({
        url: '/message/getMessageList',
        method: 'get',
        body: {}
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
    request({
        url: '/user/addUserView',
        method: 'post',
        body: {
            ip: getClientIp(req),
            articleId: req.body.id
        }
    })
    if (!isEmpty(info_Article_Vo) && !isEmpty(info_message_list) && !isEmpty(info_view_list) && !isEmpty(com_sort_list)) {
        res.send(Response.sendSuccess({
            info_Article_Vo,
            info_message_list,
            info_view_list,
            com_sort_list,
            user_ip: getClientIp(req),
            com_label_integer: info_Article_Vo.data.sortId,
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

function getClientIp(req) {
    var ipAddress;
    var forwardedIpsStr = req.header('x-forwarded-for'); 
    if (forwardedIpsStr) {
        var forwardedIps = forwardedIpsStr.split(',');
        ipAddress = forwardedIps[0];
    }
    if (!ipAddress) {
        ipAddress = req.connection.remoteAddress;
    }
    return ipAddress.split(':ffff:')[1];
};