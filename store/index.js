/**
 * 页面名_模块名_类型名
 */
export default {
    index_article_list: (action) => {
        return {
            default: {},
            type: 'indexArticleList',
            data: {
                index_article_list: action? action.data: {}
            }
        }
    },
    index_message_list: (action) => {
        return {
            default: {},
            type: 'indexMessageList',
            data: {
                index_message_list: action? action.data: {}
            }
        }
    },
    index_view_list: (action) => {
        return {
            default: {},
            type: 'indexViewList',
            data: {
                index_view_list: action? action.data: {}
            }
        }
    }
}
