/**
 * 页面名_模块名_类型名
 */
export default {
    post_article_list: (action) => {
        return {
            default: {},
            type: 'postArticleList',
            data: {
                post_article_list: action? action.data: {}
            }
        }
    },
    post_message_list: (action) => {
        return {
            default: {},
            type: 'postMessageList',
            data: {
                post_message_list: action? action.data: {}
            }
        }
    },
    post_view_list: (action) => {
        return {
            default: {},
            type: 'postViewList',
            data: {
                index_view_list: action? action.data: {}
            }
        }
    }
};
