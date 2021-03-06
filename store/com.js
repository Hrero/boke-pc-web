import httpAgent from '../httpAgent';
/**
 * 页面名_模块名_类型名
 */
const comState = {
    com_label_integer: (action) => {
        return {
            default: 0,
            type: 'comLabelInteger',
            data: {
                com_label_integer: Number(action? action.com_label_integer: 0)
            }
        }
    },
    com_sort_list: (action) => {
        return {
            default: 0,
            type: 'comSortList',
            data: {
                com_sort_list:  action? action.data: {}
            }
        }
    },
    com_user_info: (action) => {
        return {
            default: {},
            type: 'comUserInfo',
            data: {
                com_user_info: action?.userinfo? action?.userinfo: {}
            }
        }
    }
}

export default comState;
