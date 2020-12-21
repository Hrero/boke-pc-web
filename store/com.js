/**
 * 页面名_模块名_类型名
 */
const comState = {
    com_label_integer: (action) => {
        return {
            default: 0,
            type: 'comLabelInteger',
            data: {
                com_label_integer: Number(action?action.com_label_integer:0)
            }
        }
    }
}

export default comState;
