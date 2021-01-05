
/**
 * 页面名_模块名_类型名
 */
export default {
    info_message_list: (action) => {
        return {
            default: {},
            type: 'infoMessageList',
            data: {
                index_message_list: action? action.data: {}
            }
        }
    },
    info_view_list: (action) => {
        return {
            default: {},
            type: 'infoViewList',
            data: {
                index_view_list: action? action.data: {}
            }
        }
    },
    info_commentList_list: (action) => {
        return {
            default: {
                commentList: [],
                length: 0
            },
            type: 'infoCommentListList',
            data: {
                info_commentList_list: action? action.commentList: {}
            }
        }
    }
}
