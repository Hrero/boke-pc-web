
/**
 * 页面名_模块名_类型名
 */
export default {
    info_message_list: (action) => {
        return {
            default: {},
            type: 'info_message_list',
            data: {
                index_message_list: action? action.data: {}
            }
        }
    },
    info_view_list: (action) => {
        return {
            default: {},
            type: 'info_view_list',
            data: {
                index_view_list: action? action.data: {}
            }
        }
    }
}
